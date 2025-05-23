import Link from 'next/link'
export default function Page() {
  return (
    <div>
        <Link href='departments/website'>Website</Link>
        <Link href='departments/marcomm'>Marcomm</Link>
        <Link href='departments/art'>Art</Link>
        <Link href='departments/story'>Story</Link>
    </div>
  )
}