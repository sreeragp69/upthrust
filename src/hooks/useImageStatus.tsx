// hooks/useImageStatus.ts
import { useState, useCallback } from "react";

export const useImageStatus = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => setError(true), []);

  return {
    loaded,
    error,
    handleLoad,
    handleError,
  };
};
export default useImageStatus;