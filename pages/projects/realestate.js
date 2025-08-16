import Head from 'next/head';
import PreFooter from '../../components/PreFooter';
import Realestate from '../../components/Realestate';

const realestate = () => {
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
      <Realestate />
      <PreFooter />
    </>
  );
};

export default realestate;
