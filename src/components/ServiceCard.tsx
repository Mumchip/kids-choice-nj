import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CheckList from "@/components/CheckList";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  features: readonly string[];
  image: { src: string; alt: string };
  link: { to: string; label: string };
  className?: string;
  imageClassName?: string;
}

/** A service panel: photo on top, then a short pitch, four facts and a link to the full service page. */
const ServiceCard = ({ title, description, features, image, link, className, imageClassName }: ServiceCardProps) => (
  <article className={cn("reveal flex flex-col", className)}>
    <div className={cn("photo aspect-[4/3]", imageClassName)}>
      <img src={image.src} alt={image.alt} loading="lazy" width={1200} height={900} />
    </div>
    <h3 className="display-lg mt-7">{title}</h3>
    <p className="mt-3 max-w-[38rem] text-muted-foreground">{description}</p>
    <CheckList items={features} className="mt-6 sm:grid-cols-2" />
    <Link
      to={link.to}
      className="nudge mt-8 inline-flex w-fit items-center gap-2 rounded-full font-bold underline decoration-bus decoration-[3px] underline-offset-[6px] hover:decoration-foreground"
    >
      {link.label}
      <ArrowRight className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
    </Link>
  </article>
);

export default ServiceCard;
