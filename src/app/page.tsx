import { type Posts } from "@/types/posts"
import PostList from "@/components/post-list"

const dataFetch = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-cache',
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
      <PostList posts={posts} />
    </main>
  )
}
