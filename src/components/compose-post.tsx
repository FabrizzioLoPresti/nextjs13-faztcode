"use client";

import { useRouter } from "next/navigation";
import { addPost } from "@/actions/actions";
import { Post } from "@/types/posts";

type Props = {
  post?: Post;
};

const ComposePost = ({ post }: Props) => {
  const router = useRouter();
  return (
    <form
      action={async (formData: FormData) => {
        await addPost(formData, post?.id);
        router.push("/");
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="bg-slate-600 border border-gray-700 p-2"
          placeholder="Title"
          defaultValue={post?.title}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="body">Post Content</label>
        <textarea
          name="body"
          id="body"
          className="bg-slate-600 border border-gray-700 p-2"
          placeholder="Content"
          defaultValue={post?.body}
        />
      </div>

      <button className="bg-slate-600 border border-gray-700 p-2 hover:bg-slate-700 transition-colors ease-in-out duration-300">
        {post ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default ComposePost;
