import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ error = false, className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        "w-full rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-3 py-2.5",
        "text-[var(--font-size-sm)] text-[var(--color-text-primary)]",
        "placeholder:text-[var(--color-text-muted)]",
        "transition-[border-color,box-shadow,background-color] duration-150",
        "focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-muted)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        error
          ? "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[color-mix(in_srgb,var(--color-error)_15%,transparent)]"
          : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={error || undefined}
      {...props}
    />
  );
}
