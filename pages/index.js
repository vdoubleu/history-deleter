import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>History Deleter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1> History Deleter </h1>

        <Link href="/test-page">
          <a>Delete History</a>
        </Link>
      </main>
    </div>
  )
}
