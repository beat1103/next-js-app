import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { PostResponse } from "@/types/post-service/response";

interface PostCardProps {
  post: PostResponse;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{post.body}</p>
      </CardContent>
      <CardFooter>
        <Link
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          href={`/feeds/${post.id}`}
        >
          View Post
        </Link>
      </CardFooter>
    </Card>
  );
}
