import { useCallback, useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 6000;

export function useJourney(slideCount) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [playing, setPlaying] = useState(true);
  const dragX = useRef(null);
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const goTo = useCallback(
    (n, direction, pause) => {
      const total = slideCount;
      setIndex(((n % total) + total) % total);
      setDir(direction);
      if (pause) setPlaying(false);
    },
    [slideCount],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (playingRef.current) {
        setIndex((i) => {
          setDir(1);
          return (i + 1) % slideCount;
        });
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [slideCount]);

  const next = useCallback(() => goTo(index + 1, 1, true), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1, true), [goTo, index]);
  const toggle = useCallback(() => setPlaying((p) => !p), []);
  const goToDot = useCallback((i) => goTo(i, i > index ? 1 : -1, true), [goTo, index]);

  const onPointerDown = useCallback((e) => {
    dragX.current = e.clientX;
  }, []);

  const onPointerUp = useCallback(
    (e) => {
      if (dragX.current == null) return;
      const delta = e.clientX - dragX.current;
      dragX.current = null;
      if (Math.abs(delta) < 45) return;
      goTo(index + (delta < 0 ? 1 : -1), delta < 0 ? 1 : -1, true);
    },
    [goTo, index],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const forward = e.key === 'ArrowLeft';
      goTo(index + (forward ? 1 : -1), forward ? 1 : -1, true);
    },
    [goTo, index],
  );

  return { index, dir, playing, next, prev, toggle, goToDot, onPointerDown, onPointerUp, onKeyDown };
}
