// Replace empty references with uploaded asset URLs. Layouts consume this single source.
export const studioAssets = {
  logo: { image: "", lottie: "" },
  hero: { video: "", poster: "" },
  footer: { image: "", lottie: "" },
  backgroundTexture: "",
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