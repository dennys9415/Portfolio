import Head from 'next/head';
import Lucely from '../../components/Lucely';
import PreFooter from '../../components/PreFooter';

const lucely = () => {
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
      <Lucely />
      <PreFooter />
    </>
  );
};

export default lucely;
