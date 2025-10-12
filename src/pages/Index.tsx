import { Link } from "react-router-dom";
import { ArrowRight, Accessibility, Bus, Shield, Heart, CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-accessible-van.jpg";
import caringService from "@/assets/caring-service.jpg";

const Index = () => {
  const services = [
    {
      icon: Accessibility,
      title: "Wheelchair Accessible Transport",
      description: "Specialized mobility services with lift-equipped vans and trained staff.",
      features: [
        "Lift-equipped and ramp-accessible vehicles",
        "Trained and compassionate drivers",
        "Door-to-door service",
        "Medical appointment transport",
      ],
    },
    {
      icon: Bus,
      title: "School Transportation",
      description: "Safe and reliable school bus services for students and districts.",
      features: [
        "Licensed and certified drivers",
        "Modern, well-maintained fleet",
        "GPS tracking and safety monitoring",
        "Flexible routing options",
      ],
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety protocols and certified professionals.",
      features: [
        "Regular vehicle maintenance",
        "Background-checked drivers",
        "Safety training programs",
        "ADA compliance certified",
      ],
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating every passenger with dignity, respect, and kindness.",
      features: [
        "Patient and caring staff",
        "Personalized service approach",
        "Family and caregiver communication",
        "Comfortable and clean vehicles",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Kids Choice has been transporting my daughter to school for 3 years. The drivers are always on time, professional, and genuinely care about the kids. I couldn't ask for better service.",
      author: "Maria Thompson",
      role: "Parent, Lincoln Elementary",
    },
    {
      quote: "As someone who uses a wheelchair, finding reliable transportation has always been a challenge. Kids Choice changed that completely. Their drivers are respectful, patient, and the vehicles are always clean and well-maintained.",
      author: "Robert Chen",
      role: "Mobility Client",
    },
    {
      quote: "We've contracted Kids Choice for our private school's transportation needs for over 5 years. Their safety record is impeccable and communication is outstanding. Highly recommend.",
      author: "Jennifer Martinez",
      role: "School Administrator",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm animate-fade-in backdrop-blur-sm">
              ✓ Licensed & ADA Compliant Since 2005
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
              Accessible, Reliable, and Caring Transportation for Everyone
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Licensed school bus and wheelchair-accessible transportation services you can trust. 
              Safety, dignity, and compassion in every ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Link to="/wheelchair-services">
                <Button size="lg" className="bg-hero-gradient hover:scale-105 hover:shadow-large transition-all text-lg shadow-medium">
                  Wheelchair Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg hover:bg-secondary/80 border-2 hover:scale-105 transition-all">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl glass hover-lift animate-fade-in">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">20+</div>
              <p className="text-sm font-medium text-muted-foreground">Years of Service</p>
            </div>
            <div className="text-center p-6 rounded-2xl glass hover-lift animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-sm font-medium text-muted-foreground">Licensed & Insured</p>
            </div>
            <div className="text-center p-6 rounded-2xl glass hover-lift animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">5000+</div>
              <p className="text-sm font-medium text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center p-6 rounded-2xl glass hover-lift animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">ADA</div>
              <p className="text-sm font-medium text-muted-foreground">Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm backdrop-blur-sm">
              What We Offer
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive transportation solutions designed with your safety, comfort, and accessibility in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
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
                {[
                  "State-licensed and fully insured",
                  "Specialized training for mobility assistance",
                  "Modern, accessible vehicle fleet",
                  "24/7 dispatch and support",
                  "Personalized service plans",
                  "Proven safety record",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
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
              <img
                src={caringService}
                alt="Professional driver assisting wheelchair user"
                className="w-full h-full object-cover"
              />
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary-light/20 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in">Ready to Experience Safe, Compassionate Transportation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free quote or to discuss your transportation needs. 
            We're here to help you get where you need to go, safely and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg hover:scale-105 transition-all shadow-large">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                Call (123) 456-7890
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
