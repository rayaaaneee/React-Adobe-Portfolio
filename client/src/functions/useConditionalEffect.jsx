import { useEffect, useRef } from "react";

// Executes an effect only on update, not on mount

export const useConditionalEffect = (effect, deps) => {
    const isMounted = useRef(false);
    useEffect(() => {
      if (isMounted.current) {
        return effect();
      } else {
        isMounted.current = true;
      }
    }, deps);
  }