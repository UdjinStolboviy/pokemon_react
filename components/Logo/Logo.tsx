import styled from "@emotion/styled";
import { css } from "@emotion/react";

export type Props = {
  /** Logo size in rem */
  size?: number;
};

export const Logo = styled.header<Props>`
  font-family: OleoScript;
  font-size: ${({ size = 3 }) => `${size}rem`};
`;
