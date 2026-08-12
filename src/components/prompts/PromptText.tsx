import { Fragment } from "react";

interface PromptTextProps {
  text: string;
}

const PLACEHOLDER_REGEX = /({{\s*[^{}]+\s*}})/g;

export function PromptText({ text }: PromptTextProps) {
  const lines = text.split("\n");

  return (
    <div className="space-y-2">
      {lines.map((line, lineIndex) => {
        const parts = line.split(PLACEHOLDER_REGEX);

        return (
          <p
            key={lineIndex}
            className="whitespace-pre-wrap text-sm leading-7 text-[var(--color-text-secondary)]"
          >
            {parts.map((part, partIndex) => {
              const isPlaceholder = PLACEHOLDER_REGEX.test(part);

              PLACEHOLDER_REGEX.lastIndex = 0;

              if (isPlaceholder) {
                const label = part.replace(/{{|}}/g, "").trim();

                return (
                  <span
                    key={partIndex}
                    className="mx-0.5 inline-flex rounded-[var(--radius-sm)] border border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] px-2 py-0.5 font-mono text-xs font-medium text-[var(--color-accent)]"
                  >
                    {label}
                  </span>
                );
              }

              return <Fragment key={partIndex}>{part}</Fragment>;
            })}
          </p>
        );
      })}
    </div>
  );
}
