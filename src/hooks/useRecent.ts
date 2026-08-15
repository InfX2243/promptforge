import { useCallback, useState } from "react";

import { getStorageItem, setStorageItem } from "../lib/storage";

const RECENT_STORAGE_KEY = "promptforge:recent";
const MAX_RECENT_PROMPTS = 10;

function loadRecentIds(): string[] {
  const { value: stored } = getStorageItem<string[]>(RECENT_STORAGE_KEY, []);

  if (!Array.isArray(stored)) {
    return [];
  }

  return stored
    .filter((id): id is string => typeof id === "string")
    .slice(0, MAX_RECENT_PROMPTS);
}

export function useRecent() {
  const [recentIds, setRecentIds] = useState<string[]>(loadRecentIds);

  const addRecent = useCallback((promptId: string) => {
    const normalizedId = promptId.trim();

    if (!normalizedId) {
      return;
    }

    setRecentIds((currentIds) => {
      const updatedIds = [
        normalizedId,
        ...currentIds.filter((id) => id !== normalizedId),
      ].slice(0, MAX_RECENT_PROMPTS);

      setStorageItem(RECENT_STORAGE_KEY, updatedIds);

      return updatedIds;
    });
  }, []);

  return {
    recentIds,
    addRecent,
  };
}
