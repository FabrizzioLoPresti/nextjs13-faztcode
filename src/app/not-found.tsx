import Link from "next/link"

type Props = {}

export default function NotFoundPage({}: Props) {
  return (
    <section className='mx-auto max-w-screen-xl h-[calc(100vh-7rem)] flex flex-col gap-2 items-center justify-center'>
      <h4 className='font-bold text-3xl'>404 Error Page</h4>
      <Link href='/'>
        Go back home
      </Link>
    </section>
  )
}