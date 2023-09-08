import ComposePost from '@/components/compose-post'
import { Post } from '@/types/posts'
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

const dataFetch = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) return undefined;
    const post: Post = await res.json();
    return post;
  } catch (error) {
    console.error(error);
  }
};

export default async function EditPage({params: {id}}: Props) {
  const post = await dataFetch(id);
  if (!post) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-screen-xl h-screen flex justify-center">
      <ComposePost post={post} />
    </div>
  )
}