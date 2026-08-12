import { useCallback, useState } from "react";

import { getStorageItem, setStorageItem } from "../lib/storage";

const FAVORITES_STORAGE_KEY = "promptforge:favorites";

interface UseFavoritesResult {
  favoriteIds: string[];
  isFavorite: (promptId: string) => boolean;
  addFavorite: (promptId: string) => void;
  removeFavorite: (promptId: string) => void;
  toggleFavorite: (promptId: string) => void;
}

export function useFavorites(): UseFavoritesResult {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    const storedFavorites = getStorageItem<unknown>(FAVORITES_STORAGE_KEY, []);

    if (!Array.isArray(storedFavorites)) {
      return [];
    }

    return storedFavorites.filter((id): id is string => typeof id === "string");
  });

  const persistFavorites = useCallback((ids: string[]) => {
    setStorageItem(FAVORITES_STORAGE_KEY, ids);
  }, []);

  const isFavorite = useCallback(
    (promptId: string): boolean => {
      return favoriteIds.includes(promptId);
    },
    [favoriteIds],
  );

  const addFavorite = useCallback(
    (promptId: string) => {
      setFavoriteIds((currentIds) => {
        if (currentIds.includes(promptId)) {
          return currentIds;
        }

        const updatedIds = [...currentIds, promptId];

        persistFavorites(updatedIds);

        return updatedIds;
      });
    },
    [persistFavorites],
  );

  const removeFavorite = useCallback(
    (promptId: string) => {
      setFavoriteIds((currentIds) => {
        const updatedIds = currentIds.filter((id) => id !== promptId);

        if (updatedIds.length === currentIds.length) {
          return currentIds;
        }

        persistFavorites(updatedIds);

        return updatedIds;
      });
    },
    [persistFavorites],
  );

  const toggleFavorite = useCallback(
    (promptId: string) => {
      setFavoriteIds((currentIds) => {
        const isCurrentlyFavorite = currentIds.includes(promptId);

        const updatedIds = isCurrentlyFavorite
          ? currentIds.filter((id) => id !== promptId)
          : [...currentIds, promptId];

        persistFavorites(updatedIds);

        return updatedIds;
      });
    },
    [persistFavorites],
  );

  return {
    favoriteIds,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
}
