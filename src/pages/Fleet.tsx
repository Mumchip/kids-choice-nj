import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, ClipboardCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallBlock from "@/components/CallBlock";
import CheckList from "@/components/CheckList";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/use-page-title";
import driverAtLift from "@/assets/driver-at-lift.jpg";
import vanLiftDetail from "@/assets/van-lift-detail.jpg";
import schoolBusFleet from "@/assets/school-bus-fleet.jpg";

const vehicles = [
  {
    title: "Wheelchair-accessible vans",
    text: "Specialized vans built for safe, comfortable transport of people with mobility needs.",
    image: { src: vanLiftDetail, alt: "A van with its rear wheelchair lift lowered to the ground" },
    features: [
      "Hydraulic wheelchair lifts and ramps",
      "Secure 4-point wheelchair restraints",
      "Climate-controlled interiors",
      "Low-floor entry for easy access",
      "Seating for attendants and family",
      "Room for many wheelchair sizes",
      "Two-way communication systems",
      "ADA-compliant design and safety features",
    ],
  },
  {
    title: "School buses",
    text: "A school bus fleet that meets federal safety standards, inspected and maintained on a regular schedule.",
    image: { src: schoolBusFleet, alt: "A row of yellow school buses parked side by side" },
    features: [
      "Full-size and mid-size bus options",
      "High-backed padded seats with seat belts",
      "Reinforced steel construction",
      "Emergency exits and safety equipment",
      "Extended visibility mirror systems",
      "Coordinated route management support",
      "Stop-arm and crossing-gate systems",
      "Regular DOT inspections and compliance",
    ],
  },
];

const protocols = [
  {
    icon: Wrench,
    title: "Regular maintenance",
    text: "Scheduled preventive maintenance: oil changes, brake inspections, tire rotations and full system checks, with a service record for every vehicle.",
  },
  {
    icon: ClipboardCheck,
    title: "Daily inspections",
    text: "Before every route, drivers complete a pre-trip checklist covering lights, brakes, tires, safety equipment, wheelchair lifts and mechanical systems.",
  },
  {
    icon: BadgeCheck,
    title: "DOT compliance",
    text: "Every vehicle meets Department of Transportation standards and passes regular state inspections under federal and state regulations.",
  },
];

const featureGroups = [
  {
    title: "Safety equipment",
    items: [
      "Fire extinguishers on every vehicle",
      "First aid kits and emergency supplies",
      "Two-way radio communication",
      "Reflective safety triangles",
      "Emergency evacuation plans",
    ],
  },
  {
    title: "Technology",
    items: [
      "Digital route planning tools",
      "High-visibility interior lighting",
      "Electronic logging devices (ELD)",
      "Backup alarms and proximity alerts",
      "Digital dispatch systems",
    ],
  },
  {
    title: "Driver safety",
    items: [
      "CDL licensed and certified drivers",
      "Background checks and drug screening",
      "Defensive driving training",
      "First aid and CPR certification",
      "Ongoing safety education",
    ],
  },
  {
    title: "Accessibility",
    items: ["ADA-compliant wheelchair access", "Secure restraint systems", "Handrails and grab bars", "Non-slip flooring", "Height-adjustable features"],
  },
];

const certifications = [
  { title: "DOT certified", text: "Meets Department of Transportation safety standards." },
  { title: "ADA compliant", text: "Follows Americans with Disabilities Act standards." },
  { title: "Licensed & insured", text: "Licensed commercial carrier with full insurance." },
  { title: "State inspected", text: "Regular state inspections with documented records." },
];

const Fleet = () => {
  usePageTitle("Fleet & Safety");

  return (
    <>
      <PageHero
        eyebrow="Fleet & safety"
        title="Checked before every route."
        lead="Well-maintained vehicles and strict safety protocols, so every trip is safe, comfortable and on schedule."
        image={{
          src: driverAtLift,
          alt: "A driver checking the wheelchair lift of a white passenger van before a trip",
          position: "40% 50%",
        }}
        actions={
          <Button asChild size="lg" className="nudge">
            <Link to="/contact">
              Request a quote
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        }
      />

      {/* Certifications */}
      <section aria-label="Certifications" className="border-y bg-secondary">
        <ul className="container-site grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {certifications.map(item => (
            <li key={item.title} className="flex gap-3">
              <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-[0.9375rem] text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Vehicles */}
      <section className="container-site py-20 md:py-28" aria-labelledby="fleet-heading">
        <h2 id="fleet-heading" className="display-xl">
          Our vehicles
        </h2>
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-10">
          {vehicles.map(vehicle => (
            <article key={vehicle.title} className="reveal">
              <div className="photo aspect-[16/10]">
                <img src={vehicle.image.src} alt={vehicle.image.alt} loading="lazy" width={1024} height={640} />
              </div>
              <h3 className="display-lg mt-7">{vehicle.title}</h3>
              <p className="mt-3 text-muted-foreground">{vehicle.text}</p>
              <CheckList items={vehicle.features} className="mt-6 text-[0.9375rem] sm:grid-cols-2" />
            </article>
          ))}
        </div>
      </section>

      {/* Protocols */}
      <section className="container-site pb-20 md:pb-28" aria-labelledby="protocols-heading">
        <div className="rounded-card bg-secondary px-6 py-12 sm:px-10 md:py-16 lg:px-14">
          <h2 id="protocols-heading" className="display-xl max-w-2xl">
            Maintenance and safety protocols
          </h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            {protocols.map(({ icon: Icon, title, text }, index) => (
              <li key={title} className={`reveal ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`}>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-bus text-asphalt" aria-hidden="true">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="display-md mt-6">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature groups */}
      <section className="border-t">
        <div className="container-site py-20 md:py-28">
          <h2 className="display-xl">On board every vehicle</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featureGroups.map(group => (
              <div key={group.title} className="reveal">
                <h3 className="border-b-4 border-bus pb-3 text-lg font-bold">{group.title}</h3>
                <ul className="mt-4 grid gap-2.5 text-muted-foreground">
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallBlock
        title="Questions about a vehicle?"
        body="Call us to talk through accessibility needs, seating or safety equipment before you book."
      />
    </>
  );
};

export default Fleet;
