import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderWithProvider } from ".";
import Home from "@/app/page";
import userEvent from "@testing-library/user-event";

describe("Home page", () => {
  it("renders the post", async () => {
    renderWithProvider(<Home />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Test Post")).toBeInTheDocument();
    });
  });
});
