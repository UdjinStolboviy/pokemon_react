import { FC, useState } from "react";

import { ButtonGroupStyle } from "./styleButtonGroup";
import { Button, Grid } from "@nextui-org/react";

export interface ButtonGroupProps {
  whichThem: boolean;
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  const [active, setActive] = useState(1);

  const activeButton = (index: any, text?: boolean) => {
    if (index === 1 && active === 1) {
      if (props.whichThem) {
        return "&green700";
      }
      if (text) {
        return "black";
      }
      return "white";
    } else if (index === 2 && active === 2) {
      if (props.whichThem) {
        return "&green700";
      }
      if (text) {
        return "black";
      }
      return "white";
    } else if (index === 3 && active === 3) {
      if (props.whichThem) {
        return "&green700";
      }
      if (text) {
        return "black";
      }
      return "white";
    } else if (index === 4 && active === 4) {
      if (props.whichThem) {
        return "&green700";
      }
      if (text) {
        return "black";
      }
      return "white";
    } else if (index === 5 && active === 5) {
      if (props.whichThem) {
        return "&green700";
      }
      if (text) {
        return "black";
      }
      return "white";
    }
  };

  return (
    <ButtonGroupStyle>
      <Grid.Container gap={1}>
        <Grid>
          <Button
            auto
            color="primary"
            rounded
            bordered
            ghost
            onClick={() => setActive(1)}
            css={{
              color: activeButton(1, true),
              background: activeButton(1),
            }}
          >
            SKILLS
          </Button>
        </Grid>
        <Grid>
          <Button
            auto
            color="primary"
            rounded
            bordered
            ghost
            onClick={() => setActive(2)}
            css={{
              color: activeButton(2, true),
              background: activeButton(2),
            }}
          >
            MY WORK
          </Button>
        </Grid>
        <Grid>
          <Button
            auto
            color="primary"
            rounded
            bordered
            ghost
            onClick={() => setActive(3)}
            css={{
              color: activeButton(3, true),
              background: activeButton(3),
            }}
          >
            EDUCATION
          </Button>
        </Grid>
        <Grid>
          <Button
            auto
            color="primary"
            rounded
            bordered
            ghost
            onClick={() => setActive(4)}
            css={{
              color: activeButton(4, true),
              background: activeButton(4),
            }}
          >
            MY WORKS WEB
          </Button>
        </Grid>
        <Grid>
          <Button
            auto
            color="primary"
            rounded
            bordered
            ghost
            onClick={() => setActive(5)}
            css={{
              color: activeButton(5, true),
              background: activeButton(5),
            }}
          >
            MY WORKS MOBILE
          </Button>
        </Grid>
      </Grid.Container>
    </ButtonGroupStyle>
  );
};
