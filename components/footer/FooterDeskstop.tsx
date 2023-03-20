import React from "react";
import Image from "next/image";

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { FooterDesktopStyled, StyleEmail, StyleSocialList } from "./styles";
import { IconButton } from "@/components/IconButton";
import { imageLoader } from "../ImageLoader";
import "animate.css";
import moment from "moment";
import Link from "next/link";
import { Avatar, Loading } from "@nextui-org/react";

const FooterDesktop = () => {
  const socialLinks = [
    {
      link: "https://www.linkedin.com/in/udjinStolboviy/",
      src: "/images/linkedin1.png",
    },
    {
      link: "https://github.com/UdjinStolboviy",
      src: "/images/gitHub3.png",
    },
    {
      link: "https://www.facebook.com/udjin.stolboviy",
      src: "/images/fb1.jpeg",
    },
  ];

  const yearNow = moment().format("YYYY");

  return (
    <FooterDesktopStyled>
      <div className="animate__animated animate__fadeIn">
        <StyleSocialList>
          {socialLinks.map((navItem, index) => (
            <li key={navItem.link + index}>
              <a href={navItem.link} target="_blank" rel="noopener noreferrer">
                <Avatar src={navItem.src} size="md" />
              </a>
            </li>
          ))}
        </StyleSocialList>
        <div className="footer-wrapper-privacy ">
          <p>{`©Stolboviy Ievgen 2022 —  ${yearNow}`}</p>
        </div>
      </div>
    </FooterDesktopStyled>
  );
};
export default FooterDesktop;
