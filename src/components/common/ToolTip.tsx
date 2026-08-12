import type { HTMLAttributes, ReactNode } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  content: string;
  children: ReactNode;
}

export function Tooltip({
  content,
  children,
  className = "",
  ...props
}: TooltipProps) {
  return (
    <span title={content} className={className} {...props}>
      {children}
    </span>
  );
}
