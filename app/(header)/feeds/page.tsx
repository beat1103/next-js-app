import { getData } from "@/actions/post-service/post-actions";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

export default async function FeedsPage() {
  const posts = await getData();

  return (<>
  <HomeTemplate posts={posts} />
  </>);
}
