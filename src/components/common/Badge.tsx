import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "error";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]",

  accent:
    "border-[var(--color-accent-border)] bg-[var(--color-accent-muted)] text-[var(--color-accent-hover)]",

  success:
    "border-[color-mix(in_srgb,var(--color-success)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-success)_12%,transparent)] text-[var(--color-success)]",

  warning:
    "border-[color-mix(in_srgb,var(--color-warning)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-warning)_12%,transparent)] text-[var(--color-warning)]",

  error:
    "border-[color-mix(in_srgb,var(--color-error)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-error)_12%,transparent)] text-[var(--color-error)]",
};

export function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-[var(--radius-full)] border px-2.5 py-1 text-[var(--font-size-xs)] font-medium leading-none",
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
