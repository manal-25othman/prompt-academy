import { useEffect, useState } from 'react';

// Scroll-spy: tracks which observed section is most visible, using the same
// thresholds/rootMargin as the prototype so the active nav item feels identical.
export function useActiveSection(ids, initial) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const seen = {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          seen[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });
        let best = null;
        let bestValue = 0;
        Object.keys(seen).forEach((id) => {
          if (seen[id] > bestValue) {
            bestValue = seen[id];
            best = id;
          }
        });
        if (best) setActive(best);
      },
      { threshold: [0, 0.15, 0.4, 0.75], rootMargin: '-70px 0px -45% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
