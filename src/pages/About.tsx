import type { CSSProperties } from "react";
import { Award, Heart, Shield, Users } from "lucide-react";
import CallBlock from "@/components/CallBlock";
import CheckList from "@/components/CheckList";
import { usePageTitle } from "@/hooks/use-page-title";
import riderAndDriver from "@/assets/rider-and-driver.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety first",
    text: "Every vehicle, every driver and every route is planned with safety as the top priority.",
  },
  {
    icon: Heart,
    title: "Compassion",
    text: "We treat every passenger with dignity, respect and real care.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Continuous training, maintenance and improvement so the service keeps getting better.",
  },
  {
    icon: Users,
    title: "Community",
    text: "We are proud to be part of the New Jersey communities we drive in every day.",
  },
];

const credentials = [
  {
    title: "Licensing & insurance",
    items: ["State-licensed school bus operator", "Fully insured and bonded", "DOT certified vehicles", "Commercial driver licensing (CDL)"],
  },
  {
    title: "ADA compliance",
    items: [
      "ADA-compliant vehicles and service",
      "Wheelchair accessibility certified",
      "Mobility assistance training",
      "Equal opportunity provider",
    ],
  },
  {
    title: "Safety standards",
    items: [
      "First aid and CPR certified drivers",
      "Defensive driving certification",
      "Regular safety audits",
      "Detailed route planning support",
    ],
  },
  {
    title: "Background checks",
    items: [
      "Comprehensive background screening",
      "Drug and alcohol testing",
      "Annual driver record reviews",
      "Child safety clearances",
    ],
  },
];

const step = (i: number) => ({ "--i": i }) as CSSProperties;

const About = () => {
  usePageTitle("About Us");

  return (
    <>
      {/* Hero */}
      <section className="container-site grid gap-10 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-end lg:gap-14">
        <div className="lg:col-span-7">
          <p className="eyebrow rise" style={step(0)}>
            About Kids Choice INC.
          </p>
          <h1 className="display-xxl rise mt-4" style={step(1)}>
            A family-trusted ride for more than 25 years.
          </h1>
          <p className="lead rise mt-6 max-w-[34rem]" style={step(2)}>
            Safe, reliable transportation for students and for people with mobility needs, run from New Jersey since 1998.
          </p>
        </div>
        <div className="rise grid grid-cols-2 gap-4 lg:col-span-5" style={step(2)}>
          <div className="col-span-2 rounded-card bg-bus p-7 text-asphalt sm:p-9">
            <p className="font-display text-[4.5rem] font-extrabold leading-[0.9] tracking-tight sm:text-[6rem]">1998</p>
            <p className="mt-4 max-w-xs font-bold">Founded as a small school bus operation.</p>
          </div>
          <div className="rounded-card border p-6">
            <p className="font-display text-[2rem] font-extrabold leading-none tracking-tight">2</p>
            <p className="mt-2 text-[0.9375rem] text-muted-foreground">services: school routes and wheelchair transport</p>
          </div>
          <div className="rounded-card bg-secondary p-6">
            <p className="font-display text-[2rem] font-extrabold leading-none tracking-tight">NJ</p>
            <p className="mt-2 text-[0.9375rem] text-muted-foreground">Northern and Central New Jersey</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="display-xl lg:sticky lg:top-36">Our story</h2>
          </div>
          <div className="reveal space-y-6 text-[1.1875rem] leading-[1.7] lg:col-span-8">
            <p>
              Kids Choice INC. was founded in 1998 with a simple mission: to provide transportation that families and
              institutions could trust completely. What started as a small school bus operation has grown into a full transportation
              provider for both student transport and wheelchair-accessible mobility services.
            </p>
            <p className="text-muted-foreground">
              Over the years we saw a clear need in our community. People with mobility challenges often struggled to find
              reliable, compassionate transportation. So we added wheelchair-accessible vehicles and trained staff who understand
              that a ride is about more than getting from one place to another.
            </p>
            <blockquote className="my-10 border-l-4 border-bus py-1 pl-6 font-display text-[1.75rem] font-bold leading-[1.25] tracking-[-0.01em] sm:text-[2.125rem]">
              It&rsquo;s about independence, dignity and care.
            </blockquote>
            <p className="text-muted-foreground">
              Today Kids Choice INC. serves hundreds of families, schools and individuals throughout Northern and Central New
              Jersey. Safety, accessibility and compassionate service are still at the center of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/60 py-20 md:py-28" aria-labelledby="values-heading">
        <div className="container-site">
          <h2 id="values-heading" className="display-xl">
            What we hold ourselves to
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal border-t-4 border-bus pt-6">
                <Icon className="h-7 w-7" aria-hidden="true" />
                <h3 className="display-md mt-5">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Credentials */}
      <section className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-14" aria-labelledby="credentials-heading">
        <div className="lg:col-span-5">
          <h2 id="credentials-heading" className="display-xl">
            Certifications and credentials
          </h2>
          <p className="lead mt-5">The licensing, insurance and training that every route depends on.</p>
          <div className="photo reveal mt-10 hidden aspect-[4/5] lg:block">
            <img
              src={riderAndDriver}
              alt="A driver standing behind a smiling woman in a wheelchair on a van lift"
              loading="lazy"
              width={1800}
              height={1200}
              className="object-[50%_50%]"
            />
          </div>
        </div>
        <div className="grid content-start gap-5 sm:grid-cols-2 lg:col-span-7">
          {credentials.map((group, index) => (
            <div key={group.title} className={`reveal rounded-card p-7 ${index === 0 || index === 3 ? "bg-secondary" : "border"}`}>
              <h3 className="display-md">{group.title}</h3>
              <CheckList items={group.items} className="mt-5 text-[0.9375rem]" />
            </div>
          ))}
        </div>
      </section>

      <CallBlock
        title="Questions about our credentials?"
        body="Schools and families are welcome to ask about our licensing, insurance or driver training before a first ride."
      />
    </>
  );
};

export default About;
