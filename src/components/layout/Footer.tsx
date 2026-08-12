import { Link } from "react-router-dom";

import { PageContainer } from "./PageContainer";

const footerNavigation = [
  {
    label: "Explore",
    to: "/explore",
  },
  {
    label: "Categories",
    to: "/category/all",
  },
  {
    label: "Favorites",
    to: "/favorites",
  },
  {
    label: "Recent",
    to: "/recent",
  },
  {
    label: "How it works",
    to: "/how-it-works",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]">
      <PageContainer>
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-start md:justify-between">
          {/* Identity */}
          <div className="max-w-md">
            <Link
              to="/"
              className="text-base font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors duration-150 hover:text-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              PromptForge
            </Link>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
              A prompt discovery and exploration platform built for the AWS
              Student Builder Group community.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {footerNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[var(--color-border-subtle)] py-5">
          <div className="flex flex-col gap-2 text-xs leading-5 text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} PromptForge · AWS Student Builder
              Group
            </p>

            <p>
              PromptForge is an independent community project and is not an
              official AWS product or service.
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
