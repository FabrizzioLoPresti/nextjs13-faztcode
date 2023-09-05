type Post = {
  id: number
  title: string
  body: string
  userId: number
}

type Posts = Post[]

export type { Post, Posts }