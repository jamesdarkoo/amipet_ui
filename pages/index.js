import Head from 'next/head';
import Layout from '../components/Shared/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Amipet</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home
    </Layout>
  );
}
