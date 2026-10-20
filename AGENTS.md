<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Studio asset references and typed project data live in a single browser-safe module; adding or replacing media must not require duplicating page layouts.
- Use homepage anchor sections and one data-driven dynamic project route; this preserves the requested single-scrolling homepage and shareable project URLs.
- Keep each studio section in a focused reusable component; the shared SiteFrame owns the header, global texture layer, and footer.
- Load expression-free animations with the SVG light Lottie player dynamically after browser-side fetching; bake reference expressions into existing keyframes to preserve appearance without unsafe-eval.
- Keep the public origin and asset URLs in studio.ts; leaf routes own share metadata so root tags cannot override project previews.
- Derive sitemap paths from required route-level inclusion decisions; omit placeholder projects and unsupported lastmod timestamps.
- Maintain static security headers in public/_headers and equivalent Worker response headers, including error responses; static files bypass the Worker.
