import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wordmark from "@/components/Wordmark";
import { cn } from "@/lib/utils";
import { HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA } from "@/lib/site";

// "Home" lives on the wordmark at desktop widths so the bar fits on one line.
const DESKTOP_LINKS = NAV_LINKS.filter(link => link.path !== "/" && link.path !== "/contact");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="hidden border-b bg-secondary lg:block">
        <div className="container-site flex h-9 items-center justify-between text-sm text-muted-foreground">
          <p>Licensed school bus and wheelchair transportation across {SERVICE_AREA}</p>
          <p className="flex items-center gap-5">
            <span>{HOURS}</span>
            <a href={PHONE_HREF} className="whitespace-nowrap font-bold text-foreground hover:underline">
              Call {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>

      <nav aria-label="Main" className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" className="shrink-0 rounded-lg" aria-label="Kids Choice INC., home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {DESKTOP_LINKS.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "relative inline-flex h-11 items-center rounded-full px-3.5 text-[0.9375rem] font-bold transition-colors hover:bg-secondary",
                    "after:absolute after:inset-x-3.5 after:bottom-1.5 after:h-[3px] after:rounded-full after:bg-bus after:opacity-0 after:transition-opacity",
                    isActive && "after:opacity-100",
                  )
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Request a quote</Link>
          </Button>
          <Button asChild variant="secondary" size="icon" className="lg:hidden">
            <a href={PHONE_HREF} aria-label={`Call ${PHONE_DISPLAY}`}>
              <Phone aria-hidden="true" />
            </a>
          </Button>
          <Button
            ref={toggleRef}
            type="button"
            variant="secondary"
            size="icon"
            className="xl:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(open => !open)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t bg-background shadow-[0_24px_48px_-24px_hsl(210_13%_6%/0.35)] xl:hidden"
      >
        <ul className="container-site grid gap-1 py-4">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  cn(
                    "flex min-h-12 items-center justify-between rounded-input px-4 font-display text-xl font-bold transition-colors hover:bg-secondary",
                    isActive && "bg-secondary",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="h-2.5 w-2.5 rounded-full bg-bus" aria-hidden="true" />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="container-site grid gap-3 border-t py-5 sm:grid-cols-2">
          <Button asChild size="lg">
            <Link to="/contact">Request a quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={PHONE_HREF}>
              <Phone aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
