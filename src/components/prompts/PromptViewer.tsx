import { PromptText } from "./PromptText";

interface PromptViewerProps {
  text: string;
}

export function PromptViewer({ text }: PromptViewerProps) {
  return (
    <section aria-label="Prompt">
      <div
        className="
          max-h-[70vh]
          overflow-x-auto
          overflow-y-auto
          px-5
          py-6
          sm:px-6
          sm:py-7
        "
      >
        <div
          className="
            min-w-0
            font-mono
            text-sm
            leading-7
            text-[var(--color-text-secondary)]
            sm:text-[0.9375rem]
          "
        >
          <PromptText text={text} />
        </div>
      </div>
    </section>
  );
}
