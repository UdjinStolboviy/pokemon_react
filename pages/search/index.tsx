import { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { ApiService } from "@/api/apiServices";
import HeaderSearch from "./styled-search";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IPokemon } from "@/types";
import { default as axios } from "axios";
import { PokemonList } from "@/components/Pokemons";
import { Button, Card, Col, Row, Text, Tooltip } from "@nextui-org/react";

export type Response<D = null> = {
  data: D;
  error?: Error;
};
type PokemonResponce = Response<IPokemon[]>;

const headerRender = (q: string, pokemons?: IPokemon[], error?: string) => {
  if (error) {
    return error;
  }
  return pokemons && Boolean(pokemons.length)
    ? `Search results for "${q}"`
    : `No results for "${q}"... 😞`;
};

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const pokemonsApiSearch = async (name: string) => {
    const result = name.toLowerCase();
    try {
      const pokemon = [];
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${result}/`
      );
      pokemon.push({
        name: response.data.name,
        url: response.data.location_area_encounters,
      });

      setPokemons(pokemon);
    } catch {}
  };

  useEffect(() => {
    pokemonsApiSearch(q as string);
  }, [q]);
  const info: string = `Name: ${pokemons[0] && pokemons[0].name} \nUrl: ${
    pokemons[0] && pokemons[0].url
  }`;
  return (
    <>
      <HeaderSearch>{headerRender(q as string, pokemons)}</HeaderSearch>
      {pokemons[0] ? (
        <Card css={{ w: "100%", h: "220px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={22}
                weight="bold"
                transform="uppercase"
                color="#F31260"
              >
                {pokemons[0].name}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="/images/pokeBolle2.jpeg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={15}>
                  {pokemons[0].name}
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Tooltip content={info} color="error">
                    <Button flat auto rounded color="secondary">
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        INFO
                      </Text>
                    </Button>
                  </Tooltip>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ) : null}
    </>
  );
};

export default Search;
