import { vi } from "vitest";

export const useRouterMock = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  prefetch: vi.fn(),
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
}));
