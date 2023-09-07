import { type Posts } from "@/types/posts"
import PostList from "@/components/post-list"

const dataFetch = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts', {
      cache: 'no-cache',
      next: {
        tags: ['posts']
      }
    })
    const posts: Posts = await res.json()
    return posts
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const posts = await dataFetch()

  return (
    <main className="mx-auto max-w-screen-xl">
      <h1 className="text-center text-4xl py-2">Posts</h1>
      <PostList posts={posts} />
    </main>
  )
}
