import { listPostsService } from "@/services/posts.service";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

export default async function FeedsPage() {
  const posts = await listPostsService();

  return <HomeTemplate posts={posts} />;
}
