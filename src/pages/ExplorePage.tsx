import { useMemo, useState } from "react";

import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/common/Button";
import { PromptGrid } from "../components/prompts/PromptGrid";

import { prompts } from "../data/prompts/prompts";
import { categories } from "../data/prompts/categories";

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    if (!activeCategory) {
      return prompts;
    }

    return prompts.filter((prompt) => prompt.categoryId === activeCategory);
  }, [activeCategory]);

  return (
    <PageContainer>
      <main className="py-8 sm:py-10 lg:py-12">
        {/* Heading */}
        <header>
          <p className="text-sm font-medium text-[var(--color-accent)]">
            Explore
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Explore prompts
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)]">
            Browse practical prompts across communication, content, technical
            work, planning, productivity, and more.
          </p>
        </header>

        {/* Category filters */}
        <section aria-labelledby="category-filter-heading" className="mt-8">
          <div className="flex flex-col gap-4">
            <h2
              id="category-filter-heading"
              className="text-sm font-semibold text-[var(--color-text-primary)]"
            >
              Categories
            </h2>

            <div
              className="flex gap-2 overflow-x-auto pb-2"
              role="group"
              aria-label="Filter prompts by category"
            >
              <Button
                type="button"
                variant={activeCategory === null ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(null)}
                aria-pressed={activeCategory === null}
              >
                All
              </Button>

              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <Button
                    key={category.id}
                    type="button"
                    variant={isActive ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={isActive}
                  >
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active filter */}
        <div className="mt-8 flex min-h-6 items-center gap-2">
          {activeCategory && (
            <>
              <span className="text-sm text-[var(--color-text-muted)]">
                Showing:
              </span>

              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                {categories.find((category) => category.id === activeCategory)
                  ?.name ?? "Selected category"}
              </span>
            </>
          )}
        </div>

        {/* Prompt grid */}
        <section aria-labelledby="prompt-results-heading" className="mt-5">
          <h2 id="prompt-results-heading" className="sr-only">
            Prompt results
          </h2>

          <PromptGrid prompts={filteredPrompts} />
        </section>
      </main>
    </PageContainer>
  );
}
