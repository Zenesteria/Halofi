import Head from 'next/head'
import MusicApp from '../components/MusicApp'
import MusicNav from '../components/MusicNav'

export default function Home() {
  return (
    <div className='flex bg-purple-50 w-full h-screen relative'>
      <Head>
        <title>Halofi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MusicNav/>
      <MusicApp/>
    </div>
  )
}
