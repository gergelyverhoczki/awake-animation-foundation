import { afterEach, describe, expect, it, vi } from "vitest";

const { fetchMock } = vi.hoisted(() => ({ fetchMock: vi.fn() }));
vi.mock("@tanstack/react-start/server-entry", () => ({ default: { fetch: fetchMock } }));
vi.mock("@/lib/error-capture", () => ({ consumeLastCapturedError: () => undefined }));
import server from "@/server";

afterEach(() => { vi.restoreAllMocks(); fetchMock.mockReset(); });

describe("Worker security responses", () => {
  it("protects a thrown 500 fallback, including HTTPS HSTS without preload", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    fetchMock.mockRejectedValue(new Error("Test failure"));
    const response = await server.fetch(new Request("https://awakeanimation.com/"), {}, {});
    expect(response.status).toBe(500);
    expect(response.headers.get("strict-transport-security")).toBe("max-age=63072000; includeSubDomains");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(response.headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
    expect(response.headers.get("permissions-policy")).toBe("camera=(), microphone=(), geolocation=(), payment=()");
    expect(response.headers.get("content-security-policy")).toContain("object-src 'none'");
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
  });
  it("protects a normalized swallowed 500 error", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ unhandled: true, message: "HTTPError" }), { status: 500, headers: { "content-type": "application/json" } }));
    const response = await server.fetch(new Request("https://awakeanimation.com/"), {}, {});
    expect(response.status).toBe(500);
    expect(response.headers.get("content-type")).toBe("text/html; charset=utf-8");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
  });
  it("excludes missing pages from indexing without sending HSTS over HTTP", async () => {
    fetchMock.mockResolvedValue(new Response("Missing", { status: 404 }));
    const response = await server.fetch(new Request("http://localhost:8080/missing"), {}, {});
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
    expect(response.headers.has("strict-transport-security")).toBe(false);
  });
});