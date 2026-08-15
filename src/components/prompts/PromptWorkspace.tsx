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
    <section
      aria-labelledby="prompt-workspace-heading"
      className="
        overflow-hidden
        rounded-[var(--radius-lg)]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        shadow-sm
      "
    >
      <h2 id="prompt-workspace-heading" className="sr-only">
        Prompt workspace
      </h2>

      {selectedVariant ? (
        <>
          {/* Toolbar */}
          <div
            className="
              flex
              min-h-16
              items-center
              justify-between
              gap-4
              border-b
              border-[var(--color-border)]
              px-4
              py-3
              sm:px-5
            "
          >
            <LLMSelector value={selectedLLM} onChange={setSelectedLLM} />

            <CopyPromptButton text={promptText} />
          </div>

          {/* Placeholder Warning */}
          <PlaceholderWarning text={promptText} />

          {/* Prompt */}
          <PromptViewer text={promptText} />
        </>
      ) : (
        <div
          role="status"
          className="p-5 text-sm text-[var(--color-text-muted)]"
        >
          No prompt variant is available for {selectedLLM}.
        </div>
      )}
    </section>
  );
}
