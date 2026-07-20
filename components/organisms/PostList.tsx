import { Section } from "@/components/atoms/Section";
import { PostCard } from "@/components/molecules/PostCard";
import { PostResponse } from "@/types/post-service/response";

interface PostListProps {
  data: PostResponse[];
  limit?: number;
}

export function PostList({ data, limit = 10 }: PostListProps) {
  return (
    <Section>
      {data.slice(0, limit).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Section>
  );
}
