import { cleanup } from "@testing-library/react";
import { setLogger } from "react-query";
import { afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import setupNock from "./api";
import { useRouterMock } from "./api/mocks";
import nock from "nock";

vi.mock("next/navigation", () => {
  return {
    useRouter: () => useRouterMock(),
  };
});

setupNock();

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  vi.clearAllTimers();
  nock.restore();
});
