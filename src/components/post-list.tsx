import { Posts } from "@/types/posts"
import PostCard from "./post-card"

type Props = {
  posts: Posts | undefined
}

const PostList = ({posts}: Props) => {
  return (
    <div className="space-y-6">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList