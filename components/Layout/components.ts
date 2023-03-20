import styled from "@emotion/styled";

import { StyledLink } from "@/components/StyledLink";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/Input";

export const Wrapper = styled.div`
  .backImag {
    width: 100%;
    min-height: 100vh;
    position: absolute;
    z-index: -4;
    background-image: url("https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true");
    border: 4px solid #000;
    background-size: cover;
    background-position: center center;
  }

  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 2vmin;
    .warraperIndicator {
      display: flex;
      flex-direction: row;
  }
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1008px) {
       .wrapperNav {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
       align-items: center;
     
       }
  }
`;

export const LogoLink = styled(StyledLink)`
  padding: 1vw;
`;

export const StyledBottomIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -20px;
    margin-bottom: -10px;
    top: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0CB3A1;
    & span {
      width: 30;
      height: 30;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      text-align: center;
      line-height: 30px;
    }
  `;


export const StyledLogo = styled(Logo)`
 .wrapperInfo {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
 @media screen and (min-width: 320px) and (max-width: 959px) {
  .wrapperInfo {
   width: 100%;
   align-items: center;
  }
  .wrapperNav{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
`;

export const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1vmin 1vmin;
  & .poneWrapper {
    @media screen and (min-width: 320px) and (max-width: 421px) {
    display: none;
  }
  }
`;

export const SearchInput = styled(Input)`
  grid-area: search;
  width: 96%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 4rem;
`;

export const Content = styled.main`
  grid-area: content;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;
