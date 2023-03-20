import { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";

import { useEffect, useLayoutEffect } from "react";
import { Pagination, Text } from "@nextui-org/react";
import "animate.css";
import { ApiService } from "@/api/apiServices";
import dynamic from "next/dynamic";
import Axios from "axios";

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  return {
    props: {
      data: response.data,
    },
  };
};

const Home: NextPage = ({ data }: any) => {
  console.log("pokemons", data);
  useIsomorphicEffect(() => {
    console.log("useIsomorphicEffect", data);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Text h1 size={60} weight="bold">
          Make the Web
        </Text>
        <p>fdsjfksdhjfshdfhkjshdfjshdfjkhsfkjshdfkjhs</p>
      </div>
      <Pagination total={14} initialPage={1} />
    </div>
  );
};

export default Home;
