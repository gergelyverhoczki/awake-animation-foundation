import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/studio/site-frame";
import { HeroVideo } from "@/components/studio/hero-video";
import { WorkCarousel } from "@/components/studio/work-carousel";
import { AboutUs } from "@/components/studio/about-us";
import { Contact } from "@/components/studio/contact";
import { studioAssets, studioContact } from "@/lib/studio";

const title = "Awake Animation — Independent Animation Studio";
const description = "Explore the work of Awake Animation, an independent animation studio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: studioAssets.hero.poster, fetchpriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Awake Animation",
              description,
              ...(studioContact.socials.length > 0 ? { sameAs: studioContact.socials.map((social) => social.url) } : {}),
            },
            { "@type": "WebSite", name: "Awake Animation" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <SiteFrame home><HeroVideo /><WorkCarousel /><AboutUs /><Contact /></SiteFrame>;
}
