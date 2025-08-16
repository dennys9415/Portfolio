import Head from 'next/head';
import About from '../components/About';
import PreFooter from '../components/PreFooter';

const about = () => {
  return (
    <>
      <Head>
        <title>Dennys | DevOps</title>
        <meta
          name="description"
          content="Dennys is a DevOps Engineer who specializes in building products powered with popular technologies with CI/CD."
        />
        <link rel="icon" type="image" href="/icon.png" />
      </Head>
      <About />
      <PreFooter />
    </>
  );
};

export default about;
