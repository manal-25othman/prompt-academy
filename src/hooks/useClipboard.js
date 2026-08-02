import { useCallback, useRef, useState } from 'react';

function legacyCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

// Mirrors the prototype's copy(): try the async Clipboard API, fall back to
// execCommand for sandboxed/insecure contexts, and surface a timed "copied" flag.
export function useClipboard() {
  const [copiedKey, setCopiedKey] = useState('');
  const timerRef = useRef(null);

  const copy = useCallback((text, key) => {
    const flag = (ok) => {
      const next = ok ? key : `fail:${key}`;
      setCopiedKey(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCopiedKey((cur) => (cur === next ? '' : cur));
      }, 2200);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => flag(true),
        () => flag(legacyCopy(text)),
      );
    } else {
      flag(legacyCopy(text));
    }
  }, []);

  return { copiedKey, copy };
}
