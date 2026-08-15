const isLocalStorageAvailable = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const storage = window.localStorage;

    const testKey = "__promptforge_storage_test__";

    storage.setItem(testKey, "test");
    storage.removeItem(testKey);

    return true;
  } catch {
    return false;
  }
};

interface StorageResult<T> {
  value: T;
  error: boolean;
}

export function getStorageItem<T>(key: string, fallback: T): StorageResult<T> {
  if (!isLocalStorageAvailable()) {
    return {
      value: fallback,
      error: true,
    };
  }

  try {
    const rawValue = window.localStorage.getItem(key);

    if (rawValue === null) {
      return {
        value: fallback,
        error: false,
      };
    }

    return {
      value: JSON.parse(rawValue) as T,
      error: false,
    };
  } catch {
    return {
      value: fallback,
      error: true,
    };
  }
}

export function setStorageItem<T>(key: string, value: T): boolean {
  if (!isLocalStorageAvailable()) {
    return false;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch {
    return false;
  }
}

export function removeStorageItem(key: string): boolean {
  if (!isLocalStorageAvailable()) {
    return false;
  }

  try {
    window.localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
}
