import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";

const Lottie = lazy(() => import("lottie-react").then((module) => ({ default: module.Lottie })));

/** Defer Lottie loading until the browser is idle so it never competes with the LCP. */
function onIdle(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const w = window as Window & { requestIdleCallback?: (cb: () => void) => number; cancelIdleCallback?: (id: number) => void };
  if (w.requestIdleCallback) {
    const id = w.requestIdleCallback(callback);
    return () => w.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(callback, 1500);
  return () => window.clearTimeout(id);
}

export function AnimatedAsset({ image, lottie, alt, fallback }: { image: string; lottie: string; alt: string; fallback: ReactNode }) {
  const [data, setData] = useState<object | null>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (!lottie || reduced || saveData) return;
    const controller = new AbortController();
    const cancelIdle = onIdle(() => {
      fetch(lottie, { signal: controller.signal }).then((response) => {
        if (!response.ok) throw new Error("Animation unavailable");
        return response.json();
      }).then(setData).catch(() => setData(null));
    });
    return () => {
      cancelIdle();
      controller.abort();
    };
  }, [lottie, reduced]);
  if (data) return <span role="img" aria-label={alt}><Suspense fallback={fallback}><Lottie key={String(reduced)} src={data} className="lottie-asset" loop={!reduced} autoplay={!reduced} /></Suspense></span>;
  if (image) return <img src={image} alt={alt} className="animated-image" />;
  return <>{fallback}</>;
}
