import { API_BASE_URL } from "@/app/api";
import nock from "nock";
import setupPostsNock from "./posts";

export default function setupNock() {
  const api = nock(API_BASE_URL);

  setupPostsNock(api);
}
