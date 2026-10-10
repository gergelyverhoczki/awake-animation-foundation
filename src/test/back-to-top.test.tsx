import { render, screen, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Footer } from "@/components/studio/footer";

// The button is a plain click target, not a hash link: a hash link goes dead after
// the first click because the URL already holds the target.
describe("Back to top", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("scrolls to the top on every click, including repeated clicks", () => {
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<Footer />);
    const button = screen.getByRole("button", { name: "Back to top" });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(scrollTo).toHaveBeenCalledTimes(3);
    for (const call of scrollTo.mock.calls) {
      expect(call[0]).toMatchObject({ top: 0, behavior: "smooth" });
    }
  });

  it("jumps instantly when reduced motion is requested", () => {
    vi.spyOn(window, "matchMedia").mockImplementation(
      (query: string) =>
        ({
          matches: true,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => {},
        }) as unknown as MediaQueryList,
    );
    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    render(<Footer />);

    fireEvent.click(screen.getByRole("button", { name: "Back to top" }));

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: "auto" });
  });
});
