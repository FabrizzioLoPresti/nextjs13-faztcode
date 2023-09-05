import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="px-4 py-6 flex justify-between items-center">
      <div>
        <p>Logo</p>
      </div>
      
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/create">Add Post</Link>
      </div>
    </nav>
  )
}

export default Navbar