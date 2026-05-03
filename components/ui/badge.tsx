import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "gap-1 rounded-none border border-transparent px-2 pt-1 pb-[5px] text-xs font-medium leading-none transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground dark:bg-primary/90 [a]:hover:bg-primary/80 dark:[a]:hover:bg-primary/75",
        secondary:
          "bg-secondary text-secondary-foreground dark:bg-secondary/90 [a]:hover:bg-secondary/80 dark:[a]:hover:bg-secondary/75",
        destructive:
          "bg-destructive/10 dark:bg-destructive/30 [a]:hover:bg-destructive/20 dark:[a]:hover:bg-destructive/35 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive",
        outline:
          "border-border bg-foreground/[0.03] dark:bg-foreground/[0.2] text-foreground [a]:hover:bg-muted/70 dark:[a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
