import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";

const Lottie = lazy(() => import("lottie-react"));

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
    if (!lottie) return;
    const controller = new AbortController();
    fetch(lottie, { signal: controller.signal }).then((response) => {
      if (!response.ok) throw new Error("Animation unavailable");
      return response.json();
    }).then(setData).catch(() => setData(null));
    return () => controller.abort();
  }, [lottie]);
  if (data) return <span role="img" aria-label={alt}><Suspense fallback={fallback}><Lottie animationData={data} loop={!reduced} autoplay={!reduced} /></Suspense></span>;
  if (image) return <img src={image} alt={alt} className="animated-image" />;
  return <>{fallback}</>;
}