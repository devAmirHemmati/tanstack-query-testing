import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from ".";
import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPostPage from "@/app/add/page";
import { afterEach } from "node:test";

async function fillForm() {
  renderWithProvider(<AddPostPage />);

  const titleInput = screen.getByLabelText("Title");
  const bodyInput = screen.getByLabelText("Description");
  const submitButton = screen.getByText("Add Post");

  await userEvent.type(titleInput, "My title");
  await userEvent.type(bodyInput, "My body");
  await userEvent.click(submitButton);
}

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

afterEach(() => {
  cleanup();
});

describe("Add post page", () => {
  it("After submitting a new post, inputs should be empty", async () => {
    await fillForm();

    await waitFor(() => {
      expect(screen.getByLabelText("Title")).toHaveValue("");
      expect(screen.getByLabelText("Description")).toHaveValue("");
    });
  });

  it("After submitting a new post, toast should be shown", async () => {
    await fillForm();

    expect(screen.getByText("Add Loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Add Post" })
      ).toBeInTheDocument();
      expect(screen.getByText("Post has been added")).toBeInTheDocument();
    });
  });

  it("After submitting a new post, pathname should be at home", async () => {
    await fillForm();

    expect(screen.getByText("Add Loading")).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Add Post" })
      ).toBeInTheDocument();
      expect(pushMock).toBeCalledTimes(1);
    });
  });
});
