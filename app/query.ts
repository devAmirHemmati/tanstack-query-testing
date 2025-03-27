import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { AddPost, Post } from "./types";
import API_ROUTES, { API_BASE_URL } from "./api";
import { toast } from "react-toastify";

const fetcher = axios.create({
  baseURL: API_BASE_URL,
});

fetcher.interceptors.response.use((response) => {
  if (response.config.method === "post") {
    toast("Post has been added", { type: "success" });
  }

  return response;
});

export function useGetPostQuery(slug: number) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () =>
      fetcher.get<Post>(API_ROUTES.POST.replace(":slug", slug.toString())),
  });
}

export function useAddPostMutation() {
  return useMutation({
    mutationFn: (post: AddPost) =>
      fetcher.post<Post>(API_ROUTES.ADD_POST, post),
  });
}
