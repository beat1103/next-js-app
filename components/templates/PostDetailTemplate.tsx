import { Section } from "@/components/atoms/Section";
import type { UiPost } from "@/types/post/ui";

interface PostDetailTemplateProps {
  post: UiPost;
}

export function PostDetailTemplate({ post }: PostDetailTemplateProps) {
  return (
    <Section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Section>
  );
}
