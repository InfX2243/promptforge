import { Link, useNavigate, useParams } from "react-router-dom";

import { Button } from "../components/common/Button";
import { PromptExample } from "../components/prompts/PromptExample";
import { PromptInstructions } from "../components/prompts/PromptInstructions";
import { PromptRequirements } from "../components/prompts/PromptRequirements";
import { PromptWorkspace } from "../components/prompts/PromptWorkspace";

import { categories } from "../data/prompts/categories";
import { getPromptById } from "../lib/prompts/promptUtils";

import { PageContainer } from "../components/layout/PageContainer";

export default function PromptPage() {
  const { promptId } = useParams<{ promptId: string }>();
  const navigate = useNavigate();

  const prompt = promptId ? getPromptById(promptId) : undefined;

  if (!prompt) {
    return (
      <PageContainer>
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            Prompt not found
          </h1>

          <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
            The prompt you're looking for doesn't exist or may have been
            removed.
          </p>

          <Button className="mt-6" onClick={() => navigate("/explore")}>
            Explore prompts
          </Button>
        </div>
      </PageContainer>
    );
  }

  const category = categories.find((item) => item.id === prompt.categoryId);

  return (
    <PageContainer>
      <main className="py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-[var(--color-text-muted)]">
            <li>
              <Link
                to="/explore"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                Explore
              </Link>
            </li>

            <li aria-hidden="true">/</li>

            <li>{category?.name ?? "Category"}</li>

            <li aria-hidden="true">/</li>

            <li className="text-[var(--color-text-secondary)]">
              {prompt.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl">
          {category && (
            <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
              {category.name}
            </span>
          )}

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                {prompt.title}
              </h1>

              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-text-secondary)]">
                {prompt.description}
              </p>
            </div>

            {/* Favorite interface */}
            <Button
              variant="ghost"
              type="button"
              aria-label={`Favorite ${prompt.title}`}
            >
              Favorite
            </Button>
          </div>
        </header>

        {/* Main content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          {/* Information */}
          <div className="space-y-10">
            <PromptInstructions prompt={prompt} />

            <PromptRequirements requirements={prompt.requirements} />

            <PromptExample example={prompt.example} />
          </div>

          {/* Workspace */}
          <aside className="lg:sticky lg:top-24">
            <PromptWorkspace prompt={prompt} />
          </aside>
        </div>
      </main>
    </PageContainer>
  );
}
