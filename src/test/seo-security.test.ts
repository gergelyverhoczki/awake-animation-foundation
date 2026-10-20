import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { SITE_URL, siteUrl, studioAssets, projects } from "@/lib/studio";
import { sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";
import { getRouter } from "@/router";

describe("Second-pass SEO and security rules", () => {
  it("uses the supplied final domain for absolute page and asset URLs", () => {
    expect(SITE_URL).toBe("https://awakeanimation.com");
    expect(siteUrl("/mimicry")).toBe("https://awakeanimation.com/mimicry");
    expect(siteUrl(studioAssets.shareImage)).toBe("https://awakeanimation.com/og-image.jpg");
  });
  it("includes only the homepage and Mimicry, excluding all six placeholder projects", () => {
    const paths = sitemapStaticPaths(getRouter());
    expect(paths).toEqual(["/", "/mimicry"]);
    for (const project of projects) expect(paths).not.toContain(`/work/${project.slug}`);
  });
  it("omits lastmod when no authoritative page timestamp exists", () => {
    const xml = sitemapXML(SITE_URL, [{ path: "/" }, { path: "/mimicry" }]);
    expect(xml).not.toContain("lastmod");
    expect(xml).toContain("https://awakeanimation.com/mimicry");
  });
  it("keeps HSTS duration and subdomains without preload for static responses", () => {
    const headers = readFileSync("public/_headers", "utf8");
    expect(headers).toContain("Strict-Transport-Security: max-age=63072000; includeSubDomains\n");
    expect(headers).not.toContain("preload");
  });
  it("does not permit unsafe expression evaluation in the static CSP", () => {
    const headers = readFileSync("public/_headers", "utf8");
    expect(headers).toContain("script-src 'self' 'unsafe-inline'");
    expect(headers).not.toContain("unsafe-eval");
  });
});
