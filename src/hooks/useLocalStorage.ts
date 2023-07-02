import { useState, useEffect, useLayoutEffect, useRef } from "react";

const useLocalStorage = <T>(
  key: string | null,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, boolean] => {
  const loaded = useRef(false);
  const [value, setValue] = useState<T>(defaultValue);

  useLayoutEffect(() => {
    if (!key || typeof window === "undefined") return;

    try {
      const value = window.localStorage.getItem(key);
      loaded.current = true;
      setValue(value ? JSON.parse(value) : defaultValue);
    } catch (error) {
      setValue(defaultValue);
    }
  }, [key, defaultValue]);

  useEffect(() => {
    if (!key) return;
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue, loaded.current];
};

export default useLocalStorage;
