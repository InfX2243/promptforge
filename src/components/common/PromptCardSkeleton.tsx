import { Skeleton } from "./Skeleton";

export function PromptCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>

      <Skeleton className="mt-5 h-6 w-3/4" />

      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      <div className="mt-5 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-9 w-20 rounded-lg" />
      </div>
    </div>
  );
}
