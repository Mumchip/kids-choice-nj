import { useEffect, useState, type CSSProperties } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, FileCheck2, Pencil } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const phoneRegex = /^\+?1?\s*(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const fileListSchema = z
  .any()
  .refine(value => value === null || value instanceof FileList, "Invalid file input.");

const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z
      .string()
      .min(1, "Phone number is required.")
      .refine(value => phoneRegex.test(value), "Enter a valid US phone number."),
    criminalHistory: z.enum(["yes", "no"]).optional(),
    commercialLicense: z.enum(["yes", "no"]).optional(),
    passengerEndorsement: z.enum(["yes", "no"]).optional(),
    drugTestCompleted: z.enum(["yes", "no"]).optional(),
    driverLicenseFile: fileListSchema,
    abstractRecordFile: fileListSchema,
    priorExperience: z.enum(["yes", "no"]).default("no"),
    experienceCompany: z.string().optional(),
    experienceDuration: z.string().optional(),
    extraNotes: z.string().max(1000, "Notes must be under 1000 characters.").optional(),
  })
  .superRefine((data, ctx) => {
    const licenseFile = data.driverLicenseFile instanceof FileList && data.driverLicenseFile.length > 0 ? data.driverLicenseFile[0] : null;
    const abstractFile = data.abstractRecordFile instanceof FileList && data.abstractRecordFile.length > 0 ? data.abstractRecordFile[0] : null;

    if (licenseFile) {
      if (!ACCEPTED_FILE_TYPES.includes(licenseFile.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Unsupported file type. Please upload a JPG, PNG, or PDF.",
          path: ["driverLicenseFile"],
        });
      }
      if (licenseFile.size > MAX_FILE_SIZE_BYTES) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `File size should be under ${MAX_FILE_SIZE_MB}MB.`,
          path: ["driverLicenseFile"],
        });
      }
    }

    if (abstractFile) {
      if (!ACCEPTED_FILE_TYPES.includes(abstractFile.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Unsupported file type. Please upload a JPG, PNG, or PDF.",
          path: ["abstractRecordFile"],
        });
      }
      if (abstractFile.size > MAX_FILE_SIZE_BYTES) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `File size should be under ${MAX_FILE_SIZE_MB}MB.`,
          path: ["abstractRecordFile"],
        });
      }
    }

    if (data.priorExperience === "yes") {
      if (!data.experienceCompany?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Company name is required when prior experience is selected.",
          path: ["experienceCompany"],
        });
      }
      if (!data.experienceDuration?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Duration is required when prior experience is selected.",
          path: ["experienceDuration"],
        });
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

const checklist = [
  "A photo or scan of your driver’s license",
  "Your abstract driver’s record",
  "Details of any prior driving jobs",
];

const qualificationQuestions = [
  { name: "criminalHistory", label: "Criminal history with fingerprint?" },
  { name: "commercialLicense", label: "Commercial Driver’s License (CDL)?" },
  { name: "passengerEndorsement", label: "Passenger & Student Endorsement?" },
  { name: "drugTestCompleted", label: "Drug test completed?" },
] as const;

const RequiredTag = () => (
  <span className="ml-1.5 rounded-full bg-secondary px-2 py-0.5 align-middle text-xs font-bold text-muted-foreground">Required</span>
);

/** A labelled yes/no radio rendered as a pill. The whole pill is the click target. */
const YesNoOption = ({ name, value }: { name: string; value: "yes" | "no" }) => (
  <Label
    htmlFor={`${name}-${value}`}
    className="flex h-11 min-w-[5.5rem] cursor-pointer items-center gap-2.5 rounded-full border border-input px-4 font-normal transition-colors hover:border-foreground has-[[data-state=checked]]:border-foreground has-[[data-state=checked]]:bg-secondary has-[[data-state=checked]]:font-bold"
  >
    <RadioGroupItem id={`${name}-${value}`} value={value} />
    {value === "yes" ? "Yes" : "No"}
  </Label>
);

const JoinUs = () => {
  usePageTitle("Join Our Team");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      criminalHistory: undefined,
      commercialLicense: undefined,
      passengerEndorsement: undefined,
      drugTestCompleted: undefined,
      driverLicenseFile: null,
      abstractRecordFile: null,
      priorExperience: "no",
      experienceCompany: "",
      experienceDuration: "",
      extraNotes: "",
    },
  });

  const priorExperience = form.watch("priorExperience");

  useEffect(() => {
    if (priorExperience === "yes") {
      setExperienceModalOpen(true);
    } else {
      setExperienceModalOpen(false);
      form.setValue("experienceCompany", "");
      form.setValue("experienceDuration", "");
    }
  }, [priorExperience, form]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmissionFeedback("idle");

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("criminalHistory", data.criminalHistory ?? "Not provided");
      formData.append("commercialLicense", data.commercialLicense ?? "Not provided");
      formData.append("passengerEndorsement", data.passengerEndorsement ?? "Not provided");
      formData.append("drugTestCompleted", data.drugTestCompleted ?? "Not provided");
      formData.append("priorExperience", data.priorExperience === "yes" ? "Yes" : "No");
      formData.append("experienceCompany", data.experienceCompany?.trim() || "Not provided");
      formData.append("experienceDuration", data.experienceDuration?.trim() || "Not provided");
      formData.append("extraNotes", data.extraNotes?.trim() || "Not provided");

      const licenseFile = data.driverLicenseFile instanceof FileList && data.driverLicenseFile.length > 0 ? data.driverLicenseFile[0] : null;
      const abstractFile =
        data.abstractRecordFile instanceof FileList && data.abstractRecordFile.length > 0 ? data.abstractRecordFile[0] : null;

      if (licenseFile) {
        formData.append("upload", licenseFile, licenseFile.name);
      }

      if (abstractFile) {
        formData.append("abstractRecord", abstractFile, abstractFile.name);
      }

      const response = await fetch("/api/driver", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      let result: { ok?: boolean } | null = null;
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        result = await response.json().catch(() => null);
      }

      if (!response.ok || !result || result.ok !== true) {
        throw new Error(result?.error || "Form submission failed");
      }

      setSubmissionFeedback("success");
      toast({
        title: "Application Sent!",
        description: "Thanks! We'll review your application and contact you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Driver application submission error:", error);
      setSubmissionFeedback("error");
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "We couldn't send your application. Please try again or email info@kidschoicenj.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="container-site grid gap-10 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-end lg:gap-14">
        <div className="lg:col-span-7">
          <p className="eyebrow rise" style={{ "--i": 0 } as CSSProperties}>
            Careers
          </p>
          <h1 className="display-xxl rise mt-4" style={{ "--i": 1 } as CSSProperties}>
            Drive with Kids Choice.
          </h1>
          <p className="lead rise mt-6 max-w-[34rem]" style={{ "--i": 2 } as CSSProperties}>
            We are always looking for patient, safety-first drivers. Share a few details and our hiring team will reach out.
          </p>
        </div>
        <div className="on-bus rise rounded-card bg-bus p-7 text-asphalt sm:p-9 lg:col-span-5" style={{ "--i": 2 } as CSSProperties}>
          <h2 className="display-md">Have these ready</h2>
          <ul className="mt-5 grid gap-3">
            {checklist.map(item => (
              <li key={item} className="flex items-start gap-3">
                <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl rounded-card border bg-card p-6 sm:p-10 lg:p-12">
          <h2 className="display-lg">Driver application</h2>
          <p className="mt-2 text-muted-foreground">
            Fields marked <span className="font-bold text-foreground">Required</span> must be filled in. Everything goes straight to
            our hiring team.
          </p>

          <div className="mt-6 empty:hidden">
            {submissionFeedback === "success" && (
              <Alert className="border-foreground">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                <AlertDescription>Thanks! We&rsquo;ll review your application and contact you soon.</AlertDescription>
              </Alert>
            )}

            {submissionFeedback === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-5 w-5" aria-hidden="true" />
                <AlertDescription>
                  We were unable to submit your application. Please review the highlighted fields or try again in a moment.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8" noValidate encType="multipart/form-data">
              <fieldset className="grid gap-6 md:grid-cols-2">
                <legend className="display-md mb-6">About you</legend>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Full name <RequiredTag />
                      </FormLabel>
                      <FormControl>
                        <Input autoComplete="name" aria-required="true" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone number <RequiredTag />
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" inputMode="tel" autoComplete="tel" aria-required="true" placeholder="(973) 555-0142" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>

              <div className="mt-12 border-t pt-10">
              <fieldset>
                <legend className="display-md mb-2">Qualifications</legend>
                <div className="grid divide-y">
                  {qualificationQuestions.map(question => (
                    <FormField
                      key={question.name}
                      control={form.control}
                      name={question.name}
                      render={({ field }) => (
                        <FormItem className="grid gap-3 space-y-0 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
                          <FormLabel id={`${question.name}-label`} className="text-base font-normal">
                            {question.label}
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              value={field.value ?? ""}
                              onValueChange={value => field.onChange(value || undefined)}
                              aria-labelledby={`${question.name}-label`}
                              className="flex gap-2"
                            >
                              <YesNoOption name={question.name} value="yes" />
                              <YesNoOption name={question.name} value="no" />
                            </RadioGroup>
                          </FormControl>
                          <FormMessage className="sm:col-span-2" />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </fieldset>
              </div>

              <div className="mt-12 border-t pt-10">
              <fieldset className="grid gap-6 md:grid-cols-2">
                <legend className="display-md mb-6">Documents</legend>
                <FormField
                  control={form.control}
                  name="driverLicenseFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Driver&rsquo;s license photo <RequiredTag />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="h-auto py-2 pl-2"
                          onChange={event => field.onChange(event.target.files)}
                          onBlur={field.onBlur}
                        />
                      </FormControl>
                      <FormDescription>JPG, PNG or PDF, up to {MAX_FILE_SIZE_MB}MB.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="abstractRecordFile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Abstract driver&rsquo;s record <RequiredTag />
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          className="h-auto py-2 pl-2"
                          onChange={event => field.onChange(event.target.files)}
                          onBlur={field.onBlur}
                        />
                      </FormControl>
                      <FormDescription>JPG, PNG or PDF, up to {MAX_FILE_SIZE_MB}MB.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
              </div>

              <div className="mt-12 border-t pt-10">
              <fieldset className="grid gap-8">
                <legend className="display-md mb-6">Experience and notes</legend>
                <FormField
                  control={form.control}
                  name="priorExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel id="priorExperience-label">Any prior driving experience?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onValueChange={value => field.onChange(value as "yes" | "no")}
                          aria-labelledby="priorExperience-label"
                          className="flex gap-2"
                        >
                          <YesNoOption name="priorExperience" value="yes" />
                          <YesNoOption name="priorExperience" value="no" />
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>
                        {field.value === "yes"
                          ? "A window opened so you can add your most recent experience. You can reopen it below at any time."
                          : "Choose yes if you have professional driving experience you would like to share."}
                      </FormDescription>
                      <FormMessage />
                      {field.value === "yes" && (
                        <Button type="button" variant="secondary" size="sm" className="mt-2 w-fit" onClick={() => setExperienceModalOpen(true)}>
                          <Pencil aria-hidden="true" />
                          Edit experience details
                        </Button>
                      )}
                    </FormItem>
                  )}
                />

                <Dialog open={experienceModalOpen} onOpenChange={setExperienceModalOpen}>
                  <DialogContent className="sm:max-w-[520px]">
                    <DialogHeader>
                      <DialogTitle>Prior driving experience</DialogTitle>
                      <DialogDescription>Tell us about your most recent driving job.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5">
                      <FormField
                        control={form.control}
                        name="experienceCompany"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                              <Input autoComplete="organization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="experienceDuration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How long did you work there?</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 2 years" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter>
                      <Button type="button" onClick={() => setExperienceModalOpen(false)}>
                        Done
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <FormField
                  control={form.control}
                  name="extraNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Scheduling preferences, certifications, or anything else we should know…"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Optional. Up to 1,000 characters.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.9375rem] text-muted-foreground">Files must be JPG, PNG or PDF and under {MAX_FILE_SIZE_MB}MB each.</p>
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting…" : "Submit application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
