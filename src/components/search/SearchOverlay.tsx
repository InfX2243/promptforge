import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { prompts } from "../../data/prompts/prompts";
import { searchPrompts } from "../../lib/prompts/promptUtils";

import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(() => {
    return searchPrompts(prompts, query);
  }, [query]);

  useEffect(() => {
    if (!open) {
      return;
    }

    setQuery("");
    setActiveIndex(-1);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setActiveIndex(value ? 0 : -1);
  };

  const handleSelect = (promptId: string) => {
    onClose();
    navigate(`/prompt/${promptId}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setActiveIndex((current) =>
        current >= results.length - 1 ? 0 : current + 1,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setActiveIndex((current) =>
        current <= 0 ? results.length - 1 : current - 1,
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const activePrompt = results[activeIndex];

      if (activePrompt) {
        handleSelect(activePrompt.id);
      }
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-start
        justify-center
        bg-black/60
        px-4
        pt-[10vh]
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-label="Search prompts"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[var(--radius-lg)]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          shadow-[var(--shadow-lg)]
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="border-b border-[var(--color-border)] p-4">
          <SearchBar
            value={query}
            onChange={handleQueryChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>

        <SearchResults
          prompts={results}
          query={query}
          activeIndex={activeIndex}
          onSelect={(prompt) => handleSelect(prompt.id)}
        />

        <div className="hidden items-center gap-4 border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-text-muted)] sm:flex">
          <span>↑↓ Navigate</span>
          <span>Enter Select</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
}
