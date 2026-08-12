import { ChevronRight } from "lucide-react";

import type { Prompt } from "../../types/prompt";

interface SearchResultItemProps {
  prompt: Prompt;
  active?: boolean;
  onSelect: (prompt: Prompt) => void;
}

export function SearchResultItem({
  prompt,
  active = false,
  onSelect,
}: SearchResultItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(prompt)}
      className={`
        flex
        w-full
        items-center
        justify-between
        gap-4
        rounded-[var(--radius-md)]
        px-4
        py-3
        text-left
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-accent)]
        ${
          active
            ? "bg-[var(--color-surface-elevated)]"
            : "hover:bg-[var(--color-surface-elevated)]"
        }
      `}
    >
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[var(--color-text-primary)]">
          {prompt.title}
        </p>

        <p className="mt-1 truncate text-xs text-[var(--color-text-muted)]">
          {prompt.description}
        </p>
      </div>

      <ChevronRight
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[var(--color-text-muted)]"
      />
    </button>
  );
}
