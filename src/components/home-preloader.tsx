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

  const shouldShow = !shownInSession || navigation?.type === "reload";
  if (shouldShow) preloaderShownInDocument = true;
  return shouldShow;
}

export function HomePreloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (!shouldShowPreloader() || reduce) {
      setDone(true);
      setReady(true);
      return;
    }

    try {
      window.sessionStorage.setItem(PRELOADER_SESSION_KEY, "1");
    } catch {
      // The document-level guard still prevents repeated playback.
    }

    setReady(true);
  }, [reduce]);

  useEffect(() => {
    if (!ready || done || count >= 100) return;
    const id = window.setTimeout(
      () => setCount((value) => Math.min(100, value + 2)),
      22,
    );
    return () => window.clearTimeout(id);
  }, [count, done, ready]);

  useEffect(() => {
    if (!ready || done || count < 100) return;
    const id = window.setTimeout(() => setDone(true), 650);
    return () => window.clearTimeout(id);
  }, [count, done, ready]);

  if (!ready || (reduce && done)) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex text-primary-foreground"
          exit={{ pointerEvents: "none" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-ink"
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-ink"
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="relative z-10 m-auto text-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {count < 100 ? (
              <p
                className="font-display text-6xl tabular-nums md:text-8xl"
                aria-live="polite"
              >
                {count}
                <span className="text-2xl">%</span>
              </p>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-5 font-display text-3xl md:text-5xl"
              >
                <span>The Tailor Lady</span>
                <span className="h-16 w-px bg-accent" aria-hidden="true" />
                <span className="text-lg font-sans uppercase tracking-[.2em]">
                  Tailors
                </span>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}