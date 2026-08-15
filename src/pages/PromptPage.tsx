import { Link, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { useEffect } from "react";

import { Button } from "../components/common/Button";
import { PromptExample } from "../components/prompts/PromptExample";
import { PromptInstructions } from "../components/prompts/PromptInstructions";
import { PromptRequirements } from "../components/prompts/PromptRequirements";
import { PromptWorkspace } from "../components/prompts/PromptWorkspace";

import { categories } from "../data/prompts/categories";
import { getPromptById } from "../lib/prompts/promptUtils";

import { PageContainer } from "../components/layout/PageContainer";
import { useFavorites } from "../hooks/useFavorites";
import { useRecent } from "../hooks/useRecent";
import { InvalidPromptState } from "../components/common/InvalidPromptState";

export default function PromptPage() {
  const { promptId } = useParams<{ promptId: string }>();

  const { addRecent } = useRecent();
  const { isFavorite, toggleFavorite } = useFavorites();

  const prompt = promptId ? getPromptById(promptId) : undefined;

  useEffect(() => {
    if (!prompt) {
      return;
    }

    addRecent(prompt.id);
  }, [prompt, addRecent]);

  if (!prompt) {
    return <InvalidPromptState />;
  }

  const favorite = isFavorite(prompt.id);

  const category = categories.find((item) => item.id === prompt.categoryId);

  return (
    <PageContainer>
      <main className="py-8 sm:py-10 lg:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link
                to="/explore"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                Explore
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li className="text-[var(--color-text-secondary)]">
              {category?.name ?? "Category"}
            </li>

            <li aria-hidden="true">/</li>

            <li className="text-[var(--color-text-primary)]">{prompt.title}</li>
          </ol>
        </nav>

        {/* Prompt Header */}
        <header className="border-b border-[var(--color-border)] pb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0 max-w-4xl">
              {category && (
                <span className="inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
                  {category.name}
                </span>
              )}

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl">
                {prompt.title}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
                {prompt.description}
              </p>
            </div>

            {/* Favorite */}
            <Button
              variant="ghost"
              type="button"
              aria-label={
                favorite
                  ? `Remove ${prompt.title} from favorites`
                  : `Add ${prompt.title} to favorites`
              }
              aria-pressed={favorite}
              onClick={() => toggleFavorite(prompt.id)}
              className="shrink-0 self-start sm:self-auto"
            >
              <Star
                size={18}
                strokeWidth={1.8}
                fill={favorite ? "currentColor" : "none"}
                aria-hidden="true"
              />

              <span className="ml-2">
                {favorite ? "Favorited" : "Favorite"}
              </span>
            </Button>
          </div>
        </header>

        {/* Primary Prompt Workspace */}
        <section
          aria-label="Prompt workspace"
          className="mx-auto mt-10 w-full max-w-5xl sm:mt-12"
        >
          <PromptWorkspace prompt={prompt} />
        </section>

        {/* Supporting Information */}
        <section
          aria-label="Prompt information"
          className="mx-auto mt-16 w-full max-w-5xl border-t border-[var(--color-border)] pt-12 sm:mt-20 sm:pt-14"
        >
          <div className="space-y-14 sm:space-y-16">
            {/* About */}
            {/* <section aria-labelledby="about-prompt-heading">
              <h2
                id="about-prompt-heading"
                className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]"
              >
                About this prompt
              </h2>

              <p className="mt-3 max-w-4xl text-base leading-7 text-[var(--color-text-secondary)]">
                {prompt.description}
              </p>
            </section> */}

            {/* How to use */}
            <PromptInstructions prompt={prompt} />

            {/* Requirements */}
            <PromptRequirements requirements={prompt.requirements} />

            {/* Example */}
            <PromptExample example={prompt.example} />
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
