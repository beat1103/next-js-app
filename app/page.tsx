import { getData } from "@/actions/post-service/post-actions";
import PostSection from "@/components/pages/home/PostSection";
import Section from "@/components/semantics/Section";

export default async function Home() {

  const data = await getData();

  return (
    <>
    {/* hero section */}
    {/*faq section */}
    {/* <a href="/">Home</a>
    <button onClick={() => alert('Hello, world!')}>Click me</button> */}
    <PostSection data={data} />
    <Section className="bg-blue-500">
      <h1>Post Section</h1>
    </Section>
    </>
  );
}
