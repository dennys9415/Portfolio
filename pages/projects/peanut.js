import Head from 'next/head';
import Peanut from '../../components/Peanut';
import PreFooter from '../../components/PreFooter';

const peanut = () => {
  return (
    <>
      <Head>
        <title>Dennys | DevOps</title>
        <meta
          name="description"
          content="Dennys is a DevOps Engineer who specializes in building products powered with popular technologies with CI/CD."
        />
        {/* <link rel="icon" type="image/svg+xml" href="/face.svg" /> */}
      </Head>
      <Peanut />
      <PreFooter />
    </>
  );
};

export default peanut;
