import Head from 'next/head';
import DreadOut2 from '../../components/DreadOut2';
import PreFooter from '../../components/PreFooter';

const dreadout2 = () => {
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
      <DreadOut2 />
      <PreFooter />
    </>
  );
};

export default dreadout2;
