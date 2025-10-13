import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accessibility, Heart, Calendar, MapPin, Clock, Shield } from "lucide-react";
import caringService from "@/assets/caring-service.jpg";
import vanInterior from "@/assets/van-interior.jpg";

const WheelchairServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Accessibility className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Wheelchair & Mobility Transportation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Safe, accessible, and compassionate transportation for wheelchair users and individuals 
              with mobility challenges. Independence starts with reliable transportation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                Schedule a Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Specialized Accessible Transportation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Kids Choice INC., we understand that accessible transportation is essential for independence, 
                healthcare access, and quality of life. Our wheelchair-accessible vehicles and trained staff 
                provide safe, dignified transport for individuals with mobility needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you need transportation to medical appointments, social events, shopping, or daily activities, 
                our team is here to help. We treat every passenger with respect, patience, and genuine care.
              </p>
              <ul className="space-y-3">
                {[
                  "Lift-equipped and ramp-accessible vans",
                  "Trained mobility assistance specialists",
                  "Door-to-door service with assistance",
                  "Medical appointment coordination",
                  "Flexible scheduling options",
                  "ADA-compliant vehicles and service",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img
                src={caringService}
                alt="Professional care and assistance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-medium">
              <img
                src={vanInterior}
                alt="Accessible van interior with safety features"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                State-of-the-Art Accessible Vehicles
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our fleet of wheelchair-accessible vans is equipped with the latest safety and comfort features 
                to ensure a smooth, secure ride for all passengers.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Wheelchair Lifts & Ramps</h3>
                    <p className="text-muted-foreground">
                      Hydraulic lifts and ramps for safe, easy boarding. Accommodates all wheelchair sizes and types.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Secure Restraint Systems</h3>
                    <p className="text-muted-foreground">
                      Advanced wheelchair restraint systems that meet all safety standards for secure transport.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Comfort & Cleanliness</h3>
                    <p className="text-muted-foreground">
                      Climate-controlled interiors, smooth suspension, and thorough sanitization after every trip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Mobility Services We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Medical Appointments</h3>
              <p className="text-muted-foreground">
                Reliable transportation to doctor visits, therapy sessions, dialysis, and other medical appointments.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Daily Activities</h3>
              <p className="text-muted-foreground">
                Shopping, errands, social visits, and recreation — wherever you need to go, we'll get you there.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                One-time trips, recurring appointments, or regular schedules — we accommodate your needs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Assistance</h3>
              <p className="text-muted-foreground">
                Our drivers provide door-to-door service with assistance loading, unloading, and securing wheelchairs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Senior Transportation</h3>
              <p className="text-muted-foreground">
                Specialized care for elderly passengers with mobility devices, walkers, and wheelchairs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all">
              <Accessibility className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Group Transportation</h3>
              <p className="text-muted-foreground">
                Accessible transport for groups, day programs, and community outings for individuals with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Contact Us</h3>
                <p className="text-lg text-muted-foreground">
                  Call, email, or use our online form to discuss your transportation needs. 
                  We'll answer any questions and provide a quote.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Schedule Your Ride</h3>
                <p className="text-lg text-muted-foreground">
                  We'll work with you to set up one-time trips or recurring appointments that fit your schedule.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Confirmation & Reminder</h3>
                <p className="text-lg text-muted-foreground">
                  You'll receive confirmation of your ride and reminders before pick-up time.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Safe, Reliable Transport</h3>
                <p className="text-lg text-muted-foreground">
                  Our trained driver arrives on time, assists with boarding, and ensures a safe, comfortable journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Experience Accessible, Compassionate Transportation?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to schedule your first ride or to learn more about our wheelchair-accessible services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg">
                Request Service
              </Button>
            </Link>
            <a href="tel:+19733841425">
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
                Call (973) 384-1425
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WheelchairServices;
