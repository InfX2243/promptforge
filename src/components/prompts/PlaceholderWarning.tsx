import { AlertTriangle } from "lucide-react";

interface PlaceholderWarningProps {
  text: string;
}

export function PlaceholderWarning({ text }: PlaceholderWarningProps) {
  const placeholders = text.match(/\{\{[^}]+\}\}/g) ?? [];
  const count = placeholders.length;

  if (count === 0) {
    return null;
  }

  return (
    <div
      role="status"
      className="
        border-b border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-4 py-3
        sm:px-5
      "
    >
      <div className="flex items-start gap-3">
        <AlertTriangle
          size={17}
          strokeWidth={2}
          className="mt-0.5 shrink-0 text-[var(--color-accent)]"
          aria-hidden="true"
        />

        <div className="min-w-0">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">
            {count} {count === 1 ? "placeholder" : "placeholders"} remain
          </p>

          <p className="mt-0.5 text-sm leading-6 text-[var(--color-text-secondary)]">
            Replace the highlighted placeholders with your own information
            before copying the prompt.
          </p>
        </div>
      </div>
    </div>
  );
}
