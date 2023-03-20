import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { useEffect, useLayoutEffect } from "react";
import { Text } from "@nextui-org/react";
import "animate.css";

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Home: NextPage = () => {
  useIsomorphicEffect(() => {
    console.log("useIsomorphicEffect");
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Text h1 size={60} weight="bold">
          Make the Web
        </Text>
        <p>fdsjfksdhjfshdfhkjshdfjshdfjkhsfkjshdfkjhs</p>
      </div>
    </div>
  );
};

export default Home;
