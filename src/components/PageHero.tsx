import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  eyebrow?: string;
  image?: { src: string; alt: string; position?: string };
  /** Extra content under the actions, such as a short fact row. */
  children?: ReactNode;
}

/** Split hero used by the interior pages: copy left, photo right, collapsing to a single column on small screens. */
const PageHero = ({ title, lead, actions, eyebrow, image, children }: PageHeroProps) => (
  <section className="container-site grid items-center gap-10 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:gap-12">
    <div className={cn(image ? "lg:col-span-6" : "lg:col-span-9")}>
      {eyebrow && (
        <p className="eyebrow rise" style={{ "--i": 0 } as CSSProperties}>
          {eyebrow}
        </p>
      )}
      <h1 className="display-xxl rise mt-4" style={{ "--i": 1 } as CSSProperties}>
        {title}
      </h1>
      <p className="lead rise mt-6 max-w-[34rem]" style={{ "--i": 2 } as CSSProperties}>
        {lead}
      </p>
      {actions && (
        <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--i": 3 } as CSSProperties}>
          {actions}
        </div>
      )}
      {children}
    </div>
    {image && (
      <div className="photo rise aspect-[4/3] lg:col-span-6" style={{ "--i": 2 } as CSSProperties}>
        <img
          src={image.src}
          alt={image.alt}
          width={1200}
          height={900}
          {...{ fetchpriority: "high" }}
          style={image.position ? { objectPosition: image.position } : undefined}
        />
      </div>
    )}
  </section>
);

export default PageHero;
