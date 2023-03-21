import { NextPage, GetStaticProps, GetServerSideProps } from "next";
import Head from "next/head";

import { useEffect, useLayoutEffect, useState } from "react";
import { Pagination, Text } from "@nextui-org/react";
import "animate.css";
import { ApiService } from "@/api/apiServices";
import dynamic from "next/dynamic";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addPokemon } from "@/services/pokemonSlice";
import { PokemonList } from "@/components/Pokemons";
import { IPokemon } from "@/types";

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/`);
//   return {
//     props: {
//       data: response.data,
//     },
//   };
// };

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataPokemon = useSelector((state: RootState) => state.pokemon.pokemon);
  const [page, setPage] = useState(1);

  console.log("useIsomorphicEffect", dataPokemon);

  const pokemonsApiPagination = async (page: number) => {
    try {
      const response = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`
      );
      dispatch(addPokemon(response.data.results));
    } catch {}
  };

  useIsomorphicEffect(() => {
    pokemonsApiPagination(page);
  }, [page]);

  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {dataPokemon[0] ? (
          <PokemonList pokemon={dataPokemon[0] as unknown as IPokemon[]} />
        ) : null}
      </div>
      <Pagination
        total={14}
        initialPage={1}
        onChange={(page: number) => setPage(page)}
      />
    </div>
  );
};

export default Home;
