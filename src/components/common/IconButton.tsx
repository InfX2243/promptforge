import type { ButtonHTMLAttributes, ReactNode } from "react";
type IconButtonSize = "sm" | "md" | "lg";
type IconButtonVariant = "default" | "ghost";
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}
const sizeStyles: Record<IconButtonSize, string> = {
  sm: "size-8",
  md: "size-9",
  lg: "size-10",
};
const variantStyles: Record<IconButtonVariant, string> = {
  default:
    "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)]",
  ghost:
    "bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
};
export function IconButton({
  icon,
  label,
  size = "md",
  variant = "ghost",
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={[
        "micro-icon-button inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] transition-colors duration-150",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        sizeStyles[size],
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {" "}
      {icon}{" "}
    </button>
  );
}
