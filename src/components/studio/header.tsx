import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedAsset } from "./animated-asset";
import { studioAssets } from "@/lib/studio";
import { scrollToTop } from "@/lib/scroll";

const navigation = [{ label: "Work", hash: "work" }, { label: "About Us", hash: "about" }, { label: "Contact", hash: "contact" }];

export function Header({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className="studio-header">
    <div className="header-inner">
      <Link to="/" hash="top" className="studio-logo" aria-label="Awake Animation — home" onClick={(event) => { setOpen(false); if (home) { event.preventDefault(); scrollToTop(); } }}>
        <AnimatedAsset {...studioAssets.logo} alt="Awake Animation" fallback={<span className="logo-type">awake<span className="logo-star" aria-hidden="true">✳</span><small>ANIMATION</small></span>} />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(({ label, hash }) => home
          ? <a key={hash} href={`#${hash}`}>{label}{hash === "contact" && <ArrowUpRight size={14} />}</a>
          : <Link key={hash} to="/" hash={hash}>{label}{hash === "contact" && <ArrowUpRight size={14} />}</Link>)}
      </nav>
      <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
      {navigation.map(({ label, hash }) => home ? <a key={hash} href={`#${hash}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></a> : <Link key={hash} to="/" hash={hash} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></Link>)}
    </nav>}
  </header>;
}