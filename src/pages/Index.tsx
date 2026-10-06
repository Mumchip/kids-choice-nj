import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallBlock from "@/components/CallBlock";
import CheckList from "@/components/CheckList";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { usePageTitle } from "@/hooks/use-page-title";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import riderAndDriver from "@/assets/rider-and-driver.jpg";
import caregiverPark from "@/assets/caregiver-park.jpg";
import schoolBusFleet from "@/assets/school-bus-fleet.jpg";
import driverAtLift from "@/assets/driver-at-lift.jpg";

const facts = [
  { value: "Since 1998", label: "Serving New Jersey families and schools" },
  { value: "Licensed", label: "State-licensed, fully insured and bonded" },
  { value: "ADA", label: "Compliant vans with lifts and ramps" },
  { value: "7 days", label: "7 AM to 6 PM, emergency service 24/7" },
];

const reasons = [
  "State-licensed and fully insured",
  "Specialized training for mobility assistance",
  "Modern, accessible vehicle fleet",
  "24/7 dispatch and support",
  "Personalized service plans",
  "Proven safety record",
];

const testimonials = [
  {
    quote:
      "As someone who uses a wheelchair, finding reliable transportation has always been a challenge. Kids Choice changed that completely.",
    author: "Robert Chen",
    role: "Mobility client",
  },
  {
    quote:
      "Kids Choice has driven my daughter to school for 3 years. The drivers are always on time, professional, and care about the kids.",
    author: "Maria Thompson",
    role: "Parent, Lincoln Elementary",
  },
  {
    quote:
      "We’ve contracted Kids Choice for our private school for over 5 years. Their safety record is impeccable and communication is outstanding.",
    author: "Jennifer Martinez",
    role: "School administrator",
  },
];

const step = (i: number) => ({ "--i": i }) as CSSProperties;

const Index = () => {
  usePageTitle();

  return (
    <>
      {/* Hero */}
      <section className="container-site grid items-center gap-10 pb-14 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-14 lg:pb-20">
        <div className="lg:col-span-5">
          <h1 className="display-xxl rise" style={step(0)}>
            <span className="marker">Safe</span> rides,<br className="hidden sm:inline" /> since 1998.
          </h1>
          <p className="lead rise mt-6 max-w-[30rem]" style={step(1)}>
            Licensed school bus routes and wheelchair-accessible vans for families, schools and riders across Northern and
            Central New Jersey.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={step(2)}>
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
          </div>
        </div>
        <div className="photo rise aspect-[4/3] lg:col-span-7 lg:aspect-[16/11]" style={step(1)}>
          <img
            src={riderAndDriver}
            alt="A smiling woman in a wheelchair and her driver on the lift of an accessible van"
            width={1800}
            height={1200}
            className="object-[60%_45%]"
            {...{ fetchpriority: "high" }}
          />
        </div>
      </section>

      {/* Facts */}
      <section aria-label="Company facts" className="border-y bg-secondary">
        <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.value}
              className={[
                "py-7 pr-4 md:py-9",
                index % 2 === 1 ? "border-l pl-5 md:pl-8" : "",
                index === 2 ? "border-t lg:border-l lg:border-t-0 lg:pl-8" : "",
                index === 3 ? "border-t lg:border-t-0" : "",
              ].join(" ")}
            >
              <dt className="font-display text-[1.75rem] font-extrabold leading-none tracking-tight md:text-[2.25rem]">{fact.value}</dt>
              <dd className="mt-2 text-[0.9375rem] text-muted-foreground">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="container-site py-20 md:py-28" aria-labelledby="services-heading">
        <p className="eyebrow">What we do</p>
        <h2 id="services-heading" className="display-xl mt-3 max-w-2xl">
          Two services, run with the same care.
        </h2>
        <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-12 lg:gap-12">
          <ServiceCard
            className="lg:col-span-7"
            title="Wheelchair accessible transport"
            description="Lift-equipped vans and trained drivers for medical appointments, day programs and everyday errands."
            features={[
              "Lift and ramp-accessible vehicles",
              "Trained, patient drivers",
              "Door-to-door service",
              "Medical appointment transport",
            ]}
            image={{ src: caregiverPark, alt: "A caregiver walking beside an older woman in a wheelchair on a sunny lawn" }}
            link={{ to: "/wheelchair-services", label: "Wheelchair services" }}
          />
          <ServiceCard
            className="lg:col-span-5 lg:mt-24"
            title="School transportation"
            description="Daily routes for public school districts. Private school transportation is coming soon."
            features={[
              "Licensed, certified drivers",
              "Well-maintained fleet",
              "Route coordination team",
              "Flexible routing",
            ]}
            image={{ src: schoolBusFleet, alt: "A long row of yellow school buses parked side by side" }}
            link={{ to: "/school-transportation", label: "School transportation" }}
          />
        </div>
      </section>

      {/* Why us */}
      <section className="border-t">
        <div className="container-site grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:pr-6">
            <h2 className="display-xl">More than getting from one address to another.</h2>
            <p className="lead mt-5 max-w-xl">
              Transportation is about trust. Every passenger is treated with patience and respect, from the first phone call to
              the drop-off.
            </p>
            <CheckList items={reasons} className="mt-8 sm:grid-cols-2" />
            <Link to="/about" className="nudge text-link mt-10 inline-flex items-center gap-2">
              About Kids Choice
              <ArrowRight className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
            </Link>
          </div>
          <div className="reveal lg:col-span-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 rounded-card bg-bus p-6 text-asphalt sm:p-8">
                <p className="font-display text-[3.5rem] font-extrabold leading-none tracking-tight sm:text-[4.5rem]">25+</p>
                <p className="mt-3 font-bold">years driving New Jersey students and riders</p>
              </div>
              <div className="col-span-2 rounded-card border p-6 sm:p-8">
                <p className="font-display text-[2rem] font-extrabold leading-none tracking-tight sm:text-[2.5rem]">24/7</p>
                <p className="mt-3 text-[0.9375rem] text-muted-foreground">dispatch and emergency support</p>
              </div>
              <div className="col-span-5 rounded-card bg-secondary p-6 sm:p-8">
                <p className="display-md">Background-checked, CPR-certified drivers</p>
                <p className="mt-2 text-muted-foreground">
                  Every driver passes screening, drug testing and child safety clearances before their first route.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/60 py-20 md:py-28" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <p className="eyebrow">Testimonials</p>
          <h2 id="testimonials-heading" className="display-xl mt-3 max-w-2xl">
            What riders, parents and schools tell us.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <TestimonialCard {...testimonials[0]} featured className="bg-background lg:col-span-7" />
            <div className="grid gap-5 lg:col-span-5">
              <TestimonialCard {...testimonials[1]} className="bg-background" />
              <TestimonialCard {...testimonials[2]} className="bg-background" />
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="container-site grid items-center gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
        <div className="photo reveal aspect-[4/3] lg:col-span-5">
          <img
            src={driverAtLift}
            alt="A uniformed driver operating the wheelchair lift on a white passenger van"
            loading="lazy"
            width={1800}
            height={1200}
          />
        </div>
        <div className="lg:col-span-7">
          <h2 className="display-xl max-w-2xl">Our drivers are the reason families call back.</h2>
          <p className="lead mt-5 max-w-2xl">
            Every team member goes through background checks, training and ongoing professional development. If you care about
            getting people where they need to be, we would like to hear from you.
          </p>
          <Button asChild size="lg" variant="outline" className="nudge mt-8">
            <Link to="/join-us">
              Apply to drive
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <CallBlock
        title="Tell us where you need to go."
        body="Get a free quote for a single trip, a recurring appointment or a full school route. We reply within 24 hours."
      />
    </>
  );
};

export default Index;
