import { AlertCircle } from "lucide-react";

import { extractPlaceholders } from "../../lib/prompts/promptUtils";

interface PlaceholderWarningProps {
  text: string;
}

export function PlaceholderWarning({ text }: PlaceholderWarningProps) {
  const placeholders = extractPlaceholders(text);
  const count = placeholders.length;

  if (count === 0) {
    return null;
  }

  const placeholderLabel =
    count === 1 ? "placeholder remains" : "placeholders remain";

  return (
    <div
      role="status"
      className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm"
    >
      <AlertCircle
        size={18}
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-[var(--color-accent)]"
      />

      <div className="min-w-0">
        <p className="font-medium text-[var(--color-text-primary)]">
          {count} {placeholderLabel}
        </p>

        <p className="mt-1 text-[var(--color-text-muted)]">
          Replace the highlighted placeholders with your own information before
          copying the prompt.
        </p>
      </div>
    </div>
  );
}
