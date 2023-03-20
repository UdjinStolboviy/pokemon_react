import { forwardRef, ForwardedRef, FC, MouseEvent } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Button } from "@nextui-org/react";

import { boxShadow, transition } from "@/components/styles";
import { Icon, Props as IconProps } from "@/components/Icon";
import { Avatar } from "@nextui-org/react";

type ButtonProps = { size: string };

// const Button = styled.button<ButtonProps>`
//   all: unset;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 5px;

//   cursor: pointer;
//   ${({ size }) => css`
//     width: ${size};
//     height: ${size};
//   `}
//   border-radius: 50%;

//   ${transition()};

//   &:hover {
//     opacity: 0.9;
//   }
// `;

export type Props = {
  /** onClick callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Omit<IconProps, "ref">;

export const IconButton: FC<Props> = forwardRef(
  ({ onClick, ...props }, ref) => (
    <Button
      bordered
      auto
      css={{ px: "$5", m: "$1" }}
      onClick={onClick}
      title={props.name}
      ref={ref as ForwardedRef<HTMLButtonElement>}
    >
      <Icon {...props} />
    </Button>
  )
);

IconButton.displayName = "IconButton";
