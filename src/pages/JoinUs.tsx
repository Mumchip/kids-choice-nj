import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

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

    if (!licenseFile && !abstractFile) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please upload at least one supporting document.",
        path: ["driverLicenseFile"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please upload at least one supporting document.",
        path: ["abstractRecordFile"],
      });
    }

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

const JoinUs = () => {
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

      formData.append("_template", "table");
      formData.append("_subject", "Join Our Team - Driver Application");

      const response = await fetch("https://formspree.io/f/mblzpnbp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
        redirect: "follow",
      });
      let result: { ok?: boolean } | null = null;
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        result = await response.json().catch(() => null);
      }

      if (!response.ok || (result && result.ok !== true)) {
        throw new Error("Form submission failed");
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">Join Our Driver Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            We're always looking for compassionate, safety-first professionals. Share a few details below and we'll reach out if your
            experience is a good fit for our team.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl shadow-medium p-8 md:p-12 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-foreground">Driver Application</h2>
              <p className="text-muted-foreground">
                Complete the form and include your driver's license photo and abstract record. We'll route your information directly to our
                hiring team.
              </p>
            </div>

            {submissionFeedback === "success" && (
              <Alert className="bg-primary/10 border-primary/30 text-primary">
                <AlertDescription>Thanks! We'll review your application and contact you soon.</AlertDescription>
              </Alert>
            )}

            {submissionFeedback === "error" && (
              <Alert variant="destructive">
                <AlertDescription>
                  We were unable to submit your application. Please review the highlighted fields or try again in a moment.
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate encType="multipart/form-data">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
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
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="criminalHistory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Criminal history with fingerprint?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={value => field.onChange(value || undefined)}
                            className="flex flex-wrap gap-6"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <Label className="font-normal">Yes</Label>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <Label className="font-normal">No</Label>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="commercialLicense"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Commercial Driver's License (CDL)?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={value => field.onChange(value || undefined)}
                            className="flex flex-wrap gap-6"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <Label className="font-normal">Yes</Label>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <Label className="font-normal">No</Label>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="passengerEndorsement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passenger &amp; Student Endorsement?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={value => field.onChange(value || undefined)}
                            className="flex flex-wrap gap-6"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <Label className="font-normal">Yes</Label>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <Label className="font-normal">No</Label>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="drugTestCompleted"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Drug test completed?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value ?? ""}
                            onValueChange={value => field.onChange(value || undefined)}
                            className="flex flex-wrap gap-6"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <Label className="font-normal">Yes</Label>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <Label className="font-normal">No</Label>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="driverLicenseFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Driver's License Photo *</FormLabel>
                        <FormControl>
                          <Input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={event => field.onChange(event.target.files)} onBlur={field.onBlur} />
                        </FormControl>
                        <FormDescription>Accepted formats: JPG, PNG, PDF (max {MAX_FILE_SIZE_MB}MB).</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="abstractRecordFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Abstract Driver's Record *</FormLabel>
                        <FormControl>
                          <Input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={event => field.onChange(event.target.files)} onBlur={field.onBlur} />
                        </FormControl>
                        <FormDescription>Accepted formats: JPG, PNG, PDF (max {MAX_FILE_SIZE_MB}MB).</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="priorExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any prior driving experience?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onValueChange={value => field.onChange(value as "yes" | "no")}
                          className="flex gap-6"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <Label className="font-normal">Yes</Label>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <Label className="font-normal">No</Label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormDescription>
                        {field.value === "yes"
                          ? "We opened a modal so you can add your most recent experience. You can reopen it below at any time."
                          : "Select yes if you have professional driving experience you would like to share."}
                      </FormDescription>
                      <FormMessage />
                      {field.value === "yes" && (
                        <Button type="button" variant="outline" size="sm" className="mt-2 w-fit" onClick={() => setExperienceModalOpen(true)}>
                          Update experience details
                        </Button>
                      )}
                    </FormItem>
                  )}
                />

                <Dialog open={experienceModalOpen} onOpenChange={setExperienceModalOpen}>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Prior Driving Experience</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="experienceCompany"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC Transportation" {...field} />
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
                            <FormLabel>Duration</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 2 years" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="secondary" onClick={() => setExperienceModalOpen(false)}>
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
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Share any scheduling preferences, certifications, or other details you'd like us to know." rows={4} {...field} />
                      </FormControl>
                      <FormDescription>Optional. Provide any extra context that will help us review your application.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    Required fields marked with *. Files must be JPG, PNG, or PDF and stay within size limits.
                  </p>
                  <Button type="submit" size="lg" className="bg-hero-gradient hover:opacity-90" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
