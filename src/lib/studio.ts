import showreel from "@/assets/showreel.mp4.asset.json";
import headerLogo from "@/assets/header-logo.json.asset.json";
import backgroundTexture from "@/assets/background-texture.png.asset.json";
// Replace empty references with uploaded asset URLs. Layouts consume this single source.
export const studioAssets = {
  logo: { image: "", lottie: headerLogo.url },
  hero: { video: showreel.url, poster: "" },
  footer: { image: "", lottie: "" },
  backgroundTexture: backgroundTexture.url,
};

export const studioContact = { email: "", socials: [] as { label: string; url: string }[] };

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  thumbnailAlt: string;
  video?: string;
  image?: string;
  description?: string;
  credits?: { role: string; name: string }[];
  media?: { type: "image" | "video"; src: string; alt: string }[];
  placeholder?: boolean;
};

export const projects: Project[] = Array.from({ length: 5 }, (_, index) => ({
  slug: `project-${String(index + 1).padStart(2, "0")}`,
  title: `Project ${String(index + 1).padStart(2, "0")}`,
  thumbnail: "",
  thumbnailAlt: `Placeholder artwork for project ${index + 1}`,
  placeholder: true,
}));

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function nextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return index < 0 ? undefined : projects[(index + 1) % projects.length];
}