import Head from 'next/head';
import Slingshot from '../../components/Slingshot';
import PreFooter from '../../components/PreFooter';

const slingshot = () => {
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
      <Slingshot />
      <PreFooter />
    </>
  );
};

export default Slingshot;
