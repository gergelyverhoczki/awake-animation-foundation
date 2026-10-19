import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { studioAssets } from "@/lib/studio";

export function SiteFrame({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return (
    <div id="top" className="studio-site">
      {studioAssets.backgroundTexture && (
        <div
          className="global-texture"
          aria-hidden="true"
          style={{ backgroundImage: `url("${studioAssets.backgroundTexture}")` }}
        />
      )}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header home={home} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
