import Head from 'next/head';
import Lcube from '../../components/Lcube';
import PreFooter from '../../components/PreFooter';

const lcube = () => {
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
      <Lcube />
      <PreFooter />
    </>
  );
};

export default Lcube;
