import styled from "@emotion/styled";

export type Props = {
  underline?: boolean;
};

export const StyledLink = styled.a<Props>`
  all: unset;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
