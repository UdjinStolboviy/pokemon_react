import { borderRadius, boxShadow } from "@/components/styles";
import StyleGuide from "@/styles/style-guide";

import styled from "@emotion/styled";

export const FooterMobileStyled = styled.footer`
  display: flex;
  grid-area: footer;
  position: fixed;
  bottom: 0;
  left: 50%;

  transform: translate(-50%, 0%);
  padding: 10px 10px 10px 10px;
  border-radius: 90px;
  margin-bottom: 10px;
  flex-direction: row;
  @media screen and (min-width: 769px) {
    display: none;
  }
  .warraperIndicator {
    display: flex;
    flex-direction: row;
  }
  & .isDark {
    @media screen and (min-width: 320px) and (max-width: 378px) {
      display: none;
    }
  }
`;

export const FooterDesktopStyled = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
  }

  & .footer-wrapper-privacy {
    padding-top: 30px;
    padding-bottom: 32px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyleSocialList = styled.ul`
  margin: 0 auto;
  display: flex;

  & li {
    margin-right: 50px;
  }
  & li:last-of-type {
    margin-right: 0;
  }
`;
export const StyleEmail = styled.div`
  height: 100%;

  & a {
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #0a84ff;
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    width: 40%;
    & a {
      font-size: ${StyleGuide.FontStyles.title.h6.fontSize};
    }
  }
`;
