import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/use-page-title";
import { NAV_LINKS } from "@/lib/site";

const NotFound = () => {
  const location = useLocation();
  usePageTitle("Page not found");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        <p className="eyebrow">Error 404</p>
        <h1 className="display-xxl mt-4">This stop isn&rsquo;t on our route.</h1>
        <p className="lead mt-6 max-w-xl">
          The page <code className="break-all rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">{location.pathname}</code>{" "}
          doesn&rsquo;t exist or has moved.
        </p>
        <Button asChild size="lg" className="nudge mt-8">
          <Link to="/">
            Back to the home page
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
      <nav aria-label="Popular pages" className="rounded-card bg-secondary p-7 sm:p-9 lg:col-span-5">
        <h2 className="display-md">Try one of these</h2>
        <ul className="mt-5 grid gap-1">
          {NAV_LINKS.filter(link => link.path !== "/").map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="nudge flex min-h-11 items-center justify-between rounded-input px-3 font-bold transition-colors hover:bg-background"
              >
                {link.name}
                <ArrowRight className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NotFound;
