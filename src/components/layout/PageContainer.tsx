import type { HTMLAttributes } from "react";

export interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function PageContainer({
  className = "",
  children,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={[
        "page-container mx-auto w-full max-w-[var(--content-width-xl)] px-4 sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
