import ComposePost from "@/components/compose-post";

type Props = {};

export default function CreatePostPage({}: Props) {
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex justify-center">
      <ComposePost />
    </div>
  );
}
