"use client";

import { useState } from "react";
import { useAddPostMutation } from "../query";
import { useRouter } from "next/navigation";

function AddPostPage() {
  const { mutate: addPost, isLoading: isPending } = useAddPostMutation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (title.trim() === "" || body.trim() === "") {
      alert("Title and body are required");
      return;
    }

    addPost(
      { title, body },
      {
        onSuccess() {
          setTitle("");
          setBody("");
          router.push("/");
        },
      }
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Add new post</h1>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block mb-1 text-sm">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded p-2 w-full"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="body" className="block mb-1 text-sm">
            Description
          </label>
          <input
            type="text"
            id="body"
            className="border rounded p-2 w-full"
            placeholder="Description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          type="submit"
          data-testid="loading"
          className="border rounded p-2 cursor-pointer bg-green-200 w-full mt-4 disabled:opacity-50"
        >
          {isPending ? "Add Loading" : "Add Post"}
        </button>
      </form>
    </div>
  );
}

export default AddPostPage;
