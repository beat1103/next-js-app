import { Section } from "@/components/atoms/Section";
import { PostResponse } from "@/types/post-service/response";

interface PostDetailTemplateProps {
  post: PostResponse;
}

export function PostDetailTemplate({ post }: PostDetailTemplateProps) {
  return (
    <Section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Section>
  );
}
