import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./AppLayout.tsx";

import CategoryPage from "../pages/CategoryPage.tsx";
import ExplorePage from "../pages/ExplorePage.tsx";
import FavoritesPage from "../pages/FavoritesPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import HowItWorksPage from "../pages/HowItWorksPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import PromptPage from "../pages/PromptPage.tsx";
import RecentPage from "../pages/RecentPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: "/prompt/:promptId",
        element: <PromptPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/recent",
        element: <RecentPage />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorksPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
