import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  featured?: boolean;
  className?: string;
}

/** A short client quote. The featured variant is set large in the display face. */
const TestimonialCard = ({ quote, author, role, featured = false, className }: TestimonialCardProps) => (
  <figure
    className={cn(
      "reveal flex h-full flex-col justify-between rounded-card",
      featured ? "bg-secondary p-8 sm:p-10 lg:p-12" : "border p-7 sm:p-8",
      className,
    )}
  >
    <blockquote>
      <p
        className={cn(
          featured
            ? "font-display text-[1.625rem] font-bold leading-[1.25] tracking-[-0.01em] sm:text-[2rem] lg:text-[2.25rem]"
            : "text-[1.125rem] leading-relaxed",
        )}
      >
        <span aria-hidden="true">&ldquo;</span>
        {quote}
        <span aria-hidden="true">&rdquo;</span>
      </p>
    </blockquote>
    <figcaption className={cn("flex items-center gap-3", featured ? "mt-10" : "mt-8")}>
      <span className="h-8 w-1.5 rounded-full bg-bus" aria-hidden="true" />
      <span>
        <span className="block font-bold">{author}</span>
        <span className="block text-[0.9375rem] text-muted-foreground">{role}</span>
      </span>
    </figcaption>
  </figure>
);

export default TestimonialCard;
