import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">About Kids Choice INC.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            For 25+ years, we've been committed to providing safe, reliable, and compassionate 
            transportation services for students and individuals with mobility needs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Kids Choice INC. was founded in 1998 with a simple mission: to provide transportation services 
                that families and institutions could trust completely. What started as a small school bus operation 
                has grown into a comprehensive transportation service provider specializing in both student transport 
                and wheelchair-accessible mobility services.
              </p>
              <p>
                Over the years, we recognized a critical need in our community — individuals with mobility challenges 
                often struggled to find reliable, compassionate transportation. This led us to expand our services to 
                include specialized wheelchair-accessible vehicles and trained staff who understand that transportation 
                is about more than just getting from one place to another — it's about independence, dignity, and care.
              </p>
              <p>
                Today, Kids Choice INC. is proud to serve hundreds of families, schools, and individuals throughout 
                Northern/Central New Jersey. Our commitment to safety, accessibility, and compassionate service remains at 
                the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Safety First</h3>
              <p className="text-muted-foreground">
                Every vehicle, every driver, every route is designed with safety as the top priority.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                We treat every passenger with dignity, respect, and genuine care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Continuous training, maintenance, and improvement to deliver the best service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
              <p className="text-muted-foreground">
                We're proud to be part of and serve the communities where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">Certifications & Credentials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Licensing & Insurance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• State-licensed school bus operator</li>
                  <li>• Fully insured and bonded</li>
                  <li>• DOT certified vehicles</li>
                  <li>• Commercial driver licensing (CDL)</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">ADA Compliance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ADA-compliant vehicles and service</li>
                  <li>• Wheelchair accessibility certified</li>
                  <li>• Mobility assistance training</li>
                  <li>• Equal opportunity provider</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Safety Standards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• First aid and CPR certified drivers</li>
                  <li>• Defensive driving certification</li>
                  <li>• Regular safety audits</li>
                  <li>• Detailed route planning support</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Background Checks</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive background screening</li>
                  <li>• Drug and alcohol testing</li>
                  <li>• Annual driver record reviews</li>
                  <li>• Child safety clearances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our drivers and support staff are the heart of Kids Choice INC. Every team member undergoes 
            extensive training, background checks, and ongoing professional development. We hire people 
            who genuinely care about the safety and comfort of our passengers.
          </p>
          <div className="bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for compassionate, safety-focused professionals to join our team. 
              If you're interested in making a difference in your community, we'd love to hear from you.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-hero-gradient text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
