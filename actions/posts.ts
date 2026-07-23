"use server";

import { actionFail, actionOk, type ActionResult } from "@/actions/types";
import {
  getPostService,
  listPostsService,
} from "@/services/posts.service";
import type { UiPost } from "@/types/post/ui";

export async function listPostsAction(): Promise<ActionResult<UiPost[]>> {
  try {
    const posts = await listPostsService();
    return actionOk(posts);
  } catch (e) {
    return actionFail(e, "게시글을 불러오지 못했습니다.");
  }
}

export async function getPostAction(
  postId: number
): Promise<ActionResult<UiPost>> {
  try {
    const post = await getPostService(postId);
    return actionOk(post);
  } catch (e) {
    return actionFail(e, "게시글을 불러오지 못했습니다.");
  }
}
