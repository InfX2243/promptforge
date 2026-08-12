import { PromptText } from "./PromptText";

interface PromptViewerProps {
  text: string;
}

export function PromptViewer({ text }: PromptViewerProps) {
  return (
    <section
      aria-label="Prompt"
      className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div
        className="
          max-h-[min(70vh,720px)]
          overflow-x-auto
          overflow-y-auto
          p-4
          sm:p-5
          lg:p-6
        "
      >
        <div className="min-w-0 font-mono text-sm leading-7 sm:text-[0.9375rem]">
          <PromptText text={text} />
        </div>
      </div>
    </section>
  );
}
