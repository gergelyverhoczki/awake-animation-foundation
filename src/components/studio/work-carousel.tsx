import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/studio";
import { ProjectArtwork } from "./project-artwork";

export function WorkCarousel() {
  const [ref, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", slidesToScroll: 1 });
  const [position, setPosition] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const update = useCallback(() => {
    if (!api) return;
    setPosition(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);
  useEffect(() => {
    if (!api) return;
    update();
    api.on("select", update).on("reInit", update);
    return () => { api.off("select", update).off("reInit", update); };
  }, [api, update]);
  return <section id="work" className="work-section section-anchor" aria-labelledby="work-heading">
    <div className="section-heading"><div><span className="section-number">01 / PORTFOLIO</span><h2 id="work-heading">Selected work<span className="heading-period">.</span></h2></div>
      <div className="carousel-controls"><span className="carousel-counter" aria-live="polite">{String(position + 1).padStart(2, "0")} <span>/ {String(projects.length).padStart(2, "0")}</span></span><Button variant="outline" size="icon" className="arrow-button" aria-label="Previous projects" title="Previous projects" disabled={!canPrev} onClick={() => api?.scrollPrev()}><ArrowLeft /></Button><Button variant="outline" size="icon" className="arrow-button" aria-label="Next projects" title="Next projects" disabled={!canNext} onClick={() => api?.scrollNext()}><ArrowRight /></Button></div>
    </div>
    <div className="carousel-viewport" ref={ref}><div className="carousel-track">
      {projects.map((project, index) => <Link key={project.slug} to="/work/$slug" params={{ slug: project.slug }} className="project-slide" aria-label={`View ${project.title}${project.placeholder ? " — placeholder" : ""}`}>
        {project.thumbnail ? <img src={project.thumbnail} alt={project.thumbnailAlt} loading="lazy" className="project-thumbnail" /> : <ProjectArtwork index={index} alt={project.thumbnailAlt} />}
        <div className="project-caption"><div><h3>{project.title}</h3><span>{project.placeholder ? "PROJECT PLACEHOLDER" : "VIEW PROJECT"}</span></div><ArrowUpRight size={22} /></div>
      </Link>)}
    </div></div>
  </section>;
}