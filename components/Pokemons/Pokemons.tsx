import { IPokemon } from "@/types";
import { FC } from "react";
import { Wrapper } from "../Layout/components";
import { Button, Card, Col, Grid, Row, Text, Tooltip } from "@nextui-org/react";

export const PokemonList: FC<{ pokemon: IPokemon[] }> = ({
  pokemon: pokemons,
}) => {
  return (
    <Wrapper>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: IPokemon, index) => {
          const info: string = `Name: ${pokemon.name} \nUrl: ${pokemon.url}`;
          return (
            <Grid xs={6} sm={3} key={index}>
              <Card css={{ w: "100%", h: "220px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={22}
                      weight="bold"
                      transform="uppercase"
                      color="#F31260"
                    >
                      {pokemon.name}
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
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={15}>
                        {pokemon.name}
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
            </Grid>
          );
        })}
      </Grid.Container>
    </Wrapper>
  );
};
