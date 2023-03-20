import {
  useState,
  useLayoutEffect,
  useEffect,
  FC,
  ChangeEvent,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch, RootState } from "@/store";

import { IconButton } from "@/components/IconButton";
import {
  NextUIProvider,
  Card,
  Col,
  Row,
  Button,
  Text,
  Container,
  Image,
  Avatar,
  Link,
  Grid,
} from "@nextui-org/react";

import {
  Wrapper,
  LogoLink,
  StyledLogo,
  MainNav,
  Content,
  Footer,
} from "./components";

import { darkTheme, lightTheme } from "@/styles/themes";
import { borderRadius } from "../styles";
import { RWebShare } from "react-web-share";
import FooterDesktop from "../footer/FooterDeskstop";
import { ButtonGroup } from "../ButtonGroup";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [imagChang, setImagChang] = useState(0);

  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const arrImage = [
    "/covers/fone2.jpeg",
    "/media/5uber.3c7abae6.png",
    "/media/Loginang.d84f2e49.png",
    "/media/Pictur.92d42e3b.png",
  ];

  const headerSharing = "Ievgen Stolbovyi";
  const linkSharing = "https://udjinstolboviy.github.io/ua/";
  const textSharing = "Ievgen Stolbovyi CV";

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    const themeExistsInStorage = Boolean(theme !== null);

    setIsDark(
      themeExistsInStorage
        ? Boolean(theme === "dark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div>
        <Container
          css={{
            position: "absolute",
            zIndex: 2,
            bgBlur: "#0f111466",
            h: "100%",
          }}
        >
          <StyledLogo size={3}>
            <Container display={"flex"} direction={"row"}>
              <div className="wrapperNav">
                <MainNav>
                  <IconButton
                    name={!isDark ? "Moon" : "Sun"}
                    size={1.5}
                    onClick={toggleDark}
                  />
                  <Link href={"/about"}>
                    <IconButton name={"Message"} size={1.5} />
                  </Link>
                  <RWebShare
                    data={{
                      text: `${headerSharing}`,
                      url: `${linkSharing}`,
                      title: `${textSharing}`,
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <IconButton
                      name={"SharedIcon"}
                      size={1.5}
                      onClick={() => console.log("onPressCar")}
                    />
                  </RWebShare>
                  <Link href={"/"}>
                    <IconButton name={"Home"} size={1.5} />
                  </Link>
                </MainNav>
                <Avatar
                  src="/media/logo.7ffbe716.png"
                  css={{ size: "220px", mt: "30px" }}
                />
              </div>
              <div className={"wrapperInfo"}>
                <Text h1 size={60} weight="bold">
                  Ievgen Stolbovyi
                </Text>
                <Text h2 size={25} weight="bold">
                  <Link color="text" href={"tel:+380937484584"}>
                    Phone: +380937484584
                  </Link>
                </Text>
                <Text h2 size={25} weight="bold">
                  Telegram, Viber +380937484584
                </Text>
                <Text h2 size={25} weight="bold">
                  <Link color="text" href={"mailto:jenyjenyy@gmail.com"}>
                    Email: jenyjenyy@gmail.com
                  </Link>
                </Text>
              </div>
            </Container>
          </StyledLogo>
          <ButtonGroup whichThem={isDark} />
          <Content>{children}</Content>
          <FooterDesktop />
        </Container>
        <Image
          src={arrImage[imagChang]}
          width="100%"
          height="1500px"
          objectFit="cover"
          autoResize={true}
          alt="Card example background"
        />
      </div>
    </NextUIProvider>
  );
};
