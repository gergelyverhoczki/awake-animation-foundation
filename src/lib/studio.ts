import showreel from "@/assets/showreel.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.webp.asset.json";
import ogImage from "@/assets/og-image.jpg.asset.json";
import headerLogo from "@/assets/header-logo.json.asset.json";
import mimicryLogo from "@/assets/mimicry-logo.png.asset.json";
import backgroundTexture from "@/assets/background-texture.png.asset.json";
import mimicryBgVideo from "@/assets/mimicry-bg-video.mp4.asset.json";
import project01 from "@/assets/project-01.png.asset.json";
import project02 from "@/assets/project-02.png.asset.json";
import project03 from "@/assets/project-03.png.asset.json";
import project04 from "@/assets/project-04.png.asset.json";
import project05 from "@/assets/project-05.png.asset.json";
import project06 from "@/assets/project-06.png.asset.json";
// Replace empty references with uploaded asset URLs. Layouts consume this single source.
export const studioAssets = {
  logo: { image: "", lottie: headerLogo.url },
  hero: { video: showreel.url, poster: heroPoster.url },
  shareImage: ogImage.url,
  footer: { image: "", lottie: "" },
  backgroundTexture: backgroundTexture.url,
};

export const studioContact = { email: "", socials: [] as { label: string; url: string }[] };

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  /** Optional responsive variants, e.g. 800w/1600w WebP, once compressed uploads exist. */
  thumbnailSrcSet?: string;
  video?: string;
  image?: string;
  description?: string;
  credits?: { role: string; name: string }[];
  media?: { type: "image" | "video"; src: string; alt: string }[];
  placeholder?: boolean;
};

const projectPictures = [
  {
    thumbnail: project01.url,
    width: 1248,
    height: 813,
    alt: "Animated musician playing a guitar with a rose in his mouth",
  },
  {
    thumbnail: project02.url,
    width: 592,
    height: 666,
    alt: "Birch trees and a small house in a textured collage",
  },
  {
    thumbnail: project03.url,
    width: 1195,
    height: 880,
    alt: "A portrait assembled from torn photographic fragments",
  },
  {
    thumbnail: project04.url,
    width: 1765,
    height: 1060,
    alt: "Black-and-white musician with animated lettering",
  },
  {
    thumbnail: project05.url,
    width: 1754,
    height: 892,
    alt: "Small animated creatures surrounding a sculpture of found objects",
  },
  {
    thumbnail: project06.url,
    width: 1426,
    height: 1029,
    alt: "A branch drawing shapes in sand beside a green leaf",
  },
];

export const projects: Project[] = projectPictures.map((picture, index) => ({
  slug: `project-${String(index + 1).padStart(2, "0")}`,
  title: `Project ${String(index + 1).padStart(2, "0")}`,
  thumbnail: picture.thumbnail,
  thumbnailAlt: picture.alt,
  thumbnailWidth: picture.width,
  thumbnailHeight: picture.height,
  placeholder: true,
}));

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return index < 0 ? undefined : projects[(index + 1) % projects.length];
}
export const mimicryPartner = {
  name: "Mimicry Motions",
  logo: mimicryLogo.url,
  video: mimicryBgVideo.url,
  url: "https://mimicry.hu/en/brief-selection-from-our-animation-works/",
};
