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
  Spacer,
  Input,
  FormElement,
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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const isSSR = typeof window === "undefined";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isSSR, setIsSSR] = useState(true);
  const router = useRouter();
  const { q } = router.query;
  const [query, setQuery] = useState(q);
  useEffect(() => {
    q && setQuery(q);
    if (query && !q) {
      setQuery("");
    }
  }, [q]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [imagChang, setImagChang] = useState(0);

  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    localStorage.setItem("theme", "light");
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

  const searchChange = (e: ChangeEvent<FormElement>) => {
    const { value } = e.currentTarget;
    console.log(value);
    setQuery(value);
    if (value?.length >= 2) {
      router.push({
        pathname: "/search",
        query: { q: value },
      });
    }
    if (!value) {
      router.push("/");
    }
  };

  if (isSSR) {
    return null;
  }

  return (
    <NextUIProvider theme={lightTheme}>
      <div>
        <Container
          display={"flex"}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Link href="/">
            <LogoLink>
              <Image
                src="/images/pokemon-png-23.png"
                width={300}
                height={300}
              />
            </LogoLink>
          </Link>
          <Input
            bordered
            labelPlaceholder="Search Pokemon"
            initialValue=""
            color="error"
            value={query}
            onChange={searchChange}
            size="xl"
            placeholder="xLarge"
            css={{ width: "100%", maxWidth: "500px" }}
          />
          <Spacer y={1.5} />
        </Container>
        <Wrapper>
          <Container
            display={"flex"}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Content>{children}</Content>
          </Container>
        </Wrapper>
      </div>
    </NextUIProvider>
  );
};
