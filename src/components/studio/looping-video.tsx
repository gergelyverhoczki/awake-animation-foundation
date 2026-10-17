import { useEffect, useRef, useState } from "react";

type LoopingVideoProps = {
  src: string;
  label: string;
  poster?: string;
  className?: string;
};

/** Muted, soundless, endlessly looping background video. Not interactive: no controls, no click target. */
export function LoopingVideo({ src, label, poster, className }: LoopingVideoProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (preference.matches) element.pause();
      else element.play().catch(() => setFailed(true));
    };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  if (!src || failed) return <div className={`looping-video-fallback ${className ?? ""}`} role="img" aria-label={label} />;
  return (
    <video
      ref={video}
      src={src}
      poster={poster || undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      controls={false}
      disablePictureInPicture
      tabIndex={-1}
      aria-label={label}
      className={`looping-video ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}
