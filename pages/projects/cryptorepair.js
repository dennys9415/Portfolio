import Head from 'next/head';
import Cryptorepair from '../../components/Cryptorepair';
import PreFooter from '../../components/PreFooter';

const cryptorepair = () => {
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
      <Cryptorepair />
      <PreFooter />
    </>
  );
};

export default Cryptorepair;
