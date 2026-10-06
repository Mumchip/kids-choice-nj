import { useState, type CSSProperties } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000)
});
type FormData = z.infer<typeof formSchema>;
const contactDetails = [{
  icon: Mail,
  term: "Email",
  detail: <a href={`mailto:${EMAIL}`} className="text-link break-all">{EMAIL}</a>,
  note: "We respond within 24 hours"
}, {
  icon: Clock,
  term: "Hours",
  detail: "Monday to Sunday, 7:00 AM to 6:00 PM",
  note: "Emergency service available 24/7"
}, {
  icon: MapPin,
  term: "Service area",
  detail: "Northern and Central New Jersey",
  note: "Serving many counties and communities"
}];
const Contact = () => {
  usePageTitle("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: ""
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("serviceType", data.serviceType);
      formData.append("message", data.message);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result || result.ok !== true) {
        throw new Error(result?.error || "Form submission failed");
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours."
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "We couldn't send your message. Please try again or email info@kidschoicenj.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <section className="container-site pb-12 pt-10 md:pb-16 md:pt-14">
        <p className="eyebrow rise" style={{ "--i": 0 } as CSSProperties}>
          Contact
        </p>
        <h1 className="display-xxl rise mt-4 max-w-4xl" style={{ "--i": 1 } as CSSProperties}>
          Ask a question or request a quote.
        </h1>
        <p className="lead rise mt-6 max-w-[38rem]" style={{ "--i": 2 } as CSSProperties}>
          Tell us about the trip, the route or the rider. We reply within 24 hours, or call us for anything urgent.
        </p>
      </section>

      <section className="container-site grid gap-8 pb-20 md:pb-28 lg:grid-cols-12 lg:gap-10">
        {/* Form */}
        <div className="rounded-card border bg-card p-6 sm:p-10 lg:col-span-7">
          <h2 className="display-lg">Send us a message</h2>
          <p className="mt-2 text-[0.9375rem] text-muted-foreground">All fields are required.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 grid gap-6 sm:grid-cols-2" noValidate>
              <FormField control={form.control} name="name" render={({
              field
            }) => <FormItem className="sm:col-span-2">
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input autoComplete="name" aria-required="true" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input type="email" autoComplete="email" spellCheck={false} aria-required="true" placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="phone" render={({
              field
            }) => <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input type="tel" inputMode="tel" autoComplete="tel" aria-required="true" placeholder="(973) 555-0142" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="serviceType" render={({
              field
            }) => <FormItem className="sm:col-span-2">
                    <FormLabel>What do you need?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger aria-required="true">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wheelchair">Wheelchair & Mobility Services</SelectItem>
                        <SelectItem value="school">School Transportation</SelectItem>
                        <SelectItem value="private">Private Transportation</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                        <SelectItem value="employment">Looking for Employment</SelectItem>
                        <SelectItem value="other">Other / General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="message" render={({
              field
            }) => <FormItem className="sm:col-span-2">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea aria-required="true" placeholder="Pick-up and drop-off areas, days and times, and any mobility equipment…" className="min-h-[10rem]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send message"}
                  {!isSubmitting && <Send aria-hidden="true" />}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Details */}
        <aside className="grid content-start gap-5 lg:col-span-5" aria-label="Contact details">
          <div className="on-bus rounded-card bg-bus p-7 text-asphalt sm:p-9">
            <h2 className="display-md">Need a ride soon?</h2>
            <p className="mt-2 text-asphalt/85">For urgent trips or same-day scheduling, call us directly.</p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 whitespace-nowrap rounded-lg font-display text-[2rem] font-extrabold tracking-tight underline decoration-2 underline-offset-[6px] hover:decoration-4 sm:text-[2.25rem]"
            >
              <Phone className="h-7 w-7" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-card border bg-border">
            {contactDetails.map(({
            icon: Icon,
            term,
            detail,
            note
          }) => <div key={term} className="flex gap-4 bg-card p-6">
                <Icon className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                <div>
                  <dt className="text-[0.9375rem] font-bold text-muted-foreground">{term}</dt>
                  <dd className="mt-1 text-lg font-bold">{detail}</dd>
                  <dd className="mt-1 text-[0.9375rem] text-muted-foreground">{note}</dd>
                </div>
              </div>)}
          </dl>
        </aside>
      </section>

      {/* Map */}
      <section className="border-t bg-secondary/60 py-20 md:py-28" aria-labelledby="area-heading">
        <div className="container-site">
          <h2 id="area-heading" className="display-xl">Our service area</h2>
          <p className="lead mt-5 max-w-2xl">
            We serve Northern and Central New Jersey. Contact us to confirm we cover your address.
          </p>
          <div className="photo reveal mt-10 border">
            <iframe
              className="block h-[320px] w-full border-0 md:h-[460px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721954.8326716657!2d-75.06375078484903!3d41.602919125025004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1760390920191!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of New Jersey showing the Kids Choice service area"
            />
          </div>
        </div>
      </section>

      {/* ADA statement */}
      <section className="container-site py-16 md:py-20" aria-labelledby="ada-heading">
        <div className="grid gap-4 border-l-4 border-bus pl-6 md:grid-cols-12 md:gap-10">
          <h2 id="ada-heading" className="display-md md:col-span-4">ADA accessibility statement</h2>
          <p className="text-muted-foreground md:col-span-8">
            Kids Choice INC. is committed to accessibility for people with disabilities. Our vehicles, services and facilities
            comply with the Americans with Disabilities Act (ADA). If you need special accommodations or have an accessibility
            concern, please contact us so we can serve you better.
          </p>
        </div>
      </section>
    </>
  );
};
export default Contact;
