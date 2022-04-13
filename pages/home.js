import React, { useEffect, useRef } from "react";
import { css, cx } from "emotion";
import { NextSeo } from "next-seo";
import IJN, { Object } from "components/theme/TheIceJI";
// Component
import Sidebar from "components/container/sideIndicator";
import SocialRight from "components/container/socialRight";
// GSAP
import { TweenMax, Power3 } from "gsap";

export default function index() {
  const SEO = {
    title: "TheIceJI - Jirayu Ninlapun Official Website",
    description:
      "I'm Jirayu Ninlapun, studying Cinematic Art at Bangkok University. Experience: 7 years in Graphics Design, 5 years in VFX & Editor, and 2 years in Web Developer. ",
  };

  let Layer1 = useRef(null);
  let Layer2 = useRef(null);
  let Text01 = useRef(null);
  let Text02 = useRef(null);
  let Text03 = useRef(null);
  let Text04 = useRef(null);
  let Logo01 = useRef(null);
  let Logo02 = useRef(null);
  let Logo03 = useRef(null);
  let Detail01 = useRef(null);
  let Detail02 = useRef(null);
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
    TweenMax.from(Layer1, 2, {
      delay: 1,
      opacity: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.from(Layer2, 0.5, {
      delay: 1,
      opacity: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.staggerFrom(
      [Text01, Text02],
      1,
      {
        delay: 1,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.5
    );
    TweenMax.staggerFrom([Text03, Text04], 1, {
      delay: 2,
      x: 50,
      opacity: 0,
      ease: Power3.easeInOut,
    }, 0.5);
    // Logo Aimated
    TweenMax.staggerFrom(
      [Logo01, Logo02, Logo03],
      0.5,
      {
        delay: 2.7,
        y: 100,
        ease: Power3.easeInOut,
      },
      0.2
    );
    TweenMax.staggerFrom(
      [Detail01, Detail02],
      0.5,
      {
        delay: 3.5,
        x: 350,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);

  const heroContainer = css`
    background-color: #000;
  `;

  // Hero - Background
  const ParaBG = css`
    opacity: 1;
    background: url(/page/home/hero_bg.png);
    background-size: cover;
    background-position: center;
  `;
  const ParaFG = css`
    background: url(/page/home/hero_fg.png);
    background-size: cover;
    background-position: center;
    pointer-events: none;
  `;
  const ParaDust = css`
    z-index: 20;
    background: url(/page/home/hero_dust.png);
    background-size: cover;
    background-position: center;
    pointer-events: none;
  `;

  // Hero - Center Rich Text
  const heroText = css`
    color: #fff;
    & h4 {
      font-size: 41px;
      font-family: poppins;
      opacity: 0.4;
      line-height: 0;
      margin: 0 0 -10px 40px;
    }
    & h1 {
      font-size: 276px;
      font-family: poppins;
      font-weight: 700;
      color: rgba(0, 0, 0, 0);
      -webkit-text-stroke: 3px #fff;
    }
    & h3 {
      float: right;
      font-size: 41px;
      font-family: poppins;
      opacity: 0.8;
      line-height: 0;
      margin: -110px -50px 0 0;
    }
  `;
  const TextJirayu = css`
    height: 340px;
    & > h2 {
      font-size: 160px;
      font-family: poppins;
      color: #fff;
      margin: -23px 0 0 -82px;
      font-weight: 700;
    }
  `;

  // Hero - Footer Bar
  const heroFooter = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  const heroLogo = css`
    left: 0;
    display: flex;
    align-items: center;
    margin: 0 0 20px 20px;
    & .LogoItem {
      height: 80px;
      margin-right: 10px;
      opacity: 0.4;
      transition-duration: 500ms;
      &:hover {
        opacity: 1;
        transform: scale(1.1) translateY(-5px);
        transition-duration: 250ms;
      }
    }
    & .EliteLogo {
      opacity: 0.4;
      margin: -15px 0 0 30px;
      transition-duration: 500ms;
      &:hover {
        opacity: 1;
        transform: scale(1.1) translateY(-5px);
        transition-duration: 250ms;
      }
    }
  `;
  const counterItem = css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #fff;
    opacity: 0.6;
    padding-left: 100px;
    transition-duration: 500ms;
    &:hover {
      opacity: 1;
      transform: scale(1.1) translateY(-5px);
      transition-duration: 250ms;
    }
    & > p {
      font-family: poppins;
      font-size: 52px;
      font-weight: 300;
      line-height: 0;
      padding-bottom: 10px;
      opacity: 0.6;
    }
    & > h6 {
      font-family: poppins;
      font-size: 17px;
      font-weight: 600;
    }
  `;

  // Left Sidebar Indicator
  const LeftBar = css`
    align-items: center;
    margin-left: 40px;
    z-index: 20;
  `;

  return (
    <>
      <NextSeo {...SEO} />
      <IJN.Hero className={heroContainer}>
        <IJN.Layer fluid tl0 className={ParaBG}></IJN.Layer>
        <IJN.Layer fluid>
          <IJN.Section H100>
            <IJN.Container fluid>
              <IJN.Flex>
                <div className={heroText}>
                  <h4
                    ref={(e) => {
                      Text01 = e;
                    }}
                  >
                    Welcome to
                  </h4>
                  <h1
                    ref={(e) => {
                      Text02 = e;
                    }}
                  >
                    NINLAPUN
                  </h1>
                  <h3 ref={(e) => (Text04 = e)}>WEBSITE</h3>
                </div>
              </IJN.Flex>
            </IJN.Container>
            <Object.A b0 l0 className={heroFooter}>
              <div className={heroLogo}>
                <img
                  className="LogoItem"
                  ref={(e) => {
                    Logo01 = e;
                  }}
                  src="/page/home/carousel_realmotion.png"
                />
                <img
                  className="LogoItem"
                  ref={(e) => {
                    Logo02 = e;
                  }}
                  src="/page/home/carousel_arise.png"
                />
                <img
                  className="LogoItem, EliteLogo"
                  ref={(e) => {
                    Logo03 = e;
                  }}
                  src="/page/home/carousel_elite.png"
                />
              </div>
              <IJN.Flex Yic pr={"57px"} z={20}>
                <div className={counterItem} ref={(e) => (Detail01 = e)}>
                  <p>64</p>
                  <h6>COLLABS</h6>
                </div>
                <div className={counterItem} ref={(e) => (Detail02 = e)}>
                  <p>109</p>
                  <h6>PROJECTS</h6>
                </div>
              </IJN.Flex>
            </Object.A>
          </IJN.Section>
        </IJN.Layer>
        <IJN.Layer
          tl0
          fluid
          className={ParaFG}
          ref={(e) => (Layer1 = e)}
        ></IJN.Layer>
        <IJN.Layer t={"40%"} l={"59%"}></IJN.Layer>
        <IJN.Layer
          fluid
          tl0
          className={ParaDust}
          ref={(e) => (Layer2 = e)}
        ></IJN.Layer>
        <IJN.Layer fluid>
          <IJN.Section H100>
            <IJN.Container lg Xs>
              <div className={TextJirayu}>
                <h2 ref={(e) => (Text03 = e)}>JIRAYU</h2>
              </div>
            </IJN.Container>
          </IJN.Section>
        </IJN.Layer>
        <IJN.Layer
          fluid
          style={{ backgroundColor: "#111" }}
          ref={(e) => (SwiperBG = e)}
        ></IJN.Layer>
        <SocialRight opacity={0.6} delay={4.5} />
        <Sidebar
          style={{ zIndex: 500 }}
          ActiveNumber="1"
          title="home"
          height={52}
          main={26}
          next="/about"
          prev="#"
        />
      </IJN.Hero>
    </>
  );
}
