import { Section } from "@/components/atoms/Section";
import { PostList } from "@/components/organisms/PostList";
import type { UiPost } from "@/types/post/ui";

interface HomeTemplateProps {
  posts: UiPost[];
}

export function HomeTemplate({ posts }: HomeTemplateProps) {
  return (
    <>
      {/* hero section */}
      <PostList data={posts} />
      <Section className="bg-blue-500">
        <h1>Post Section</h1>
      </Section>
      {/* faq section */}
    </>
  );
}
