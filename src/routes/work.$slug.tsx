import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFrame } from "@/components/studio/site-frame";
import { ProjectArtwork } from "@/components/studio/project-artwork";
import { findProject, nextProject, projects } from "@/lib/studio";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return { project, next: nextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.project.title} — Awake Animation` : "Project not found — Awake Animation";
    const description = loaderData?.project.description || "A project from the Awake Animation portfolio. Project details coming soon.";
    const path = `/work/${loaderData?.project.slug ?? ""}`;
    return {
      meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: path }, ...(!loaderData || loaderData.project.placeholder ? [{ name: "robots", content: "noindex, follow" }] : [])],
      links: [{ rel: "canonical", href: path }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectNotFound() {
  return <SiteFrame><section className="project-intro"><span className="section-number">PORTFOLIO</span><h1>Project not found.</h1><Link to="/" hash="work" className="return-link"><ArrowLeft size={16} />Back to work</Link></section></SiteFrame>;
}

function ProjectPage() {
  const { project, next } = Route.useLoaderData();
  return <SiteFrame><article className="project-page">
    <div className="project-intro"><Link to="/" hash="work" className="return-link"><ArrowLeft size={16} />Back to work</Link><div className="project-title-row"><h1>{project.title}<span className="heading-period">.</span></h1><span className="section-number">{project.placeholder ? "TITLE TO BE ADDED" : "AWAKE ANIMATION"}</span></div></div>
    <div className="project-main-media">{project.video ? <video src={project.video} poster={project.image || project.thumbnail || undefined} controls playsInline preload="metadata" /> : project.image || project.thumbnail ? <img src={project.image || project.thumbnail} srcSet={project.thumbnailSrcSet} sizes="90vw" width={project.thumbnailWidth} height={project.thumbnailHeight} alt={project.thumbnailAlt} fetchPriority="high" decoding="async" /> : <ProjectArtwork index={projects.findIndex((p) => p.slug === project.slug)} alt={project.thumbnailAlt} />}</div>
    <div className="project-information">{project.description ? <p>{project.description}</p> : project.placeholder ? <p className="placeholder-copy">Project film, description, and credits coming soon.</p> : null}{project.credits && <dl className="project-credits">{project.credits.map((credit) => <div key={`${credit.role}-${credit.name}`}><dt>{credit.role}</dt><dd>{credit.name}</dd></div>)}</dl>}</div>
    {project.media?.map((media) => <div className="additional-media" key={media.src}>{media.type === "image" ? <img src={media.src} alt={media.alt} loading="lazy" /> : <video src={media.src} controls playsInline preload="none" aria-label={media.alt} />}</div>)}
    {next && <Link to="/work/$slug" params={{ slug: next.slug }} className="next-project"><div><span className="section-number">NEXT PROJECT</span><h2>{next.title}</h2></div><ArrowRight size={36} /></Link>}
  </article></SiteFrame>;
}