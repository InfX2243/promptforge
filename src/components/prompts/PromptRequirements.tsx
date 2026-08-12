import { Check } from "lucide-react";

import type { Prompt } from "../../types/prompt";

interface PromptRequirementsProps {
  requirements: Prompt["requirements"];
}

export function PromptRequirements({ requirements }: PromptRequirementsProps) {
  if (requirements.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="prompt-requirements-heading">
      <h2
        id="prompt-requirements-heading"
        className="text-base font-semibold text-[var(--color-text-primary)]"
      >
        Required inputs
      </h2>

      <ul className="mt-3 space-y-2">
        {requirements.map((requirement) => (
          <li
            key={requirement}
            className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
          >
            <Check
              size={16}
              aria-hidden="true"
              className="mt-1 shrink-0 text-[var(--color-accent)]"
            />

            <span>{requirement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
