"use client";

import { useRouter } from "next/navigation";
// import { deletePost } from "@/actions/actions";

type Props = {
  id?: number;
};

const deletePost = async (id: number) => {
  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) return undefined;
    const post = await res.json();
    return post;
  } catch (error) {
    console.error(error);
  }
}

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="bg-red-500 px-4 py-2 text-white"
      onClick={async () => {
        await deletePost(id || 0);
        router.push("/");
        router.refresh();
      }}
    >
      Eliminar
    </button>
  );
};

export default DeleteButton;
