import Link from 'next/link'
import { Row, SideBar, PageContainer } from '../components/index.js'

export default function Home() {
  return (
      

      <PageContainer>
        <h1>Home Page</h1>
        <p>An experimental Next.js project for bold developers</p>
        <br />
        <b><p>Join us:</p></b>
        <a href="https://discord.gg/u8huvHYEvq" target="_blank">Discord</a>
        <br /><br />
      </PageContainer>
  )
}
