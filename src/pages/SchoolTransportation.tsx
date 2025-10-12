import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bus, Shield, Clock, MapPin, Users, Star } from "lucide-react";
import schoolBus from "@/assets/school-bus.jpg";

const SchoolTransportation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Bus className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              School Transportation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Trusted school bus services for public schools, private institutions, and families. 
              Safety, reliability, and peace of mind for every journey.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img
                src={schoolBus}
                alt="Modern school bus"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Safe, Reliable Student Transportation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over two decades, Kids Choice INC. has been the trusted name in school transportation. 
                We serve public school districts, private schools, charter schools, and individual families 
                with safe, punctual, and professional transportation services.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to safety is unwavering. Every driver is thoroughly screened, trained, and certified. 
                Every vehicle is meticulously maintained. Every route is carefully planned and monitored.
              </p>
              <ul className="space-y-3">
                {[
                  "Certified and experienced drivers",
                  "Modern, well-maintained school bus fleet",
                  "GPS tracking and route optimization",
                  "Door-to-door service options",
                  "Flexible contracts for schools and districts",
                  "Special needs accommodations available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for School Transport */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Why Schools & Families Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Impeccable Safety Record</h3>
              <p className="text-muted-foreground">
                Our safety-first approach includes regular vehicle inspections, driver training, and comprehensive 
                insurance coverage. Parents and schools trust us with their most precious cargo.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">On-Time, Every Time</h3>
              <p className="text-muted-foreground">
                We understand the importance of punctuality. Our GPS-tracked routes and experienced dispatchers 
                ensure students arrive at school and home on time, every single day.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Caring, Professional Drivers</h3>
              <p className="text-muted-foreground">
                Our drivers are more than just operators — they're caring professionals who understand child safety 
                and behavior management. Background checked and certified.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Route Planning</h3>
              <p className="text-muted-foreground">
                Whether you need district-wide coverage or a single route, we customize our services to fit your 
                needs. Route optimization for efficiency and convenience.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Special Needs Transport</h3>
              <p className="text-muted-foreground">
                Wheelchair-accessible buses, trained aides, and specialized equipment for students with disabilities 
                and special transportation needs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <Bus className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Modern Fleet</h3>
              <p className="text-muted-foreground">
                Well-maintained, clean buses with safety features including seat belts, GPS tracking, cameras, 
                and regular DOT inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            School Transportation Solutions
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium transition-all">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Public School District Contracts</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive transportation solutions for school districts. Multi-route management, flexible scheduling, 
                and full administrative support.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• District-wide route planning</li>
                <li>• Regular and special education routes</li>
                <li>• Activity and field trip transport</li>
                <li>• Year-round or school-year contracts</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium transition-all">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Private & Charter School Services</h3>
              <p className="text-muted-foreground mb-4">
                Dedicated transportation for private and charter schools. Custom routes tailored to your student population 
                and school schedule.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• Customized pickup/drop-off locations</li>
                <li>• Flexible scheduling for unique calendars</li>
                <li>• Athletic and extracurricular trips</li>
                <li>• Parent communication and tracking</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium transition-all">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Private Family Transportation</h3>
              <p className="text-muted-foreground mb-4">
                Door-to-door school transportation for individual families. Reliable, safe alternative to driving 
                your children to school every day.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• Personalized pickup/drop-off</li>
                <li>• Shared routes with nearby families</li>
                <li>• Before and after school care coordination</li>
                <li>• Daily parent notifications</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-medium transition-all">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Field Trips & Activities</h3>
              <p className="text-muted-foreground mb-4">
                Safe, reliable transportation for school field trips, athletic events, competitions, and special activities.
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                <li>• Short and long-distance trips</li>
                <li>• Chaperone and teacher seating</li>
                <li>• Flexible scheduling and routing</li>
                <li>• Competitive group rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Safety Features & Protocols
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Pre-Trip Inspections</h3>
                <p className="text-sm text-muted-foreground">Every bus undergoes a thorough safety check before each route.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">GPS Tracking</h3>
                <p className="text-sm text-muted-foreground">Real-time location tracking for all buses with route monitoring.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Onboard Cameras</h3>
                <p className="text-sm text-muted-foreground">Interior and exterior cameras for safety and accountability.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Driver Training</h3>
                <p className="text-sm text-muted-foreground">Ongoing safety training, defensive driving, and emergency procedures.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Student Behavior Management</h3>
                <p className="text-sm text-muted-foreground">Protocols for safe student conduct and emergency situations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Regular Maintenance</h3>
                <p className="text-sm text-muted-foreground">Strict maintenance schedules and DOT compliance inspections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Partner with Kids Choice for Your School Transportation Needs
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a school administrator or a parent, we're here to provide safe, reliable transportation 
            that gives you peace of mind. Contact us for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg">
                Request a Quote
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

export default SchoolTransportation;
