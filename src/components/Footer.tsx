import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-white">KC</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Kids Choice INC.</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Licensed transportation services specializing in wheelchair-accessible transport and school bus services since 2005.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Kids Choice INC. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wheelchair-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Wheelchair Services
                </Link>
              </li>
              <li>
                <Link to="/school-transportation" className="text-muted-foreground hover:text-primary transition-colors">
                  School Transportation
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-muted-foreground hover:text-primary transition-colors">
                  Fleet & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wheelchair Accessible Transport</li>
              <li>Mobility Assistance</li>
              <li>School Bus Services</li>
              <li>Private School Contracts</li>
              <li>Door-to-Door Service</li>
              <li>Medical Appointments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Phone:</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Email:</p>
                  <a href="mailto:info@kidschoiceinc.com" className="text-foreground hover:text-primary transition-colors">
                    info@kidschoiceinc.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">Service Area:</p>
                  <p className="text-foreground">Metropolitan Area</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            Kids Choice INC. is an equal opportunity service provider committed to ADA compliance and accessibility for all.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
