import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/landingGetQueryKeyUserApi">landingGetQueryKeyUserApi</Link>
        </li>
        <li>
          <Link href="/clickGetQueryKeyUserApi">clickGetQueryKeyUserApi</Link>
        </li>
        <li>
          <Link href="/clickGetQueryKeyTodoApi">clickGetQueryKeyTodoApi</Link>
        </li>
        <li>
          <Link href="/landingGetQueryKeyTasksApi">landingGetQueryKeyTasksApi</Link>
        </li>
        <li>
          <Link href="/clickGetQueryKeyTaskApi">clickGetQueryKeyTaskApi</Link>
        </li>
        <li>
          <Link href="/clickPostQueryKeyTaskApi">clickPostQueryKeyTaskApi</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
