import { getPostById } from "@/actions/post-service/post-actions";
import { PostDetailTemplate } from "@/components/templates/PostDetailTemplate";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getPostById(Number(postId));

  return <PostDetailTemplate post={post} />;
}
