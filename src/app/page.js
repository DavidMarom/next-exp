import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>An experimental Next.js project for bold developers</p>
      <br />
      <b><p>Join us:</p></b>
      <a href="https://discord.gg/u8huvHYEvq" target="_blank">Discord</a>
      <br /><br />
      <Link href="/david">Mongo test</Link>
    </div>
  )
}
