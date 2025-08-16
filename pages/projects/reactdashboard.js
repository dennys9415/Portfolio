import Head from 'next/head';
import ReactDashboard from '../../components/ReactDashboard';
import PreFooter from '../../components/PreFooter';

const reactdashboard = () => {
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
      <ReactDashboard />
      <PreFooter />
    </>
  );
};

export default reactdashboard;
