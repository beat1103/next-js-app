import { PostResponse } from "@/types/post-servcie/response";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function PostCardItem({ post }: { post: PostResponse }) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.body}</p>
      </CardContent>
     <Link className="text-blue-500 px-4 py-2 rounded-md bg-blue-500 text-white" href={`/posts/${post.id}`}>View Post</Link>
    </Card>
  );
}