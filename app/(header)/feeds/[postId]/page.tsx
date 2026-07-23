import { getPostService } from "@/services/posts.service";
import { PostDetailTemplate } from "@/components/templates/PostDetailTemplate";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getPostService(Number(postId));

  return <PostDetailTemplate post={post} />;
}
