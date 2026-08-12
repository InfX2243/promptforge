import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { SearchOverlay } from "../components/search/SearchOverlay";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function AppLayout() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleShortcut);

    return () => {
      document.removeEventListener("keydown", handleShortcut);
    };
  }, []);
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)]">
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <Header onSearchOpen={() => setSearchOpen(true)} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
