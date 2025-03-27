import { AddPost, Post } from "@/app/types";
import nock from "nock";

export default function setupPostsNock(api: nock.Scope) {
  api.get("/posts/1").reply(
    200,
    (): Post => ({
      id: 1,
      userId: 1,
      title: "Test Post",
      body: "This is a test post.",
    })
  );

  api.post("/posts").reply(
    200,
    (_, body: AddPost): Post => ({
      id: 1,
      userId: 1,
      title: body.title,
      body: body.body,
    })
  );
}
