import { Search, X } from "lucide-react";
import type { KeyboardEvent } from "react";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  placeholder?: string;
}
export function SearchBar({
  value,
  onChange,
  onSubmit,
  onKeyDown,
  autoFocus = false,
  placeholder = "Search prompts...",
}: SearchBarProps) {
  return (
    <div className="micro-search relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
      {" "}
      <Search
        size={20}
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
      />{" "}
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.key === "Enter" && !event.defaultPrevented) {
            onSubmit?.();
          }
        }}
        autoFocus={autoFocus}
        placeholder={placeholder}
        aria-label="Search prompts"
        className=" w-full rounded-[var(--radius-lg)] bg-transparent py-3 pl-11 pr-4 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)] focus:outline-none "
      />{" "}
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className=" micro-icon-button absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] "
        >
          {" "}
          <X size={16} aria-hidden="true" />{" "}
        </button>
      )}{" "}
    </div>
  );
}
