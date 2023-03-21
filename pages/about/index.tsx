import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import WrapperAbout, { ImageContainerAbout } from "./styled-about";
import "animate.css";

const AboutPage: NextPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperAbout></WrapperAbout>
    </div>
  );
};

export default AboutPage;
