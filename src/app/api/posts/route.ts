import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Posts, Post } from "@/types/posts";

export const GET = async () => {
  try {
    // const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await prisma.posts.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    // const data: Posts = await posts.json();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
};

export const POST = async (request: Request) => {
  try {
    const { title, body } = await request.json();
    // const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title,
    //     body,
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    const post = await prisma.posts.create({
      data: {
        title,
        body,
      }
    });
    // const data: Post = await post.json();
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
};
