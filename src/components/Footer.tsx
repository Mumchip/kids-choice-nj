import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import { EMAIL, HOURS, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA } from "@/lib/site";

const serviceLinks = [
  { name: "Wheelchair & mobility transport", path: "/wheelchair-services" },
  { name: "School transportation", path: "/school-transportation" },
  { name: "Fleet & safety", path: "/fleet" },
];

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  { name: "Join our team", path: "/join-us" },
  { name: "Contact", path: "/contact" },
];

const linkClass = "text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline";

const Footer = () => (
  <footer className="on-dark border-t border-white/10 bg-asphalt text-white">
    <div className="container-site grid gap-12 py-16 md:py-20 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Link to="/" className="inline-block rounded-lg" aria-label="Kids Choice INC., home">
          <Wordmark inverse />
        </Link>
        <p className="mt-6 max-w-sm text-white/80">
          Licensed school bus and wheelchair-accessible transportation for families, schools and riders across {SERVICE_AREA}.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-8 inline-block whitespace-nowrap rounded-lg font-display text-[2rem] font-extrabold tracking-tight underline decoration-bus decoration-[3px] underline-offset-[6px] hover:decoration-white sm:text-[2.5rem]"
        >
          {PHONE_DISPLAY}
        </a>
        <p className="mt-2 text-sm text-white/70">{HOURS}. Emergency service 24/7.</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-white/60">Services</h2>
          <ul className="mt-4 grid gap-3">
            {serviceLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-white/60">Company</h2>
          <ul className="mt-4 grid gap-3">
            {companyLinks.map(link => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-white/60">Reach us</h2>
          <ul className="mt-4 grid gap-3">
            <li>
              <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={PHONE_HREF} className={linkClass}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-white/80">{SERVICE_AREA}</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Kids Choice INC. All rights reserved.</p>
        <p>An equal opportunity service provider, committed to ADA compliance and accessibility for all.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
