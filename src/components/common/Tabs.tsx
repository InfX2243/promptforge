import type { KeyboardEvent, ReactNode } from "react";
import { useId, useState } from "react";

export interface Tab {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTab, className = "" }: TabsProps) {
  const generatedId = useId();

  const initialTab =
    defaultTab && tabs.some((tab) => tab.id === defaultTab)
      ? defaultTab
      : tabs.find((tab) => !tab.disabled)?.id;

  const [activeTab, setActiveTab] = useState(initialTab);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    const enabledTabs = tabs.filter((tab) => !tab.disabled);

    if (enabledTabs.length === 0) {
      return;
    }

    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % enabledTabs.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex =
          (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = enabledTabs.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextTab = enabledTabs[nextIndex];

    setActiveTab(nextTab.id);

    document.getElementById(`${generatedId}-tab-${nextTab.id}`)?.focus();
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex gap-1 border-b border-[var(--color-border)]"
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              id={`${generatedId}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${generatedId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(event) =>
                handleKeyDown(
                  event,
                  tabs
                    .filter((item) => !item.disabled)
                    .findIndex((item) => item.id === tab.id),
                )
              }
              className={[
                "relative px-3 py-2 text-[var(--font-size-sm)] font-medium",
                "transition-colors duration-150",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
                "disabled:cursor-not-allowed disabled:opacity-40",
                selected
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]",
              ].join(" ")}
            >
              {tab.label}

              {selected && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-[var(--color-accent)]"
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`${generatedId}-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`${generatedId}-tab-${activeTab}`}
        tabIndex={0}
        className="pt-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      >
        {activeContent}
      </div>
    </div>
  );
}
