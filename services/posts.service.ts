import { getPost, listPosts } from "@/lib/api/posts";
import type { ApiPost } from "@/types/post/api";
import type { UiPost } from "@/types/post/ui";

export function mapPost(post: ApiPost): UiPost {
  return {
    userId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
  };
}

export async function listPostsService(): Promise<UiPost[]> {
  const posts = await listPosts();
  return posts.map(mapPost);
}

export async function getPostService(id: number): Promise<UiPost> {
  const post = await getPost(id);
  return mapPost(post);
}
