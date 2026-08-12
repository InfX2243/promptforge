import { Menu, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IconButton } from "../common/IconButton";
import { PageContainer } from "./PageContainer";

export interface HeaderProps {
  onSearchOpen?: () => void;
}

const navigationItems = [
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
];

export function Header({ onSearchOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const firstLink =
      mobileMenuRef.current?.querySelector<HTMLElement>("a[href]");

    firstLink?.focus();
  }, [mobileMenuOpen]);

  function handleSearchRequest() {
    setMobileMenuOpen(false);
    onSearchOpen?.();
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-[var(--color-border-subtle)] bg-[color-mix(in_srgb,var(--color-background)_92%,transparent)] backdrop-blur-md">
      <PageContainer>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="shrink-0 text-lg font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors duration-150 hover:text-[var(--color-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            aria-label="PromptForge home"
          >
            PromptForge
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-[var(--radius-md)] px-3 py-2 text-[var(--font-size-sm)] font-medium transition-colors duration-150",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
                    isActive
                      ? "bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop search trigger */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={handleSearchRequest}
              className="inline-flex min-w-32 items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[var(--font-size-sm)] text-[var(--color-text-muted)] transition-colors duration-150 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-secondary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              aria-label="Open search"
            >
              <span className="flex items-center gap-2">
                <Search size={16} aria-hidden="true" />
                <span>Search</span>
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <IconButton
              icon={<Search size={18} aria-hidden="true" />}
              label="Open search"
              onClick={handleSearchRequest}
            />

            <IconButton
              icon={
                mobileMenuOpen ? (
                  <X size={18} aria-hidden="true" />
                ) : (
                  <Menu size={18} aria-hidden="true" />
                )
              }
              label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((open) => !open)}
            />
          </div>
        </div>

        <div
          className={[
            "grid transition-[grid-template-rows,opacity] duration-200 ease-out md:hidden",
            "motion-reduce:transition-none motion-reduce:duration-0",
            mobileMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none",
          ].join(" ")}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              ref={mobileMenuRef}
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="border-t border-[var(--color-border-subtle)] py-3"
            >
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    className={({ isActive }) =>
                      [
                        "rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
                        "motion-reduce:transition-none",
                        isActive
                          ? "bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
