"use client";
import Link from 'next/link'
import { Row, Col } from '../components/index.js'

export default function Home() {
  return (
    <Row>
      <Col width="200px" height='100vh' background='#ffaaaa'>
        <Link href="/david">Mongo test</Link>
      </Col>
      <Col width="100%" height='100vh' background='#888888' justifyContent='start'>

        <h1>Home Page</h1>
        <p>An experimental Next.js project for bold developers</p>
        <br />
        <b><p>Join us:</p></b>
        <a href="https://discord.gg/u8huvHYEvq" target="_blank">Discord</a>
        <br /><br />
      </Col>
    </Row>
  )
}
