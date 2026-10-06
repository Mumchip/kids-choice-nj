import { Link } from "react-router-dom";
import { ArrowRight, Bus, ClipboardCheck, Clock, GraduationCap, MapPin, Phone, Radio, Shield, Star, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallBlock from "@/components/CallBlock";
import CheckList from "@/components/CheckList";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/use-page-title";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import schoolBusRoad from "@/assets/school-bus-road.jpg";

const highlights = [
  "Certified and experienced drivers",
  "Modern, well-maintained school bus fleet",
  "Route optimization and dispatch support",
  "Door-to-door service options",
  "Flexible contracts for districts",
  "Special needs accommodations available",
];

const reasons = [
  {
    icon: Shield,
    title: "A safety-first record",
    text: "Regular vehicle inspections, driver training and full insurance coverage. Parents and schools trust us with their kids every day.",
    span: "lg:col-span-2",
    tone: "bus",
  },
  {
    icon: Clock,
    title: "On time, every day",
    text: "Planned routes and experienced dispatchers get students to school and home on time.",
    span: "",
    tone: "plain",
  },
  {
    icon: Users,
    title: "Caring drivers",
    text: "Background-checked, certified professionals who understand child safety and behavior.",
    span: "",
    tone: "plain",
  },
  {
    icon: MapPin,
    title: "Flexible routes",
    text: "District-wide coverage or a single route, planned for efficiency and convenience.",
    span: "",
    tone: "plain",
  },
  {
    icon: Star,
    title: "Special needs transport",
    text: "Wheelchair-accessible buses, trained aides and equipment for students with disabilities.",
    span: "",
    tone: "plain",
  },
  {
    icon: Bus,
    title: "A modern fleet",
    text: "Clean buses with seat belts, extended mirror systems and regular DOT inspections.",
    span: "lg:col-span-2",
    tone: "soft",
  },
];

const districtServices = [
  "District-wide route planning",
  "Regular and special education routes",
  "Activity and field trip transport",
  "Year-round or school-year contracts",
];

const protocols = [
  { icon: ClipboardCheck, title: "Pre-trip inspections", text: "Every bus gets a full safety check before each route." },
  { icon: Radio, title: "Route management", text: "Coordinated routing and dispatch support for every bus." },
  { icon: Shield, title: "Onboard safety checks", text: "Regular interior and exterior inspections for safety and accountability." },
  { icon: GraduationCap, title: "Driver training", text: "Ongoing safety training, defensive driving and emergency procedures." },
  { icon: Users, title: "Student behavior management", text: "Clear protocols for safe student conduct and emergencies." },
  { icon: Wrench, title: "Regular maintenance", text: "Strict maintenance schedules and DOT compliance inspections." },
];

const SchoolTransportation = () => {
  usePageTitle("School Transportation");

  return (
    <>
      <PageHero
        eyebrow="School transportation"
        title="On time for the first bell."
        lead="School bus service for public school districts across Northern and Central New Jersey, with a safe ride every day."
        image={{ src: schoolBusRoad, alt: "A yellow school bus driving along an open highway under a blue sky" }}
        actions={
          <>
            <Button asChild size="lg" className="nudge">
              <Link to="/contact">
                Request a quote
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={PHONE_HREF}>
                <Phone aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </>
        }
      />

      {/* Overview */}
      <section className="border-t">
        <div className="container-site py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="display-xl">Safe, reliable student transportation for over two decades</h2>
            <p className="lead mt-6">
              We provide punctual, professional transportation for public school districts, from daily routes to special
              education and activity trips.
            </p>
            <p className="mt-5 text-muted-foreground">
              Every driver is screened, trained and certified. Every vehicle is maintained on a strict schedule. Every route is
              planned and reviewed.
            </p>
          </div>
          <CheckList items={highlights} className="reveal mt-10 sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>

      {/* Why us */}
      <section className="bg-secondary/60 py-20 md:py-28" aria-labelledby="why-school-heading">
        <div className="container-site">
          <h2 id="why-school-heading" className="display-xl max-w-2xl">
            Why districts choose us
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text, span, tone }) => (
              <li
                key={title}
                className={cn(
                  "reveal flex flex-col rounded-card p-7 sm:p-8",
                  span,
                  tone === "bus" && "on-bus bg-bus text-asphalt",
                  tone === "soft" && "bg-background",
                  tone === "plain" && "border bg-background",
                )}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
                <h3 className={cn("mt-6", tone === "plain" ? "display-md" : "display-lg")}>{title}</h3>
                <p className={cn("mt-2", tone === "bus" ? "text-asphalt/85" : "text-muted-foreground")}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="container-site py-20 md:py-28" aria-labelledby="solutions-heading">
        <h2 id="solutions-heading" className="display-xl">
          Who we drive for
        </h2>
        <p className="lead mt-5 max-w-2xl">
          We currently work only with public school districts. <strong className="font-bold text-foreground">Private school</strong>{" "}
          transportation is coming soon.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="reveal grid gap-8 rounded-card border p-7 sm:p-10 lg:col-span-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="display-lg">Public school district contracts</h3>
              <p className="mt-4 text-muted-foreground">
                Transportation for school districts with multi-route management, flexible scheduling and full administrative
                support.
              </p>
            </div>
            <CheckList items={districtServices} />
          </div>
          <div className="reveal flex flex-col rounded-card bg-secondary p-7 sm:p-10 lg:col-span-4">
            <p className="w-fit rounded-full bg-bus px-3 py-1 text-sm font-bold text-asphalt">Coming soon</p>
            <h3 className="display-lg mt-5">
              <strong className="font-extrabold">Private school</strong> transportation
            </h3>
            <p className="mt-4 text-muted-foreground">
              We are getting ready to offer routes for private schools. Contact us if you would like to hear when it is available.
            </p>
            <Link to="/contact" className="nudge text-link mt-auto inline-flex items-center gap-2 pt-6">
              Contact us
              <ArrowRight className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="border-t">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="display-xl">Safety features and protocols</h2>
            <p className="lead mt-5">What happens on every route, before the first student boards.</p>
          </div>
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-8">
            {protocols.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallBlock
        title="Partner with Kids Choice."
        body="Tell us about your district and its routes, and we will plan service that works. The consultation and quote are free."
      />
    </>
  );
};

export default SchoolTransportation;
