import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { PageContainer } from "../components/layout/PageContainer";
import { Button } from "../components/common/Button";
import { PromptGrid } from "../components/prompts/PromptGrid";

import { prompts } from "../data/prompts/prompts";
import { searchPrompts } from "../lib/prompts/promptUtils";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";

  const results = useMemo(() => {
    if (!query) {
      return [];
    }

    return searchPrompts(prompts, query);
  }, [query]);

  const handleClear = () => {
    setSearchParams({});
  };

  const hasQuery = query.length > 0;

  return (
    <PageContainer>
      <main className="py-8 sm:py-10 lg:py-12">
        {/* Header */}
        <header>
          <p className="text-sm font-medium text-[var(--color-accent)]">
            Search
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            {hasQuery ? `Search results for "${query}"` : "Search prompts"}
          </h1>

          {hasQuery && (
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {results.length} {results.length === 1 ? "prompt" : "prompts"}{" "}
              found
            </p>
          )}
        </header>

        {/* No query */}
        {!hasQuery && (
          <section className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 text-center">
            <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
              Start searching
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
              Search by prompt title, tags, category, or description.
            </p>

            <Link to="/explore">
              <Button type="button" variant="secondary" className="mt-6">
                Explore prompts
              </Button>
            </Link>
          </section>
        )}

        {/* Results */}
        {hasQuery && (
          <section aria-labelledby="search-results-heading" className="mt-8">
            <div className="flex items-center justify-between gap-4">
              <h2 id="search-results-heading" className="sr-only">
                Search results
              </h2>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClear}
              >
                Clear search
              </Button>
            </div>

            <div className="mt-4">
              <PromptGrid prompts={results} />
            </div>
          </section>
        )}
      </main>
    </PageContainer>
  );
}
