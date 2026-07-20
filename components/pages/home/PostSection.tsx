import Section from "@/components/semantics/Section";
import { PostResponse } from "@/types/post-servcie/response";
import PostCardItem from "@/components/templates/PostCardItem";

export default function PostSection({ data }: { data: PostResponse[] }) {
  return (
    <Section>
    {data.map((post) => (
        <PostCardItem key={post.id} post={post} />
      )).slice(0, 10)}
      </Section>   
  );
}