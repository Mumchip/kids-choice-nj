import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Wheelchair Services",
    path: "/wheelchair-services"
  }, {
    name: "School Transportation",
    path: "/school-transportation"
  }, {
    name: "Fleet & Safety",
    path: "/fleet"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="sticky top-0 z-50 glass border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center shadow-medium transition-all duration-300 group-hover:shadow-large group-hover:scale-105">
              <span className="text-2xl font-bold text-white">KC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Kids Choice</h1>
              <p className="text-xs text-muted-foreground">Safe & Accessible Transportation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path}>
                <Button variant={isActive(link.path) ? "default" : "ghost"} className="transition-all">
                  {link.name}
                </Button>
              </Link>)}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-primary hover:text-primary-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(973) 563-2532</span>
            </a>
            <Link to="/contact">
              <Button className="bg-accent-gradient hover:opacity-90 transition-opacity">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="lg:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                <Button variant={isActive(link.path) ? "default" : "ghost"} className="w-full justify-start">
                  {link.name}
                </Button>
              </Link>)}
            <div className="pt-4 space-y-2">
              <a href="tel:+1234567890" className="flex items-center justify-center space-x-2 text-primary font-semibold py-2">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent-gradient hover:opacity-90">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;