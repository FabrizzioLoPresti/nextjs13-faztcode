import { type Posts } from "@/types/posts"
import PostList from "@/components/post-list"

const dataFetch = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/posts`, {
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

// export const revalidate = 60
export const dynamic = 'force-dynamic'

export default async function Home() {
  const posts = await dataFetch()

  return (
    <main className="mx-auto max-w-screen-xl">
      <h1 className="text-center text-4xl py-2">Posts</h1>
      {posts && posts?.length > 0 ? (
        <PostList posts={posts} />
      ): (
        <div>
          <p>No hay posts creados</p>
        </div>
      )}
    </main>
  )
}
