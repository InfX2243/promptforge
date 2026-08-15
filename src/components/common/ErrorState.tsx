import { AlertCircle } from "lucide-react";
import type { ReactNode } from "react";

interface ErrorStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function ErrorState({ title, description, action }: ErrorStateProps) {
  return (
    <section
      role="alert"
      className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/[0.04] px-6 py-12 text-center"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
        <AlertCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
      </div>

      <h2 className="text-lg font-semibold text-white">{title}</h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-white/60">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </section>
  );
}
