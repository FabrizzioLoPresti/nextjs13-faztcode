import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Post } from "@/types/posts";

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params: { id } }: Params) => {
  try {
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get("search"));
    // const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await prisma.posts.findUnique({
      where: {
        id: Number(id),
      },
    });
    // const data: Post = await post.json();
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
};

export const PUT = async (request: Request, { params: { id } }: Params) => {
  try {
    const data = await request.json();
    const post = await prisma.posts.update({
      where: {
        id: Number(id),
      },
      data
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
};

export const DELETE = async (request: Request, { params: { id } }: Params) => {
  try {
    const post = await prisma.posts.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.error();
  }
}