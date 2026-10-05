import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRELOADER_SESSION_KEY = "ttl-home-preloader-shown";
let preloaderShownInDocument = false;

function shouldShowPreloader() {
  if (typeof window === "undefined") return false;
  if (preloaderShownInDocument) return false;

  const navigation = window.performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming | undefined;
  let shownInSession = false;

  try {
    shownInSession = window.sessionStorage.getItem(PRELOADER_SESSION_KEY) === "1";
  } catch {
    return false;
  }

  return !shownInSession || navigation?.type === "reload";
}

export function HomePreloader() {
  const [shouldShow] = useState(shouldShowPreloader);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!shouldShow || reduce) {
      setDone(true);
      return;
    }

    preloaderShownInDocument = true;
    try {
      window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    } catch {
      // The document-level guard still prevents repeated playback.
    }

  }, [reduce, shouldShow]);

  useEffect(() => {
    if (!shouldShow || done || reduce) return;

    const startedAt = performance.now();
    const heroImage = document.querySelector<HTMLImageElement>("main img");
    let loadListener: (() => void) | undefined;
    let hideTimeout: number | undefined;
    let cancelled = false;

    const pageLoad = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          loadListener = resolve;
          window.addEventListener("load", resolve, { once: true });
        });
    const heroReady = heroImage
      ? heroImage.decode().then(() => undefined).catch(() => undefined)
      : Promise.resolve();

    void Promise.all([pageLoad, document.fonts.ready, heroReady]).then(() => {
      const remainingTime = Math.max(0, 1600 - (performance.now() - startedAt));
      hideTimeout = window.setTimeout(() => {
        if (!cancelled) setDone(true);
      }, remainingTime);
    });

    return () => {
      cancelled = true;
      if (loadListener) window.removeEventListener("load", loadListener);
      if (hideTimeout !== undefined) window.clearTimeout(hideTimeout);
    };
  }, [done, reduce, shouldShow]);

  if (!shouldShow || (reduce && done)) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background text-foreground"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Previous loader markup:
          <div className="w-48 text-center">
            <p className="font-display text-3xl">The Tailor Lady</p>
            <div className="mt-6 h-px w-full bg-border" role="progressbar" aria-label="Loading page">
              <motion.div
                className="h-px origin-left bg-foreground"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
          */}
          <div className="w-48 text-center md:w-64">
            <p className="whitespace-nowrap font-sans text-sm font-semibold uppercase leading-none tracking-[.18em] md:text-base md:tracking-[.2em]">The Tailor Lady</p>
            <div className="mx-auto mt-7 size-7" role="progressbar" aria-label="Loading page">
              <motion.div
                className="size-full rounded-full border border-border border-t-foreground"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}