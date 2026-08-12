import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { IconButton } from "../common/IconButton";
import type { Prompt } from "../../types/prompt";

interface PromptCardProps {
  prompt: Prompt;
  onFavorite?: (promptId: string) => void;
}

export function PromptCard({ prompt, onFavorite }: PromptCardProps) {
  return (
    <Card variant="interactive" className="h-full">
      <article className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link
              to={`/prompt/${prompt.id}`}
              className="text-base font-semibold text-[var(--color-text-primary)] transition-colors duration-150 hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {prompt.title}
            </Link>

            <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)]">
              {prompt.categoryId}
            </p>
          </div>

          <IconButton
            icon={<Heart size={17} aria-hidden="true" />}
            label={`Favorite ${prompt.title}`}
            onClick={() => onFavorite?.(prompt.id)}
          />
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          {prompt.description}
        </p>

        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-2">
            {prompt.supportedLLMs.map((llm) => (
              <Badge key={llm} variant="default">
                {llm === "chatgpt" ? "ChatGPT" : "Gemini"}
              </Badge>
            ))}
          </div>

          <Link
            to={`/prompt/${prompt.id}`}
            className="shrink-0 text-sm font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            View prompt
          </Link>
        </div>
      </article>
    </Card>
  );
}
