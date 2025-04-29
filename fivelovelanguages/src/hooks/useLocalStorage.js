import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  // Update local storage if the key changes
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Only update state if local storage value is different from current state
      const parsedItem = item ? JSON.parse(item) : initialValue;

      // Using JSON.stringify for deep comparison
      if (JSON.stringify(parsedItem) !== JSON.stringify(storedValue)) {
        setStoredValue(parsedItem);
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]); // Only re-run if key changes, not initialValue or storedValue

  return [storedValue, setValue];
};

export default useLocalStorage;