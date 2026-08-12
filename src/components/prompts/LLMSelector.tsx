import type { KeyboardEvent } from "react";
import type { LLM } from "../../types/prompt";

interface LLMSelectorProps {
  value: LLM;
  onChange: (llm: LLM) => void;
  disabled?: boolean;
}

const options: Array<{ value: LLM; label: string }> = [
  {
    value: "chatgpt",
    label: "ChatGPT",
  },
  {
    value: "gemini",
    label: "Gemini",
  },
];

export function LLMSelector({
  value,
  onChange,
  disabled = false,
}: LLMSelectorProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }

    const currentIndex = options.findIndex((option) => option.value === value);

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();

      const nextIndex = (currentIndex + 1) % options.length;
      onChange(options[nextIndex].value);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();

      const previousIndex =
        (currentIndex - 1 + options.length) % options.length;

      onChange(options[previousIndex].value);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      onChange(options[0].value);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      onChange(options[options.length - 1].value);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Select language model"
      className="inline-flex rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-1"
    >
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            disabled={disabled}
            onClick={() => onChange(option.value)}
            onKeyDown={handleKeyDown}
            className={[
              "rounded-[var(--radius-sm)] px-3 py-1.5 text-sm font-medium",
              "transition-colors duration-150",
              "focus-visible:outline-2 focus-visible:outline-offset-2",
              "focus-visible:outline-[var(--color-accent)]",
              selected
                ? "bg-[var(--color-accent)] text-white"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-text-primary)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
