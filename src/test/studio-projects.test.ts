import { describe, expect, it } from "vitest";
import { findProject, nextProject, projects } from "@/lib/studio";

describe("Portfolio project lookup", () => {
  it("provides a distinct project page for each of the six uploaded pictures", () => {
    expect(projects).toHaveLength(6);
    expect(new Set(projects.map((project) => project.thumbnail)).size).toBe(6);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(6);
    for (const project of projects) {
      expect(project.thumbnail).toMatch(/^\/__l5e\/assets-v1\//);
      expect(project.video).toBeUndefined();
      expect(project.description).toBeUndefined();
    }
  });
  it("resolves each project by its own URL slug", () => {
    for (const project of projects) expect(findProject(project.slug)).toBe(project);
  });
  it("does not substitute another project for an unknown URL", () => {
    expect(findProject("missing-project")).toBeUndefined();
  });
  it("supports navigation from the last project back to the first", () => {
    const last = projects.at(-1);
    expect(last).toBeDefined();
    if (!last) throw new Error("Expected portfolio projects");
    expect(nextProject(last.slug)).toBe(projects[0]);
  });
});