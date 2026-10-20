import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/studio/site-frame";
import { HeroVideo } from "@/components/studio/hero-video";
import { WorkCarousel } from "@/components/studio/work-carousel";
import { AboutUs } from "@/components/studio/about-us";
import { Contact } from "@/components/studio/contact";
import { SITE_URL, siteUrl, studioAssets, studioContact } from "@/lib/studio";

const title = "Awake Animation — Independent Animation Studio";
const description = "Explore the work of Awake Animation, an independent animation studio.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: siteUrl("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: siteUrl(studioAssets.shareImage) },
      { name: "twitter:image", content: siteUrl(studioAssets.shareImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "A frame from the Awake Animation showreel" },
    ],
    links: [
      { rel: "canonical", href: siteUrl("/") },
      { rel: "preload", as: "image", href: studioAssets.hero.poster, fetchPriority: "high" },
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
              url: SITE_URL,
              logo: siteUrl(studioAssets.brandIcon),
              description,
              ...(studioContact.socials.length > 0
                ? { sameAs: studioContact.socials.map((social) => social.url) }
                : {}),
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
  return (
    <SiteFrame home>
      <HeroVideo />
      <WorkCarousel />
      <AboutUs />
      <Contact />
    </SiteFrame>
  );
}
