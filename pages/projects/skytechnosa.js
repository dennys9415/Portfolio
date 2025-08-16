import Head from 'next/head';
import Skytechnosa from '../../components/Skytechnosa';
import PreFooter from '../../components/PreFooter';

const skytechnosa = () => {
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
      <Skytechnosa />
      <PreFooter />
    </>
  );
};

export default Skytechnosa;
