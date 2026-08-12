import { Link } from "react-router-dom";

import { Search } from "lucide-react";

import { Button } from "../components/common/Button";
import { PromptGrid } from "../components/prompts/PromptGrid";
import { PageContainer } from "../components/layout/PageContainer";

import { prompts } from "../data/prompts/prompts";

export default function HomePage() {
  const curatedPrompts = prompts.slice(0, 6);

  return (
    <PageContainer>
      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium tracking-wide text-[var(--color-accent)]">
              PromptForge
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
              Find the right prompt.
              <br />
              Get more done with AI.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              Discover practical, reusable prompts for communication, content,
              technical work, planning, productivity, and more.
            </p>

            {/* Dominant search entry */}
            <Link
              to="/search"
              className="
                mx-auto
                mt-10
                flex
                max-w-2xl
                items-center
                justify-between
                gap-4
                rounded-[var(--radius-lg)]
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-5
                py-4
                text-left
                shadow-[var(--shadow-md)]
                transition
                duration-[var(--transition-fast)]
                hover:border-[var(--color-accent)]
                hover:bg-[var(--color-surface-elevated)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--color-accent)]
              "
            >
              <span className="flex items-center gap-3">
                <Search
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--color-text-muted)]"
                />

                <span className="text-sm text-[var(--color-text-muted)] sm:text-base">
                  Search prompts, tasks, or ideas...
                </span>
              </span>

              <span className="hidden text-xs text-[var(--color-text-muted)] sm:block">
                Explore
              </span>
            </Link>

            {/* Explore CTA */}
            <div className="mt-6">
              <Link to="/explore">
                <Button size="lg">Explore prompts</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Curated discovery */}
        <section
          aria-labelledby="curated-prompts-heading"
          className="pb-16 sm:pb-20 lg:pb-24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--color-accent)]">
                Curated discovery
              </p>

              <h2
                id="curated-prompts-heading"
                className="mt-1 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]"
              >
                Start with something useful
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)]">
                A small selection of prompts to help you get started.
              </p>
            </div>

            <Link
              to="/explore"
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              View all prompts →
            </Link>
          </div>

          <div className="mt-8">
            <PromptGrid prompts={curatedPrompts} />
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
