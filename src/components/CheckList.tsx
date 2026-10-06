import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckListProps {
  items: readonly string[];
  className?: string;
}

/** A list of short facts, each with a yellow check badge. */
const CheckList = ({ items, className }: CheckListProps) => (
  <ul className={cn("grid gap-x-8 gap-y-3", className)}>
    {items.map(item => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-[0.2rem] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-bus text-asphalt" aria-hidden="true">
          <Check className="h-3.5 w-3.5 ![stroke-width:3px]" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default CheckList;
