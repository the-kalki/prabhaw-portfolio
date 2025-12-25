import { useState, useEffect } from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Adding a timeout ensures it runs after the initial paint
    // and avoids the synchronous set-state-in-effect warning
    const timeout = setTimeout(() => {
      setHasMounted(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return hasMounted;
}
