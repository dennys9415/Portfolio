import React from 'react';
import Head from 'next/head';
import Main from '../components/Main';
import Projects from '../components/Projects';
import PreFooter from '../components/PreFooter';

export default function Home() {
  return (
    <div>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Dennys | DevOps</title>
        <meta
          name="description"
          content="Dennys is a DevOps Engineer who specializes in building products powered with popular technologies with CI/CD."
        />
        <link rel="icon" type="image" href="/icon.png" />
        {/* <!-- Facebook Meta Tags --> */}
        {/* <meta property="og:url" content="https://frans.my.id" /> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dennys | DevOps"
        />
        <meta
          property="og:description"
          content="Dennys is a DevOps Engineer who specializes in building products powered with popular technologies with CI/CD."
        />
        {/* <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/517552799/b2a32f60-5058-4729-933e-a38d4f8b7dd9"
        /> */}

        {/* <!-- Twitter Meta Tags --> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="frans.my.id" />
        <meta property="twitter:url" content="https://frans.my.id" />
        <meta
          name="twitter:title"
          content="Dennys | DevOps"
        />
        <meta
          name="twitter:description"
          content="Frans is a front end developer who specializes in building digital products powered with popular technologies."
        />
        <meta
          name="twitter:image"
          content="https://repository-images.githubusercontent.com/517552799/b2a32f60-5058-4729-933e-a38d4f8b7dd9"
        /> */}

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </Head>
      <Main />
      <Projects />
      <PreFooter />
    </div>
  );
}
