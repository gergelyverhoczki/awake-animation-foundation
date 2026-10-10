# Awake Animation Foundation

# Awake Animation — Website Recreation and Initial Build

## Project Overview

Create a modern, cinematic website for **Awake Animation**, an animation studio. The website should feel creative, distinctive, immersive, and visually polished, with a strong emphasis on animation, video, and showcasing the studio's work.

We are rebuilding the website from scratch. The previous version was created in Wix but is no longer available. Treat this as the foundation of an iterative project: we will upload and replace assets, adjust layouts, refine animations, and make design changes throughout development.

**Important:** Do not invent a completely different visual identity. Follow the design direction and structure described below. Use temporary placeholders only where assets have not yet been provided, and make them easy to replace.

## 1. Visual Identity

* The entire website should use a black background.
* The design should feel cinematic, minimal, contemporary, and creative.
* The background will use a custom texture that I will upload later. For now, create a clean black background and structure the site so a custom texture can be applied globally without redesigning the pages.
* Use a restrained color palette, allowing the artwork and video content to provide most of the visual interest.
* Typography should be modern, clean, and highly legible against the dark background. Use a suitable temporary font until the final font is provided.
* Avoid unnecessary gradients, decorative UI elements, generic corporate design patterns, excessive rounded cards, or unnecessary shadows.
* Prioritize strong composition, generous spacing, and the relationship between the text, animation, and imagery.

## 2. Header and Navigation

Create a navigation header at the top of the main page.

### Left side: Animated logo

* Place the Awake Animation logo in the top-left corner.
* The logo will eventually be supplied as a looping GIF or Lottie animation.
* For now, use a clearly identifiable placeholder that can be replaced easily.
* The logo must be clickable and return visitors to the top of the homepage.
* The animation should loop continuously.
* Preserve the aspect ratio and transparency of the final logo asset.
* Do not add a background box around the logo unless the supplied asset requires it.

### Right side: Navigation menu

Place three navigation items on the right side of the header:

* **Work**
* **About Us**
* **Contact**

These are anchor links within the main page, not separate pages.

Expected behavior:

* Clicking Work smoothly scrolls to the work section.
* Clicking About Us smoothly scrolls to the About Us section.
* Clicking Contact smoothly scrolls to the Contact section.
* Account for the header height when scrolling so section headings are not hidden underneath the navigation.
* The header should remain visually consistent while scrolling. Implement a fixed or sticky header only if it suits the final design.

Make the navigation responsive. On mobile, use a clean, unobtrusive menu that works well with touch interactions.

## 3. Hero Video

Directly below the header, create a full-width hero video section.

Requirements:

* The video should span the full available width of the viewport.
* Use a cinematic presentation with no visible borders, card containers, or unnecessary spacing around the video.
* The video should autoplay, loop continuously, and play muted.
* Visitors should not see playback controls and should not be able to pause or interact with the video through clicks.
* The video should not navigate anywhere when clicked.
* Use appropriate video behavior and sizing to maintain the intended composition across desktop, tablet, and mobile.
* Avoid distortion. Preserve the video's aspect ratio and use a suitable cropping strategy where necessary.
* Support an uploaded video asset that can be replaced without changing the component's structure.
* Include a graceful fallback if the video cannot autoplay or has not yet been uploaded.

For the initial build, use a neutral placeholder or an empty black video area rather than selecting unrelated stock footage.

The hero video should be one of the most prominent visual elements on the website.

## 4. Work Section — Project Carousel

Below the hero video, create a dedicated Work section.

This is the main portfolio showcase for Awake Animation.

### Layout and appearance

* Maintain the black background and global background texture.
* Present project artwork as a horizontal carousel.
* Each project should have its own image or thumbnail.
* The carousel should feel integrated into the page rather than looking like a generic e-commerce slider.
* Use a clean, image-led composition with appropriate spacing and consistent image treatment.
* Make the number of projects flexible. We will add more projects over time.

### Carousel behavior

* Visitors can move horizontally through the projects using visible previous and next controls.
* Support touch swiping on mobile.
* Keep navigation intuitive and visually consistent with the overall design.
* Ensure the carousel works with an expanding number of project items.
* Avoid autoplaying the carousel unless we specifically request it later.

### Clickable projects

Each project thumbnail must be clickable.

When a visitor clicks a project, open a dedicated project detail page for that particular work.

Use a reusable project page template so new projects can be added without rebuilding the layout from scratch.

Each project should support:

* Project title.
* Main video or visual asset.
* Optional project description.
* Optional additional images or videos.
* Optional credits or other project information.
* A way to return to the main Work section or navigate to another project.

Do not invent final project titles or descriptions. Use clearly marked placeholder content until real project assets and details are provided.

### Project architecture

The Work navigation item should scroll to the Work section on the homepage. Individual project detail pages should have their own URLs and remain accessible directly.

Structure the site so that adding a new project is straightforward and does not require duplicating entire pages manually.

## 5. About Us Section

Create an About Us section on the main page, positioned after the Work section unless the design is refined later.

Requirements:

* Maintain the black background and custom texture.
* Keep the layout flexible for future studio introduction text, team information, images, or animation.
* Use placeholder text only where necessary.
* Do not invent the studio's history, team members, achievements, or services.
* Ensure the section has a clear anchor ID so the About Us navigation item scrolls to it.

We will provide the actual copy and assets later.

## 6. Contact Section

Create a Contact section on the main page, positioned after About Us.

Requirements:

* Use the same visual identity as the rest of the website.
* Make room for studio contact details, email, social links, or other contact information that will be provided later.
* Use placeholders rather than inventing real contact details.
* Ensure all links are functional once the actual details are supplied.
* Give the section a clear anchor ID for the Contact navigation item.

Do not add a complex contact form unless requested later.

## 7. Footer and Animated Element

Create a minimal footer at the bottom of the homepage and project detail pages.

* The footer should continue the black background and custom texture.
* Include a dedicated area for a looping Lottie animation.
* The Lottie animation will be supplied later.
* Use a placeholder for now.
* Ensure the animation can be replaced easily without modifying the footer layout.
* Keep the footer minimal and visually integrated into the website.
* Leave room for copyright information and optional social links, which will be provided later.

## 8. Technical and Implementation Requirements

Build this as a responsive, production-quality website.

* Use a component-based architecture with reusable sections and project templates.
* Keep the main page sections logically separated into reusable components: Header, Hero Video, Work Carousel, About Us, Contact, and Footer.
* Use reusable data structures for project content instead of hardcoding individual project layouts.
* Ensure navigation anchors work correctly.
* Ensure each project detail page has its own URL.
* Use semantic HTML and accessible navigation.
* Provide visible keyboard focus states and meaningful alternative text for project images.
* Respect reduced-motion preferences where appropriate, while retaining the intended visual identity.
* Optimize images and videos for performance.
* Lazy-load non-critical images and project media where appropriate.
* Avoid unnecessary dependencies and overly complicated implementations.
* Do not add authentication, a database, a CMS, or a complex administration dashboard at this stage.
* Do not introduce unrelated features or sections that were not requested.

## 9. Asset Management and Iterative Development

We will upload assets progressively after the initial version is generated.

Expected assets include:

* Animated Awake Animation logo (GIF or Lottie).
* Hero video.
* Custom black background texture.
* Project thumbnails.
* Project videos and additional media.
* Footer Lottie animation.
* Final typography and other branding assets.

Build the components so these assets can be swapped easily.

Use clearly named asset references and keep project data separate from layout code wherever practical. Avoid embedding asset-specific styling or logic throughout multiple components.

When a real asset is supplied, replace its placeholder and adapt the layout to the asset's actual dimensions and characteristics. Do not unnecessarily redesign unrelated parts of the site.

## 10. Scope of the Initial Build

For the first version, focus on:

1. Establishing the overall black, cinematic visual foundation.
2. Building the header and functional anchor navigation.
3. Creating the full-width looping hero video component.
4. Implementing the horizontal Work carousel and reusable project detail pages.
5. Building the About Us and Contact sections.
6. Creating the footer with a replaceable animation component.
7. Making the complete experience responsive across desktop and mobile.

Do not attempt to finalize the visual design before the real assets are available.

The result should be a strong, functional first version of the Awake Animation website that we can refine incrementally. Follow the specified structure closely, keep the code maintainable, and prioritize visual consistency and flexibility over unnecessary features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2fae74c0-2bb7-49d3-a17e-56f9332ae37f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
