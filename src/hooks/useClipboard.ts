import { useCallback, useEffect, useRef, useState } from "react";

interface UseClipboardReturn {
  copied: boolean;
  error: string | null;
  copy: (text: string) => Promise<boolean>;
}

const COPY_RESET_DELAY = 2000;

export function useClipboard(): UseClipboardReturn {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      setError("Clipboard API is not available.");
      setCopied(false);

      return false;
    }

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setError(null);

      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }

      resetTimeoutRef.current = setTimeout(() => {
        setCopied(false);
        resetTimeoutRef.current = null;
      }, COPY_RESET_DELAY);

      return true;
    } catch {
      setCopied(false);
      setError("Unable to copy text to the clipboard.");

      return false;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return {
    copied,
    error,
    copy,
  };
}
