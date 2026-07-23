import { apiFetch } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import type { ApiPost } from "@/types/post/api";

/** HTTP only — path + API DTO. Do not call from UI/actions directly. */

const POSTS_API_URL =
  process.env.POSTS_API_URL || "https://jsonplaceholder.typicode.com";

export function listPosts() {
  return apiFetch<ApiPost[]>(API_ENDPOINTS.posts.list, {
    baseUrl: POSTS_API_URL,
    cache: {
      tags: ["posts"],
      revalidate: 10,
    },
  });
}

export function getPost(id: number) {
  return apiFetch<ApiPost>(API_ENDPOINTS.posts.detail(id), {
    baseUrl: POSTS_API_URL,
    cache: { noStore: true },
  });
}
