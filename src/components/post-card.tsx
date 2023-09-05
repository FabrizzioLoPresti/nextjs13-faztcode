import Link from "next/link";
import { Post } from "@/types/posts";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post.id}`} key={post.id} className="block">
      <h4 className="text-lg font-bold">{post.title}</h4>
      <p className="text-gray-500">{post.body}</p>
    </Link>
  );
};

export default PostCard;
