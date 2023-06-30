import { Row, SideBar, PageContainer } from '@/components'

export default function Home() {
  return (
    <Row>
      <SideBar />
      <PageContainer>

        <h1>Noams Page</h1>
        <p>I am on my journey to become a professional Full-Stack developer</p>
        <br />
        <b><p>Reach me on:</p></b>
        <a href="https://www.linkedin.com/in/noam-sadeh/" target="_blank">Linkedin</a>
        <a href="https://github.com/noams24" target="_blank">Github</a>
        <br /><br />
      </PageContainer>
    </Row>
  )
}
