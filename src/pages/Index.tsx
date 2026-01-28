import { Link } from "react-router-dom";
import { ArrowRight, Accessibility, Bus, Shield, Heart, CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-accessible-van.png";
import caringService from "@/assets/caring-service.jpg";
const Index = () => {
  const services = [{
    icon: Accessibility,
    title: "Wheelchair Accessible Transport",
    description: "Specialized mobility services with lift-equipped vans and trained staff.",
    features: ["Lift-equipped and ramp-accessible vehicles", "Trained and compassionate drivers", "Door-to-door service", "Medical appointment transport"]
  }, {
    icon: Bus,
    title: "School Transportation",
    description: "Safe and reliable school bus services for students and districts.",
    features: ["Licensed and certified drivers", "Modern, well-maintained fleet", "Dedicated route coordination team", "Flexible routing options"]
  }, {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols and certified professionals.",
    features: ["Regular vehicle maintenance", "Background-checked drivers", "Safety training programs", "ADA compliance certified"]
  }, {
    icon: Heart,
    title: "Compassionate Care",
    description: "Treating every passenger with dignity, respect, and kindness.",
    features: ["Patient and caring staff", "Personalized service approach", "Family and caregiver communication", "Comfortable and clean vehicles"]
  }];
  const testimonials = [{
    quote: "Kids Choice has been transporting my daughter to school for 3 years. The drivers are always on time, professional, and genuinely care about the kids. I couldn't ask for better service.",
    author: "Maria Thompson",
    role: "Parent, Lincoln Elementary"
  }, {
    quote: "As someone who uses a wheelchair, finding reliable transportation has always been a challenge. Kids Choice changed that completely. Their drivers are respectful, patient, and the vehicles are always clean and well-maintained.",
    author: "Robert Chen",
    role: "Mobility Client"
  }, {
    quote: "We've contracted Kids Choice for our private school's transportation needs for over 5 years. Their safety record is impeccable and communication is outstanding. Highly recommend.",
    author: "Jennifer Martinez",
    role: "School Administrator"
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="geometric-shape w-96 h-96 bg-primary -top-20 -left-20" />
        <div className="geometric-shape w-80 h-80 bg-accent top-40 -right-40" />
        <div className="geometric-shape w-64 h-64 bg-primary-light bottom-20 left-1/3" />
        
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 border-2 border-primary/30 rounded-full text-primary font-bold text-sm animate-fade-in backdrop-blur-sm shadow-medium">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Licensed & ADA Compliant Since 1998
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight animate-slide-up">
              Accessible, Reliable, and{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Caring Transportation
              </span>{" "}
              for Everyone
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              Licensed school bus and wheelchair-accessible transportation services you can trust. 
              Safety, dignity, and compassion in every ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Link to="/wheelchair-services">
                <Button size="lg" className="bg-gradient-to-r from-primary via-primary-light to-accent hover:scale-105 hover:shadow-large transition-all text-lg shadow-medium font-bold">
                  Wheelchair Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg hover:bg-secondary/80 border-2 border-primary/30 hover:border-primary hover:scale-105 transition-all font-semibold">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-secondary via-background to-secondary/50 relative overflow-hidden">
        <div className="geometric-shape w-72 h-72 bg-accent -top-20 right-1/4" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-3xl glass hover-lift animate-fade-in border-2 border-primary/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl font-black bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent mb-3 relative">25+</div>
              <p className="text-sm font-bold text-muted-foreground relative">Years of Service</p>
            </div>
            <div className="text-center p-8 rounded-3xl glass hover-lift animate-fade-in border-2 border-accent/10 relative overflow-hidden group" style={{
            animationDelay: "0.1s"
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl font-black bg-gradient-to-br from-accent via-primary to-primary-light bg-clip-text text-transparent mb-3 relative">100%</div>
              <p className="text-sm font-bold text-muted-foreground relative">Licensed & Insured</p>
            </div>
            <div className="text-center p-8 rounded-3xl glass hover-lift animate-fade-in border-2 border-primary/10 relative overflow-hidden group" style={{
            animationDelay: "0.2s"
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl font-black bg-gradient-to-br from-primary via-accent to-primary-light bg-clip-text text-transparent mb-3 relative">5000+</div>
              <p className="text-sm font-bold text-muted-foreground relative">Happy Clients</p>
            </div>
            <div className="text-center p-8 rounded-3xl glass hover-lift animate-fade-in border-2 border-accent/10 relative overflow-hidden group" style={{
            animationDelay: "0.3s"
          }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-6xl font-black bg-gradient-to-br from-accent via-primary-light to-primary bg-clip-text text-transparent mb-3 relative">ADA</div>
              <p className="text-sm font-bold text-muted-foreground relative">Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="geometric-shape w-96 h-96 bg-primary top-20 -left-40" />
        <div className="geometric-shape w-80 h-80 bg-accent bottom-20 -right-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-accent/15 via-primary/15 to-accent/15 border-2 border-accent/30 rounded-full text-accent font-bold text-sm backdrop-blur-sm">
              What We Offer
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Comprehensive transportation solutions designed with your safety, comfort, and accessibility in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <div key={index} className="animate-slide-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <ServiceCard {...service} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Kids Choice INC.?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that transportation is more than just getting from point A to point B. 
                It's about trust, safety, and treating every passenger with the respect they deserve.
              </p>
              <ul className="space-y-4">
                {["State-licensed and fully insured", "Specialized training for mobility assistance", "Modern, accessible vehicle fleet", "24/7 dispatch and support", "Personalized service plans", "Proven safety record"].map((item, index) => <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>)}
              </ul>
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg">
                    Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-large hover-lift relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
              <img src={caringService} alt="Professional driver assisting wheelchair user" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium animate-float">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what families, schools, and clients have to say about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <div key={index} className="animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <TestimonialCard {...testimonial} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-medium p-10 md:p-14 text-center space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Our drivers and support staff are the heart of Kids Choice INC. Every team member undergoes extensive training, background
                checks, and ongoing professional development. We hire people who genuinely care about the safety and comfort of our
                passengers.
              </p>
            </div>
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Join Our Team</h3>
                <p className="text-muted-foreground">
                  We're always looking for compassionate, safety-focused professionals to join our team. If you're interested in making a
                  difference in your community, we'd love to hear from you.
                </p>
              </div>
              <Link to="/join-us" className="inline-block mt-4">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                  View Career Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="geometric-shape w-96 h-96 bg-white/10 -top-40 -left-40" />
        <div className="geometric-shape w-80 h-80 bg-white/10 -bottom-40 -right-40" />
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in leading-tight">
            Ready to Experience Safe, <br />
            <span className="text-white/90">Compassionate Transportation?</span>
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto font-medium">
            Contact us today for a free quote or to discuss your transportation needs. 
            We're here to help you get where you need to go, safely and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg hover:scale-105 transition-all shadow-large font-bold">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+19733841425">
              <Button size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all font-semibold backdrop-blur-sm">
                Call (973) 384-1425
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
