import { Link } from "react-router-dom";
import { Accessibility, ArrowRight, Calendar, Clock, Heart, MapPin, Phone, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallBlock from "@/components/CallBlock";
import CheckList from "@/components/CheckList";
import PageHero from "@/components/PageHero";
import { usePageTitle } from "@/hooks/use-page-title";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import vanLiftBoarding from "@/assets/van-lift-boarding.jpg";
import vanLiftDetail from "@/assets/van-lift-detail.jpg";

const highlights = [
  "Lift-equipped and ramp-accessible vans",
  "Trained mobility assistance specialists",
  "Door-to-door service with assistance",
  "Medical appointment coordination",
  "Flexible scheduling options",
  "ADA-compliant vehicles and service",
];

const vehicleFeatures = [
  {
    icon: Accessibility,
    title: "Wheelchair lifts and ramps",
    text: "Hydraulic lifts and ramps for safe, easy boarding. Fits all wheelchair sizes and types.",
  },
  {
    icon: Shield,
    title: "Secure restraint systems",
    text: "Wheelchair restraint systems that meet all safety standards for secure transport.",
  },
  {
    icon: Heart,
    title: "Comfort and cleanliness",
    text: "Climate-controlled interiors, smooth suspension and a full cleaning after every trip.",
  },
];

const services = [
  {
    icon: Calendar,
    title: "Medical appointments",
    text: "Doctor visits, therapy sessions, dialysis and other appointments, on time.",
  },
  {
    icon: MapPin,
    title: "Daily activities",
    text: "Shopping, errands, social visits and recreation. Wherever you need to go.",
  },
  {
    icon: Clock,
    title: "Flexible scheduling",
    text: "One-time trips, recurring appointments or a regular weekly schedule.",
  },
  {
    icon: Heart,
    title: "Personal assistance",
    text: "Door-to-door help with loading, unloading and securing wheelchairs.",
  },
  {
    icon: Shield,
    title: "Senior transportation",
    text: "Patient care for older passengers who use walkers, wheelchairs or other devices.",
  },
  {
    icon: Users,
    title: "Group transportation",
    text: "Accessible transport for day programs and community outings.",
  },
];

const steps = [
  {
    title: "Contact us",
    text: "Call, email or use the online form. We answer your questions and give you a quote.",
  },
  {
    title: "Schedule your ride",
    text: "We set up one-time trips or recurring appointments that fit your schedule.",
  },
  {
    title: "Get a confirmation",
    text: "You receive a confirmation of your ride and a reminder before pick-up.",
  },
  {
    title: "Ride with us",
    text: "Your driver arrives on time, helps with boarding and gets you there safely.",
  },
];

const WheelchairServices = () => {
  usePageTitle("Wheelchair Services");

  return (
    <>
      <PageHero
        eyebrow="Wheelchair & mobility services"
        title="Rides that start at your door."
        lead="Safe, dignified transportation for wheelchair users and anyone with mobility needs, with a trained driver at every step."
        image={{
          src: vanLiftBoarding,
          alt: "A driver standing beside a white accessible van as its side lift raises a woman in a wheelchair",
          position: "45% 70%",
        }}
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
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 className="display-xl">Specialized accessible transportation</h2>
            <p className="lead mt-6">
              Accessible transportation is essential for independence, healthcare and quality of life. Our vans and trained staff
              give people with mobility needs a safe, dignified way to get around.
            </p>
            <p className="mt-5 text-muted-foreground">
              Medical appointments, social events, shopping or daily activities: our team treats every passenger with respect,
              patience and care.
            </p>
          </div>
          <div className="reveal rounded-card bg-secondary p-7 sm:p-10 lg:col-span-6">
            <h3 className="display-md">Every ride includes</h3>
            <CheckList items={highlights} className="mt-6" />
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="container-site pb-20 md:pb-28" aria-labelledby="vehicles-heading">
        <h2 id="vehicles-heading" className="display-xl max-w-2xl">
          Vans built around the wheelchair
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <div className="photo reveal aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[32rem]">
            <img
              src={vanLiftDetail}
              alt="The rear wheelchair lift of a black van lowered to the ground, with yellow safety edges"
              loading="lazy"
              width={1800}
              height={1200}
            />
          </div>
          <ul className="grid gap-5 lg:col-span-5">
            {vehicleFeatures.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className={`reveal flex gap-5 rounded-card p-6 sm:p-7 ${index === 0 ? "on-bus bg-bus text-asphalt" : "border"}`}
              >
                <Icon className="mt-1 h-7 w-7 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="display-md">{title}</h3>
                  <p className={`mt-2 ${index === 0 ? "text-asphalt/85" : "text-muted-foreground"}`}>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/60 py-20 md:py-28" aria-labelledby="mobility-services-heading">
        <div className="container-site">
          <h2 id="mobility-services-heading" className="display-xl max-w-2xl">
            Where we take people
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-card border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <li key={title} className="bg-background p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary" aria-hidden="true">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="display-md mt-5">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-20 md:py-28" aria-labelledby="how-heading">
        <h2 id="how-heading" className="display-xl">
          How booking works
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((item, index) => (
            <li key={item.title} className="reveal relative">
              <div className="flex items-center gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bus font-display text-xl font-extrabold text-asphalt"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                {index < steps.length - 1 && <span className="hidden h-0.5 flex-1 bg-border lg:block" aria-hidden="true" />}
              </div>
              <h3 className="display-md mt-5">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CallBlock
        title="Book your first ride."
        body="Tell us where and when. We will confirm the details and send a reminder before your pick-up."
      />
    </>
  );
};

export default WheelchairServices;
