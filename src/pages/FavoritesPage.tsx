import { Link } from "react-router-dom";

import { Button } from "../components/common/Button";
import { PageContainer } from "../components/layout/PageContainer";
import { PromptGrid } from "../components/prompts/PromptGrid";

import { prompts } from "../data/prompts/prompts";
import { useFavorites } from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();

  const favoriteIdSet = new Set(favoriteIds);

  const favoritePrompts = prompts.filter((prompt) =>
    favoriteIdSet.has(prompt.id),
  );

  return (
    <PageContainer>
      <main className="py-8 lg:py-12">
        <header>
          <p className="text-sm font-medium text-[var(--color-accent)]">
            Your collection
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Favorites
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
            Prompts you've saved for quick access.
          </p>
        </header>

        <section className="mt-8">
          {favoritePrompts.length > 0 ? (
            <PromptGrid prompts={favoritePrompts} />
          ) : (
            <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 text-center">
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                No favorites yet
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
                Save prompts you use often and they'll appear here for quick
                access.
              </p>

              <Link to="/explore">
                <Button type="button" variant="primary" className="mt-6">
                  Explore prompts
                </Button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </PageContainer>
  );
}
