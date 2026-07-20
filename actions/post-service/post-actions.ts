import { PostResponse } from "@/types/post-service/response";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 10,
      tags: ["posts"],
    },
  });
  const data = (await res.json()) as PostResponse[];
  console.log(data);
  return data;
};

export const getPostById = async (id: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = (await res.json()) as PostResponse;
  return data;
};
