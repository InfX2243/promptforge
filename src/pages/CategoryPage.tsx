import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "../components/layout/PageContainer";
import { PromptGrid } from "../components/prompts/PromptGrid";

import { categories } from "../data/prompts/categories";
import { getPromptsByCategory } from "../lib/prompts/promptUtils";
import { InvalidCategoryState } from "../components/common/InvalidCategoryState";

export default function CategoryPage() {
  const { categoryId } = useParams<{
    categoryId: string;
  }>();

  const isAllCategory = categoryId === "all";

  /*
   * /category/all is the category directory.
   * It should display all available categories rather than all prompts.
   */
  if (isAllCategory) {
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

              <li className="text-[var(--color-text-primary)]">Categories</li>
            </ol>
          </nav>

          {/* Category directory header */}
          <header className="max-w-3xl">
            <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]">
              Categories
            </span>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Explore Categories
            </h1>

            <p className="mt-3 text-base leading-7 text-[var(--color-text-secondary)]">
              Browse prompt templates by category and find the right prompts for
              your work.
            </p>
          </header>

          {/* Category collection */}
          <section aria-labelledby="categories-heading" className="mt-10">
            <div className="mb-6">
              <h2
                id="categories-heading"
                className="text-xl font-semibold text-[var(--color-text-primary)]"
              >
                All Categories
              </h2>

              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {categories.length} categories available.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-text-muted)] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                        {category.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {category.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]"
                    >
                      <ArrowRight size={15} strokeWidth={1.8} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </PageContainer>
    );
  }

  /*
   * /category/:categoryId displays prompts belonging
   * to a specific category.
   */
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

            <li>
              <Link
                to="/category/all"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                Categories
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
