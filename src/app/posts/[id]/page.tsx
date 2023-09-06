import Link from "next/link"
import { notFound } from 'next/navigation'
import { type Post } from "@/types/posts"

type Props = {
  params: {
    id: string
  }
}

const dataFetch = async (id: string) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      cache: 'no-cache',
    })
    const post: Post = await res.json()

    if (!post) {
      notFound()
    }

    return post
  } catch (error) {
    console.error(error)
  }
}

export default async function PostPage({params: {id}}: Props) {
  const post = await dataFetch(id)
  
  return (
    <section className="mx-auto max-w-screen-xl">
      <h2 className="font-bold text-2xl">{post?.title}</h2>
      <p className="text-gray-500">{post?.body}</p>
      <Link href="/">Volver</Link>
    </section>
  )
}