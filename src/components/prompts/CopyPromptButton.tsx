import { Check, Copy } from "lucide-react";

import { Button } from "../common/Button";
import { useClipboard } from "../../hooks/useClipboard";

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
    return (
      <Button
        type="button"
        variant="secondary"
        disabled={disabled}
        onClick={handleCopy}
        aria-label="Retry copying prompt"
      >
        <Copy size={16} aria-hidden="true" />
        Copy Prompt
      </Button>
    );
  }

  if (copied) {
    return (
      <Button type="button" variant="secondary" disabled aria-live="polite">
        <Check size={16} aria-hidden="true" />
        Copied
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="primary"
      disabled={disabled || text.trim().length === 0}
      onClick={handleCopy}
    >
      <Copy size={16} aria-hidden="true" />
      Copy Prompt
    </Button>
  );
}
