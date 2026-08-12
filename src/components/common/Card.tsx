import type { HTMLAttributes } from "react";

type CardVariant = "default" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const baseStyles =
  "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]";

const variantStyles: Record<CardVariant, string> = {
  default: "",

  interactive:
    "cursor-pointer transition-[background-color,border-color,transform,box-shadow] duration-150 hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)] hover:-translate-y-px hover:shadow-[var(--shadow-sm)] focus-within:border-[var(--color-accent-border)]",
};

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[baseStyles, variantStyles[variant], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
