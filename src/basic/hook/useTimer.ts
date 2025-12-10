import { useEffect, useRef } from "react";

interface UseTimerProps {
  id: number;
  duration?: number;
  onTimeout?: (id: number) => void;
}

export const useTimer = (props: UseTimerProps) => {
  const { id, duration = 2000, onTimeout } = props;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    start();

    return () => end();
  });

  const start = () => {
    timer.current = setTimeout(() => onTimeout(id), duration);
  };

  const end = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  return {
    start,
    end,
  };
};
