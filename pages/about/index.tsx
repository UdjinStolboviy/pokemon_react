import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IAbout } from "@/types";
import { AppDispatch, RootState } from "@/store";
import { ApiService } from "@/api/apiServices";
import WrapperAbout, { ImageContainerAbout } from "./styled-about";
import "animate.css";
import { IconButton } from "@/components/IconButton";
import { StyleSocialList } from "@/components/footer/styles";
import { imageLoader } from "@/components/ImageLoader";

const AboutPage: NextPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <WrapperAbout></WrapperAbout>
    </div>
  );
};

export default AboutPage;
