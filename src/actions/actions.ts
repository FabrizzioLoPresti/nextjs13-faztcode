"use server";

import { revalidateTag } from "next/cache";
import { Post } from "@/types/posts";

export const addPost = async (formData: FormData, id: number | undefined) => {
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();

  if (!title || !body) {
    return;
  }

  const newPost: Post = {
    title,
    body,
  };

  if (id) {
    await fetch(`${process.env.NEXT_BACKEND_URL}/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    });
  } else {
    await fetch(`${process.env.NEXT_BACKEND_URL}/api/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  revalidateTag("posts");
  // revalidar posts dynamic
  // types prisma
  // useStatus useRouter useParams
};

export const deletePost = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/posts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) return undefined;
    const post = await res.json();
    revalidateTag("posts");
    return post;
  } catch (error) {
    console.error(error);
  }
}