import React, { useRef, useEffect } from "react";
import { NextSeo } from "next-seo";
import { css } from "emotion";
import Sec1 from "components/container/about/Intro";
import Sec2 from "components/container/about/5part";
import Sec3 from "components/container/about/Gallery";
import Sec4 from "components/container/about/Hobbies";
import IJN, { Object } from "components/theme/TheIceJI";
// Component
import Sidebar from "components/container/sideIndicator";
import SocialRight from "components/container/socialRight";
// GSAP
import { TweenMax, Power3 } from "gsap";

export default function index() {
  const SEO = {
    title: "TheIceJI - About me",
    description:
      "Let's explore 5 part of me. Developer, Graphics Designer, Music producer, Editor, Photographer",
  };

  let heroT1 = useRef(null);
  let heroT2 = useRef(null);
  let SwiperBG = useRef(null);

  useEffect(() => {
    TweenMax.from(SwiperBG, 0.5, {
      delay: 0,
      x: "-100vw",
      ease: Power3.easeInOut,
    });
    TweenMax.to(SwiperBG, 2, {
      delay: 0,
      x: "100vw",
      ease: Power3.easeInOut,
    });
    TweenMax.to(SwiperBG, 0.1, {
      delay: 3,
      opacity: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(heroT1, 1, {
      delay: 1,
      opacity: 0.47,
      x: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(heroT2, 1, {
      delay: 1.5,
      opacity: 1,
      y: 0,
      ease: Power3.easeInOut,
    });
  });

  const HeroBG = css`
    background-image: url(/page/about/hero_bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  const HeroFG = css`
    background-image: url(/page/about/hero_fg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
  `;

  const mainContainer = css`
    margin-left: 10%;
    & h1 {
      font-size: 596px;
      font-weight: 1000;
      line-height: 60%;
      color: #fff;
      opacity: 0;
      font-family: poppins;
      transform: translateX(-250px);
    }
    & h2 {
      font-size: 137px;
      font-weight: 1000;
      line-height: 0;
      margin: -30px 0 0 250px;
      color: #fff;
      font-family: poppins;
      opacity: 0;
      transform: translateY(250px);
    }
  `;

  // Left Sidebar Indicator
  const LeftBar = css`
    align-items: center;
    margin-left: 40px;
    z-index: 20;
  `;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <NextSeo {...SEO} />
      <IJN.Hero H={"130vh"}>
        <IJN.Layer fluid className={HeroBG}></IJN.Layer>
        <IJN.Layer W100 H={"100vh"} dF Jc Ac>
          <IJN.Flex Y className={mainContainer}>
            <h1
              ref={(e) => {
                heroT1 = e;
              }}
            >
              01
            </h1>
            <h2
              ref={(e) => {
                heroT2 = e;
              }}
            >
              The Story
            </h2>
          </IJN.Flex>
        </IJN.Layer>
        <IJN.Layer fluid t0 className={HeroFG}></IJN.Layer>
        <IJN.Layer b0 mb={"-1px"} W100>
          <Object.Img W100 className="maskSVG" src="/svg/bgMask.svg" />
        </IJN.Layer>
        <IJN.Layer
          fluid
          style={{ backgroundColor: "#111" }}
          ref={(e) => (SwiperBG = e)}
        ></IJN.Layer>

        <SocialRight opacity={0.6} delay={2} />
        <Sidebar
          style={{ zIndex: 50 }}
          ActiveNumber="2"
          title="about"
          height={26}
          main={78}
          next="/services"
          prev="/home"
        />
      </IJN.Hero>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </div>
  );
}
