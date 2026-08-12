import type { PromptExample as PromptExampleData } from "../../types/prompt";

interface PromptExampleProps {
  example?: PromptExampleData;
}

export function PromptExample({ example }: PromptExampleProps) {
  if (!example) {
    return null;
  }

  return (
    <section aria-labelledby="prompt-example-heading">
      <div>
        <h2
          id="prompt-example-heading"
          className="text-base font-semibold text-[var(--color-text-primary)]"
        >
          Example
        </h2>

        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          See how this prompt can be applied with example input and output.
        </p>
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
            Input
          </h3>

          <pre
            className="
              mt-2
              overflow-x-auto
              whitespace-pre-wrap
              rounded-[var(--radius-md)]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-4
              font-mono
              text-sm
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            {example.input}
          </pre>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
            Output
          </h3>

          <pre
            className="
              mt-2
              overflow-x-auto
              whitespace-pre-wrap
              rounded-[var(--radius-md)]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-4
              font-mono
              text-sm
              leading-7
              text-[var(--color-text-secondary)]
            "
          >
            {example.output}
          </pre>
        </div>
      </div>
    </section>
  );
}
