import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import { LoopingVideo } from "@/components/studio/looping-video";
import { mimicryPartner } from "@/lib/studio";

describe("Mimicry partner video", () => {
  beforeAll(() => {
    // jsdom has no media playback: hand play() a resolved promise so it behaves like a browser.
    Object.defineProperty(window.HTMLMediaElement.prototype, "play", {
      configurable: true,
      writable: true,
      value: () => Promise.resolve(),
    });
  });

  it("points at the uploaded video file", () => {
    expect(mimicryPartner.video).toMatch(/^\/__l5e\/assets-v1\/.+\.mp4$/);
  });

  it("plays silently on a loop with no controls", () => {
    render(<LoopingVideo src={mimicryPartner.video} label="Immersive LED wall visuals by Mimicry Motions" />);

    const video = screen.getByLabelText("Immersive LED wall visuals by Mimicry Motions");

    expect(video.tagName).toBe("VIDEO");
    expect(video).toHaveProperty("muted", true);
    expect(video).toHaveProperty("loop", true);
    expect(video).toHaveProperty("autoPlay", true);
    expect(video).toHaveProperty("controls", false);
  });
});
