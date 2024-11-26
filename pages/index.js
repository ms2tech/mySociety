import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MySociety App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to mySociety app!" />
        <p className="description">
          Welcome to mySociety App ! <strong>Ilay</strong> give access to godaddy !
        </p>
      </main>

      <Footer />
    </div>
  )
}
