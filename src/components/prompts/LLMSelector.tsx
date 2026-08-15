import { ChevronDown, Sparkles } from "lucide-react";

import type { LLM } from "../../types/prompt";

interface LLMSelectorProps {
  value: LLM;
  onChange: (value: LLM) => void;
}

export function LLMSelector({ value, onChange }: LLMSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Sparkles
        size={16}
        strokeWidth={1.8}
        className="text-[var(--color-text-muted)]"
        aria-hidden="true"
      />

      <label htmlFor="llm-selector" className="sr-only">
        Select AI model
      </label>

      <div className="relative">
        <select
          id="llm-selector"
          value={value}
          onChange={(event) => onChange(event.target.value as LLM)}
          className="
            appearance-none
            rounded-[var(--radius-sm)]
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            py-2
            pl-3
            pr-9
            text-sm
            font-medium
            text-[var(--color-text-primary)]
            outline-none
            transition-colors
            hover:border-[var(--color-text-muted)]
            focus:border-[var(--color-accent)]
            focus:ring-2
            focus:ring-[var(--color-accent)]/20
          "
        >
          <option value="chatgpt">ChatGPT</option>
          <option value="gemini">Gemini</option>
        </select>

        <ChevronDown
          size={15}
          strokeWidth={2}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-[var(--color-text-muted)]
          "
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
