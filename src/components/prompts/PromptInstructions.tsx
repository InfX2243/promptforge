import type { Prompt } from "../../types/prompt";

interface PromptInstructionsProps {
  prompt: Pick<Prompt, "description" | "instructions">;
}

export function PromptInstructions({ prompt }: PromptInstructionsProps) {
  return (
    <section aria-labelledby="prompt-instructions-heading">
      <h2
        id="prompt-instructions-heading"
        className="text-base font-semibold text-[var(--color-text-primary)]"
      >
        About this prompt
      </h2>

      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
        {prompt.description}
      </p>

      <div className="mt-5">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
          How to use
        </h3>

        <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[var(--color-text-secondary)]">
          {prompt.instructions}
        </p>
      </div>
    </section>
  );
}
