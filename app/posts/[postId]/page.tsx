import { getPostById } from "@/actions/post-service/post-actions";

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;
    const post = await getPostById(Number(postId));
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}