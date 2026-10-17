import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/studio/site-frame";
import { mimicryPartner } from "@/lib/studio";

const title = "Mimicry — Awake Animation";
const description = "Awake Animation partners with Mimicry Motions on large-format animated visuals for LED walls.";

export const Route = createFileRoute("/mimicry")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MimicryPage,
});

function MimicryPage() {
  return <SiteFrame><section className="project-intro mimicry-page">
    <span className="section-number">PARTNER</span>
    <h1>Mimicry<span className="heading-period">.</span></h1>
    <a href={mimicryPartner.url} target="_blank" rel="noopener noreferrer" className="mimicry-logo-link" aria-label={`Visit ${mimicryPartner.name} (opens in a new tab)`}>
      <img src={mimicryPartner.logo} alt={`${mimicryPartner.name} logo`} width={500} height={288} />
    </a>
    <p className="mimicry-copy">When a project calls for big-format visuals on LED walls, we team up with {mimicryPartner.name}. Together we create animation built for large screens, stages and immersive spaces.</p>
  </section></SiteFrame>;
}
