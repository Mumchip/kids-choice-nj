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
      <section className="relative min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Accessible, Reliable, and Caring Transportation for Everyone
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Licensed school bus and wheelchair-accessible transportation services you can trust. 
              Safety, dignity, and compassion in every ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/wheelchair-services">
                <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg">
                  Wheelchair Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years of Service</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Licensed & Insured</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">ADA</div>
              <p className="text-sm text-muted-foreground">Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden shadow-medium">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
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
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Safe, Compassionate Transportation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free quote or to discuss your transportation needs. 
            We're here to help you get where you need to go, safely and comfortably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg">
                Get a Free Quote
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
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
