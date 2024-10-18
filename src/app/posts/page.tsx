"use client";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  userId: number;
  body: string;
}

export default function Page() {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["get-20-posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Something went wrong..");
      }
      return response.json();
    },
    select: (data) => data.slice(0, 20),
  });

  console.log(isLoading, isError);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <div style={{ margin: "10px auto" }}>
      {data.map((post: Post) => {
        return (
          <p key={post.id}>
            {post.id}: {post.title}
          </p>
        );
      })}
    </div>
  );
}
