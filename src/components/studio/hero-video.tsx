import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { studioAssets } from "@/lib/studio";

export function HeroVideo() {
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
  const showVideo = Boolean(studioAssets.hero.video) && !failed;
  return <section className={`hero-video ${showVideo ? "has-video" : ""}`} aria-label="Awake Animation showreel">
    {showVideo && <video ref={video} src={studioAssets.hero.video} poster={studioAssets.hero.poster || undefined} autoPlay loop muted playsInline controls={false} disablePictureInPicture tabIndex={-1} aria-hidden="true" onError={() => setFailed(true)} />}
    {!showVideo && <div className="hero-fallback">
      <div className="hero-eyebrow"><span className="status-dot" />AWAKE ANIMATION<span>INDEPENDENT ANIMATION STUDIO</span></div>
      <h1>awake<span className="hero-asterisk" aria-hidden="true">✳</span><span className="hero-subtitle">animation</span></h1>
      <div className="hero-bottom"><span>SHOWREEL — COMING SOON</span><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={14} /></span></div>
    </div>}
  </section>;
}