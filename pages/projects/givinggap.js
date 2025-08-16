import Head from 'next/head';
import GivingGap from '../../components/GivingGap';
import PreFooter from '../../components/PreFooter';

const givinggap = () => {
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
      <GivingGap />
      <PreFooter />
    </>
  );
};

export default GivingGap;
