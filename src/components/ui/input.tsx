import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-input border border-input bg-card px-4 py-2 text-base text-foreground transition-colors hover:border-foreground/70 aria-[invalid=true]:border-destructive aria-[invalid=true]:border-2 disabled:cursor-not-allowed disabled:opacity-50 file:mr-4 file:h-full file:cursor-pointer file:rounded-full file:border-0 file:bg-secondary file:px-4 file:text-sm file:font-bold file:text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
