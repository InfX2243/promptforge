import { PromptCardSkeleton } from "./PromptCardSkeleton";

interface PromptGridSkeletonProps {
  count?: number;
}

export function PromptGridSkeleton({ count = 6 }: PromptGridSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading prompts"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {Array.from({ length: count }, (_, index) => (
        <PromptCardSkeleton key={index} />
      ))}

      <span className="sr-only">Loading prompts...</span>
    </div>
  );
}
