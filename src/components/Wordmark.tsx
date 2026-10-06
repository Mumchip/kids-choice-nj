import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
  /** Use on dark surfaces. */
  inverse?: boolean;
}

/** The yellow "KC" tile plus the company name. Decorative on its own; links supply their own label. */
const Wordmark = ({ className, inverse = false }: WordmarkProps) => (
  <span className={cn("flex items-center gap-3", className)} aria-hidden="true">
    <span className="grid h-10 w-10 place-items-center rounded-[0.7rem] bg-bus font-display text-[1.0625rem] font-extrabold tracking-tight text-asphalt">
      KC
    </span>
    <span className="flex flex-col leading-none" translate="no">
      <span className={cn("font-display text-[1.25rem] font-extrabold tracking-tight", inverse ? "text-white" : "text-foreground")}>
        Kids Choice
      </span>
      <span className={cn("mt-1 text-xs font-bold tracking-[0.12em]", inverse ? "text-white/70" : "text-muted-foreground")}>
        INC. SINCE 1998
      </span>
    </span>
  </span>
);

export default Wordmark;
