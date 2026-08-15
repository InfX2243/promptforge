import { Link, useParams } from "react-router-dom";

import { PageContainer } from "../components/layout/PageContainer";
import { PromptGrid } from "../components/prompts/PromptGrid";

import { categories } from "../data/prompts/categories";
import { getPromptsByCategory } from "../lib/prompts/promptUtils";
import { InvalidCategoryState } from "../components/common/InvalidCategoryState";

export default function CategoryPage() {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();

  const category = categories.find((item) => item.id === categoryId);

  if (!category) {
    return <InvalidCategoryState />;
  }

  const categoryPrompts = getPromptsByCategory(category.id);

  return (
    <PageContainer>
      <main className="py-8 sm:py-10 lg:py-12">
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

            <li className="text-[var(--color-text-primary)]">
              {category.name}
            </li>
          </ol>
        </nav>

        {/* Category information */}
        <header className="max-w-3xl">
          <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
            Category
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {category.name}
          </h1>

          <p className="mt-3 text-base leading-7 text-[var(--color-text-secondary)]">
            {category.description}
          </p>
        </header>

        {/* Prompt collection */}
        <section aria-labelledby="category-prompts-heading" className="mt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2
                id="category-prompts-heading"
                className="text-xl font-semibold text-[var(--color-text-primary)]"
              >
                Prompts
              </h2>

              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {categoryPrompts.length}{" "}
                {categoryPrompts.length === 1 ? "prompt" : "prompts"} in this
                category.
              </p>
            </div>
          </div>

          <PromptGrid prompts={categoryPrompts} />
        </section>
      </main>
    </PageContainer>
  );
}
