type Post = {
  id?: number
  title: string
  body?: string
  createdAt?: string
}

type Posts = Post[]

export type { Post, Posts }