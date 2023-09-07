import { addPost } from "@/actions/actions";

type Props = {};

export default function CreatePostPage({}: Props) {
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex justify-center">
      <form action={addPost} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-slate-600 border border-gray-700 p-2"
            placeholder="Title"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="body">Post Content</label>
          <textarea
            name="body"
            id="body"
            className="bg-slate-600 border border-gray-700 p-2"
            placeholder="Content"
          />
        </div>

        <button className="bg-slate-600 border border-gray-700 p-2 hover:bg-slate-700 transition-colors ease-in-out duration-300">
          Create Post
        </button>
      </form>
    </div>
  );
}
