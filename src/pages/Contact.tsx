import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000)
});
type FormData = z.infer<typeof formSchema>;
const Contact = () => {
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
      const response = await fetch("https://formsubmit.co/ajax/info@kidschoicenj.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          message: data.message,
          _subject: "New Kids Choice INC. Quote Request",
          _template: "table"
        })
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || (result && result.success !== "true")) {
        throw new Error("Form submission failed");
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
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Have questions or ready to schedule transportation services? We're here to help. 
            Reach out to us today and let's discuss your transportation needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <FormField control={form.control} name="phone" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <FormField control={form.control} name="serviceType" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Service Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
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
                }) => <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your transportation needs..." className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <Button type="submit" size="lg" className="w-full bg-hero-gradient hover:opacity-90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+19733841425" className="text-primary hover:text-primary-light text-lg">(973) 384-1425</a>
                    <p className="text-sm text-muted-foreground mt-1">Available Monday - Sunday, 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@kidschoicenj.com" className="text-primary hover:text-primary-light text-lg">info@kidschoicenj.com</a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                    <p className="text-foreground text-lg">Northern/Central New Jersey</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Serving multiple counties and communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <div className="space-y-1 text-foreground">
                      <p>Monday - Sunday: 7:00 AM - 6:00 PM</p>
                      
                      
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Emergency service available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-accent-gradient text-foreground rounded-xl p-8 shadow-medium">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6">For urgent transportation needs or emergency scheduling, please call us directly. Our team is ready to help.</p>
                <a href="tel:+19733841425">
                  <Button size="lg" variant="secondary" className="w-full">
                    Call Now: (973) 384-1425
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">My Service Area</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Kids Choice INC. proudly serves Northern and Central New Jersey. Contact us to confirm availability in your specific location.
          </p>
          <div className="max-w-5xl mx-auto">
            <iframe
              className="w-full h-[320px] md:h-[450px] rounded-3xl border-0 shadow-medium"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672289.2453898665!2d-75.14664728433442!3d40.74793108819629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1760390066721!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Jersey service area map"
            />
          </div>
        </div>
      </section>

      {/* ADA Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-lg p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ADA Accessibility Statement
            </h3>
            <p className="text-muted-foreground">
              Kids Choice INC. is committed to ensuring accessibility for individuals with disabilities. 
              Our vehicles, services, and facilities comply with the Americans with Disabilities Act (ADA). 
              If you require special accommodations or have accessibility concerns, please contact us so we can 
              better serve your needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;
