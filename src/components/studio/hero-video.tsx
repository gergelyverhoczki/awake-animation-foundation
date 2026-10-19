import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { studioAssets } from "@/lib/studio";

/** True when the user asks for reduced motion or data savings — show the poster, not the video. */
function shouldSkipVideo() {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData =
    (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ===
    true;
  return reduced || saveData;
}

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [skipVideo, setSkipVideo] = useState(false);
  useEffect(() => {
    setSkipVideo(shouldSkipVideo());
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
  const showVideo = Boolean(studioAssets.hero.video) && !failed && !skipVideo;
  const showPoster = !showVideo && Boolean(studioAssets.hero.poster);
  return (
    <section
      className={`hero-video ${showVideo || showPoster ? "has-video" : ""}`}
      aria-label="Awake Animation showreel"
    >
      {/* Exactly one h1 on the homepage, present whether the video, poster or fallback renders. */}
      <h1 className="visually-hidden">Awake Animation — independent animation studio</h1>
      {showVideo && (
        <video
          ref={video}
          src={studioAssets.hero.video}
          poster={studioAssets.hero.poster || undefined}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          tabIndex={-1}
          aria-hidden="true"
          onError={() => setFailed(true)}
        />
      )}
      {showPoster && (
        <img
          src={studioAssets.hero.poster}
          alt="Still frame from the Awake Animation showreel"
          className="hero-poster"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
      )}
      {!showVideo && !showPoster && (
        <div className="hero-fallback" aria-hidden="true">
          <div className="hero-eyebrow">
            <span className="status-dot" />
            AWAKE ANIMATION<span>INDEPENDENT ANIMATION STUDIO</span>
          </div>
          <div className="hero-wordmark">
            awake
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
            <span className="hero-subtitle">animation</span>
          </div>
          <div className="hero-bottom">
            <span>SHOWREEL — COMING SOON</span>
            <span className="hero-scroll">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
