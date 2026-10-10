import { createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/studio/site-frame";
import { HeroVideo } from "@/components/studio/hero-video";
import { WorkCarousel } from "@/components/studio/work-carousel";
import { AboutUs } from "@/components/studio/about-us";
import { Contact } from "@/components/studio/contact";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Awake Animation — Independent Animation Studio" },
    { name: "description", content: "Explore the work of Awake Animation, an independent animation studio." },
    { property: "og:title", content: "Awake Animation — Independent Animation Studio" },
    { property: "og:description", content: "Explore the work of Awake Animation, an independent animation studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <SiteFrame home><HeroVideo /><WorkCarousel /><AboutUs /><Contact /></SiteFrame>;
}
