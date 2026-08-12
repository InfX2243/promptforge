import type { Prompt } from "../../types/prompt";

import { SearchResultItem } from "./SearchResultItem";

interface SearchResultsProps {
  prompts: Prompt[];
  query: string;
  activeIndex: number;
  onSelect: (prompt: Prompt) => void;
}

export function SearchResults({
  prompts,
  query,
  activeIndex,
  onSelect,
}: SearchResultsProps) {
  if (!query.trim()) {
    return (
      <div className="px-6 py-12 text-center" role="status">
        <p className="text-sm font-medium text-[var(--color-text-primary)]">
          Search PromptForge
        </p>

        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Start typing to find a prompt.
        </p>
      </div>
    );
  }
  if (prompts.length === 0) {
    return (
      <div className="px-6 py-12 text-center" role="status">
        <p className="text-sm font-medium text-[var(--color-text-primary)]">
          No prompts found
        </p>

        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div
      role="listbox"
      aria-label="Search results"
      className="max-h-[60vh] overflow-y-auto p-2"
    >
      {prompts.map((prompt, index) => (
        <div
          key={prompt.id}
          role="option"
          aria-selected={index === activeIndex}
        >
          <SearchResultItem
            prompt={prompt}
            active={index === activeIndex}
            onSelect={onSelect}
          />
        </div>
      ))}
    </div>
  );
}
