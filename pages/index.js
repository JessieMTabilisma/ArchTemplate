import Head from 'next/head'
import Header from '../components/header'
import Banner from '../components/banner'
import Slider from '../components/carousel/carousel'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Archi | Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <Slider />
      </main>
    </div>
  )
}
