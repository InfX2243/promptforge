import { ArrowLeft, FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function InvalidPromptState() {
  const navigate = useNavigate();

  return (
    <section
      role="alert"
      className="flex min-h-[400px] flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
        <FileQuestion className="h-7 w-7 text-white/50" aria-hidden="true" />
      </div>

      <h1 className="text-2xl font-semibold text-white">Prompt not found</h1>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
        The prompt you're looking for doesn't exist or may have been removed.
      </p>

      <button
        type="button"
        onClick={() => navigate("/explore")}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Browse prompts
      </button>
    </section>
  );
}
