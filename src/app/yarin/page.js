"use client";
import { Row } from "@/components";
import { PageContainer, SideBar } from "@/components";
import classes from "./page.module.css";
import Button from "../../components/Button/Button";
import {
  BsLinkedin,
  BsDiscord,
  BsStackOverflow,
  BsGithub,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Img from "@/components/Img/Img";
import laptopImg from "../../assets/laptop.jpg";

const Yarin = () => {
  const moveToLinkHandler = (url) => {
    window.open(url, "_blank");
  };
  const title = "Hello, i'm yarin levi";
  const location = "Pardes Hana";
  const about = "You can find me on";

  const gitHubLink = "https://github.com/YarinLevi5";
  const linkedInLink = "https://www.linkedin.com/in/yarin-levi1/";
  const discordLink = " https://discord.com/users/839890627423371284";
  const stackOverflowLink =
    "https://stackoverflow.com/users/17318006/yarin-levi";

  const staticButtonProps = {
    backgroundColor: "#ffffff",
    type: "button",
    rounded: true,
    size: "meduim",
  };
  const buttons = [
    {
      btnId: 1,
      label: "GitHub",
      icon: <BsGithub />,
      linkFunction: () => {
        moveToLinkHandler(gitHubLink);
      },
    },
    {
      btnId: 2,
      label: "LinkedIn",
      icon: <BsLinkedin />,
      linkFunction: () => {
        moveToLinkHandler(linkedInLink);
      },
    },
    {
      btnId: 3,
      label: "Discord",
      icon: <BsDiscord />,
      linkFunction: () => {
        moveToLinkHandler(discordLink);
      },
    },
    {
      btnId: 4,
      label: "StackOverflow",
      icon: <BsStackOverflow />,
      linkFunction: () => {
        moveToLinkHandler(stackOverflowLink);
      },
    },
  ];
  return (
    <Row>
      <PageContainer>
        <div className={classes.main}>
          <h1 className={classes.title}>{title.toUpperCase()}</h1>
          <div className={classes.about}>
            <ImLocation />
            {<p>{location}</p>}
          </div>
          <Img
            width={400}
            height={400}
            url={laptopImg}
            alt="Laptop image"
            className={classes.img}
          />
          <p>{about}</p>
          <div className={classes.buttons}>
            {buttons.map((button) => {
              return (
                <Button
                  className={classes.button}
                  key={button.btnId}
                  backgroundColor={staticButtonProps.backgroundColor}
                  label={button.label}
                  type={staticButtonProps.type}
                  size={staticButtonProps.size}
                  rounded={staticButtonProps.rounded}
                  onClick={button.linkFunction}
                >
                  <div className={classes.innerBtn}>{button.icon}</div>
                </Button>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </Row>
  );
};

export default Yarin;
