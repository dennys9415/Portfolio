import Head from 'next/head';
import Kaplan from '../../components/Kaplan';
import PreFooter from '../../components/PreFooter';

const kaplan = () => {
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
      <Kaplan />
      <PreFooter />
    </>
  );
};

export default Kaplan;
