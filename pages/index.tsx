import Layout from '../components/Layout'
import Hero from '../components/Hero'
import GetStarted from '../components/GetStarted'
import Features from '../components/Features'
import ReadyToStarted from '../components/ReadyToStarted'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <GetStarted />
      <Features />
      <ReadyToStarted />
    </Layout>
  )
}
