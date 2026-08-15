import { Check, Copy } from "lucide-react";

import { Button } from "../common/Button";
import { useClipboard } from "../../hooks/useClipboard";
import { ClipboardError } from "../common/ClipboardError";

interface CopyPromptButtonProps {
  text: string;
  disabled?: boolean;
}

export function CopyPromptButton({
  text,
  disabled = false,
}: CopyPromptButtonProps) {
  const { copied, error, copy } = useClipboard();

  const handleCopy = async () => {
    await copy(text);
  };

  if (error) {
    return <ClipboardError onRetry={handleCopy} />;
  }

  if (copied) {
    return (
      <Button
        type="button"
        variant="secondary"
        disabled
        aria-live="polite"
        className="micro-copy-success w-full sm:w-auto"
      >
        <Check size={16} aria-hidden="true" />
        <span className="ml-2">Copied!</span>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="primary"
      disabled={disabled || text.trim().length === 0}
      onClick={handleCopy}
      aria-live="polite"
      className="w-full sm:w-auto"
    >
      <Copy size={16} aria-hidden="true" />
      <span className="ml-2">Copy Prompt</span>
    </Button>
  );
}
