import { AlertCircle } from "lucide-react";

interface ClipboardErrorProps {
  onRetry?: () => void;
}

export function ClipboardError({ onRetry }: ClipboardErrorProps) {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm"
    >
      <AlertCircle
        className="h-4 w-4 shrink-0 text-red-400"
        aria-hidden="true"
      />

      <p className="flex-1 text-white/70">
        Unable to copy the prompt. Please try again.
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="shrink-0 font-medium text-white transition-colors hover:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Retry
        </button>
      )}
    </div>
  );
}
