'use server'

import { revalidateTag } from "next/cache"
import { Post } from "@/types/posts"

export const addPost = async (formData: FormData) => {
  const title = formData.get("title")?.toString()
  const body = formData.get("body")?.toString()

  if (!title || !body) {
    return
  }

  const newPost: Post = {
    title,
    body,
  }

  await fetch('http://localhost:3000/api/posts', {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json",
    },
  })

  revalidateTag('posts')
  // redireccionar a / o formatear form 
  // separar en componentes de cliente para formatear form y pending para boton 
  // revalidar posts dynamic 
  // types prisma 
  // useStatus useRouter useParams
}