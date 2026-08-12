import { useMemo, useState } from "react";

import { LLMSelector } from "./LLMSelector";
import { PlaceholderWarning } from "./PlaceholderWarning";
import { PromptViewer } from "./PromptViewer";
import { CopyPromptButton } from "./CopyPromptButton";

import type { LLM, Prompt } from "../../types/prompt";

interface PromptWorkspaceProps {
  prompt: Prompt;
}

function getVariantForLLM(prompt: Prompt, llm: LLM) {
  return (
    prompt.variants.find(
      (variant) => variant.name.trim().toLowerCase() === llm,
    ) ?? null
  );
}

export function PromptWorkspace({ prompt }: PromptWorkspaceProps) {
  const initialLLM: LLM = prompt.supportedLLMs[0] ?? "chatgpt";

  const [selectedLLM, setSelectedLLM] = useState<LLM>(initialLLM);

  const selectedVariant = useMemo(
    () => getVariantForLLM(prompt, selectedLLM),
    [prompt, selectedLLM],
  );

  const promptText = selectedVariant?.instructions ?? "";

  return (
    <section aria-labelledby="prompt-workspace-heading" className="space-y-5">
      <h2 id="prompt-workspace-heading" className="sr-only">
        Prompt workspace
      </h2>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <LLMSelector value={selectedLLM} onChange={setSelectedLLM} />
      </div>

      {selectedVariant ? (
        <>
          <PlaceholderWarning text={promptText} />

          <PromptViewer text={promptText} />

          <div className="flex justify-end">
            <CopyPromptButton text={promptText} />
          </div>
        </>
      ) : (
        <div
          role="status"
          className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-text-muted)]"
        >
          No prompt variant is available for {selectedLLM}.
        </div>
      )}
    </section>
  );
}
