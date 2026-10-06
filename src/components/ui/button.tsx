import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-bold transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[1.125rem] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/85",
        accent: "bg-bus text-asphalt hover:bg-bus-deep",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-foreground/80 bg-transparent text-foreground hover:bg-foreground/[0.06]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[hsl(var(--pressed))]",
        ghost: "text-foreground hover:bg-secondary",
        link: "rounded-none px-0 text-foreground underline underline-offset-4 hover:decoration-2",
      },
      size: {
        default: "h-11 px-5 text-[0.9375rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-[3.25rem] px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
