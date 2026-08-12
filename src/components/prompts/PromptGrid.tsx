import { PromptCard } from "./PromptCard";
import type { Prompt } from "../../types/prompt";

interface PromptGridProps {
  prompts: Prompt[];
  emptyMessage?: string;
}

export function PromptGrid({
  prompts,
  emptyMessage = "No prompts found.",
}: PromptGridProps) {
  if (prompts.length === 0) {
    return (
      <div
        className="flex min-h-48 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 text-center"
        role="status"
      >
        <p className="text-sm text-[var(--color-text-muted)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}
