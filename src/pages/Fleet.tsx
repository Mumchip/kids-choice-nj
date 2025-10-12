import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Wrench, Award, CheckCircle } from "lucide-react";
import vanInterior from "@/assets/van-interior.jpg";
import schoolBus from "@/assets/school-bus.jpg";

const Fleet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Fleet & Safety Standards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Modern, well-maintained vehicles and industry-leading safety protocols that ensure every journey is safe, 
            comfortable, and reliable.
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Vehicle Fleet</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Wheelchair-Accessible Vans */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-medium">
              <img
                src={vanInterior}
                alt="Wheelchair-accessible van interior"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Wheelchair-Accessible Vans</h3>
                <p className="text-muted-foreground mb-6">
                  Our fleet of specialized wheelchair-accessible vans is equipped with state-of-the-art features 
                  for safe, comfortable transport of individuals with mobility needs.
                </p>
                <h4 className="font-semibold text-foreground mb-3">Features Include:</h4>
                <ul className="space-y-2">
                  {[
                    "Hydraulic wheelchair lifts and ramps",
                    "Secure 4-point wheelchair restraint systems",
                    "Climate-controlled interiors",
                    "Low-floor entry for easy access",
                    "Comfortable seating for attendants/family",
                    "Spacious interior accommodating various wheelchair sizes",
                    "GPS tracking and communication systems",
                    "ADA-compliant design and safety features",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* School Buses */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-medium">
              <img
                src={schoolBus}
                alt="Modern school bus"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">School Buses</h3>
                <p className="text-muted-foreground mb-6">
                  Our modern school bus fleet meets and exceeds all federal safety standards. Each bus is regularly 
                  inspected, maintained, and equipped with the latest safety technology.
                </p>
                <h4 className="font-semibold text-foreground mb-3">Features Include:</h4>
                <ul className="space-y-2">
                  {[
                    "Full-size and mid-size bus options",
                    "High-backed padded seats with seat belts",
                    "Reinforced steel construction",
                    "Emergency exits and safety equipment",
                    "Interior and exterior cameras",
                    "GPS tracking and route monitoring",
                    "Stop-arm and crossing-gate safety systems",
                    "Regular DOT inspections and compliance",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Maintenance & Safety Protocols
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Regular Maintenance</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes scheduled preventive maintenance including oil changes, brake inspections, 
                tire rotations, and comprehensive system checks. We maintain detailed service records for every vehicle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Daily Inspections</h3>
              <p className="text-muted-foreground">
                Before every route, our drivers complete a thorough pre-trip inspection checklist covering lights, 
                brakes, tires, safety equipment, wheelchair lifts, and all mechanical systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">DOT Compliance</h3>
              <p className="text-muted-foreground">
                All vehicles meet Department of Transportation standards and undergo regular state inspections. 
                We maintain full compliance with all federal and state transportation regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Vehicle Safety Features
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Safety Equipment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fire extinguishers on every vehicle</li>
                  <li>• First aid kits and emergency supplies</li>
                  <li>• Two-way radio communication</li>
                  <li>• Reflective safety triangles</li>
                  <li>• Emergency evacuation plans</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technology Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time GPS tracking</li>
                  <li>• Interior and exterior cameras</li>
                  <li>• Electronic logging devices (ELD)</li>
                  <li>• Backup cameras and sensors</li>
                  <li>• Digital dispatch systems</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Driver Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• CDL licensed and certified drivers</li>
                  <li>• Background checks and drug screening</li>
                  <li>• Defensive driving training</li>
                  <li>• First aid and CPR certification</li>
                  <li>• Ongoing safety education</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ADA-compliant wheelchair access</li>
                  <li>• Secure restraint systems</li>
                  <li>• Handrails and grab bars</li>
                  <li>• Non-slip flooring</li>
                  <li>• Height-adjustable features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Certifications & Compliance
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">DOT Certified</h3>
                <p className="text-muted-foreground">
                  All vehicles meet Department of Transportation safety standards with regular inspections and compliance.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">ADA Compliant</h3>
                <p className="text-muted-foreground">
                  Full compliance with Americans with Disabilities Act standards for accessible transportation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Licensed & Insured</h3>
                <p className="text-muted-foreground">
                  Fully licensed commercial transportation service with comprehensive insurance coverage.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">State Inspections</h3>
                <p className="text-muted-foreground">
                  Regular state safety inspections with documented maintenance records for every vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
