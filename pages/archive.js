import Head from 'next/head';
import Archive from '../components/Archive';
import PreFooter from '../components/PreFooter';

const archive = () => {
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
      <Archive />
      <PreFooter />
    </>
  );
};

export default archive;
