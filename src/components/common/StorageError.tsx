import { AlertCircle } from "lucide-react";

interface StorageErrorProps {
  message?: string;
}

export function StorageError({
  message = "Your saved prompts could not be loaded. You can continue using PromptForge, but favorites and recent prompts may not be available.",
}: StorageErrorProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3 text-sm"
    >
      <AlertCircle
        className="mt-0.5 h-4 w-4 shrink-0 text-amber-400"
        aria-hidden="true"
      />

      <p className="text-white/70">{message}</p>
    </div>
  );
}
