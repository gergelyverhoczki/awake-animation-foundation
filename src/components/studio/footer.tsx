import { ArrowUp } from "lucide-react";
import { AnimatedAsset } from "./animated-asset";
import { studioAssets, studioContact } from "@/lib/studio";
import { scrollToTop } from "@/lib/scroll";

export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="footer-animation">
        <AnimatedAsset
          {...studioAssets.footer}
          alt="Awake Animation looping animation"
          fallback={
            <span className="footer-star" aria-hidden="true">
              ✳
            </span>
          }
        />
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AWAKE ANIMATION</span>
        <div className="social-links">
          {studioContact.socials.map((social) => (
            <a href={social.url} key={social.url} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
        </div>
        <button type="button" className="back-top" aria-label="Back to top" onClick={scrollToTop}>
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
