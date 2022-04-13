import React, { useState } from "react";
import { css } from "emotion";
import IJN, { Object } from "components/theme/TheIceJI";

export default function sec1() {
  const [show, setshow] = useState([0, 0, 0, 0, 0]);

  const section1 = css`
    padding: 0px 0px 0px 0px;
    position: relative;
    top: 180px;
    z-index: 20;
    & > h1 {
      font-size: 114px;
      font-weight: 1000;
      font-family: poppins;
      color: #303030;
      line-height: 110px;
    }
    & > h1:before {
      position: absolute;
      content: "";
      height: 470px;
      width: 540px;
      background-image: url(/page/about/sec2_bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      bottom: 440px;
      left: -270px;
    }
    & > h4 {
      font-size: 32px;
      font-weight: 700;
      font-family: poppins;
      color: #303030;
    }
    & > span {
      margin-top: 23px;
      display: flex;
    }
    & > span > p {
      align-self: baseline;
      margin: auto 0;
      margin-left: 12px;
      font-size: 23px;
      opacity: 0.6;
    }
  `;

  // 5Part

  // mainPart
  const mainPart = css`
    box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.36);
    & > .innerImg {
      width: 480px;
      height: 600px;
      border-width: 25px;
      border-style: solid;
      border-color: white;
      overflow: hidden;
      position: relative;
      background-color: #7341ff;
    }
    & img {
      transition-duration: 450ms;
      &:hover {
        opacity: 0.4;
        transition-duration: 250ms;
        filter: blur(6px);
        transform: scale(1.1);
      }
    }
    & > .innerImg > h4 {
      width: 100%;
      top: 200px;
      font-size: 50px;
      font-family: "poppins";
      font-weight: 600;
      opacity: ${show[0]};
      z-index: 10;
      color: #fff;
      position: absolute;
      pointer-events: none;
      transition-delay: 100ms;
      transition-duration: 250ms;
      text-align: center;
    }
  `;

  // Second Part
  const partRoll = css`
    & p {
      font-size: 30px;
      color: #7341ff;
    }
    & svg {
      color: #7341ff;
      padding-left: 3px;
    }
  `;

  // Second Part Items
  const secondPartItem = css`
    width: 240px;
    height: 240px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    margin-right: 12px;
    & > .innerImg {
      width: 240px;
      height: 240px;
      border-width: 10px;
      border-style: solid;
      border-color: white;
      overflow: hidden;
      position: relative;
      background-color: #7341ff;
    }
    & img {
      position: absolute;
      height: 100%;
      left: 0px;
      transition-duration: 450ms;
      &:hover {
        opacity: 0.4;
        transition-duration: 250ms;
        transform: scale(1.1);
        filter: blur(6px);
      }
    }
    & > .innerImg > h6 {
      width: 100%;
      top: 80px;
      font-size: 30px;
      font-family: "poppins";
      font-weight: 600;
      z-index: 10;
      color: #fff;
      position: absolute;
      pointer-events: none;
      transition-delay: 100ms;
      transition-duration: 250ms;
      text-align: center;
    }
  `;

  return (
    <>
      <IJN.Section p0 m0 H={900}>
        <IJN.Container xl Xs>
          <IJN.Flex Y Ace W={500} mr={-100} className={section1}>
            <h1>
              5PART-
              <br /> of ME
            </h1>
            <h4>EXPLORE</h4>
            <span>
              <img height="61px" src="/page/about/sec2_profile.png" />

              <p>
                by Jirayu Ninlapun
              </p>
            </span>
          </IJN.Flex>
          <IJN.Flex>
            <Object.D W={480} H={600} className={mainPart}>
              <div className="innerImg">
                <Object.Img
                  posA
                  H100
                  l={-60}
                  onMouseOver={() => setshow([1, 0, 0, 0, 0])}
                  onMouseLeave={() => setshow([0, 0, 0, 0, 0])}
                  src="/delta/featured_music.jpg"
                />
                <h4>
                  Producer <br /> &amp; Singer
                </h4>
              </div>
            </Object.D>
            <Object.D W={492} ml={12}>
              <IJN.Flex mb={12}>
                <div className={secondPartItem}>
                  <div className="innerImg">
                    <Object.Img
                      onMouseOver={() => setshow([0, 1, 0, 0, 0])}
                      onMouseLeave={() => setshow([0, 0, 0, 0, 0])}
                      src="/delta/featured_motion.jpg"
                    />
                    <h6
                    
                      style={{ opacity: `${show[1]}` }}
                    >
                      Motion <br /> Graphics
                    </h6>
                  </div>
                </div>
                <div className={secondPartItem}>
                  <div className="innerImg">
                    <Object.Img
                      onMouseOver={() => setshow([0, 0, 1, 0, 0])}
                      onMouseLeave={() => setshow([0, 0, 0, 0, 0])}
                      src="/delta/featured_graphics.jpg"
                    />
                    <h6
                    
                      style={{ opacity: `${show[2]}` }}
                    >
                      Graphics <br /> Designer
                    </h6>
                  </div>
                </div>
              </IJN.Flex>
              <IJN.Flex>
                <div className={secondPartItem}>
                  <div className="innerImg">
                    <Object.Img
                      onMouseOver={() => setshow([0, 0, 0, 1, 0])}
                      onMouseLeave={() => setshow([0, 0, 0, 0, 0])}
                      src="/delta/featured_photo2.jpg"
                    />
                    <h6
                    
                      style={{ fontSize: 28, opacity: `${show[3]}` }}
                    >
                      Cinemato, <br /> Photographer
                    </h6>
                  </div>
                </div>
                <div className={secondPartItem}>
                  <div className="innerImg">
                    <Object.Img
                      onMouseOver={() => setshow([0, 0, 0, 0, 1])}
                      onMouseLeave={() => setshow([0, 0, 0, 0, 0])}
                      src="/delta/featured_coding.jpg"
                    />
                    <h6
                    
                      style={{ opacity: `${show[4]}` }}
                    >
                      Full-stack <br /> Developer
                    </h6>
                  </div>
                </div>
              </IJN.Flex>
              <IJN.Flex Jce pt={20} className={partRoll}>
                <p>See all</p>
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  className="bi bi-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
                  />
                </svg>
              </IJN.Flex>
            </Object.D>
          </IJN.Flex>
        </IJN.Container>
      </IJN.Section>
    </>
  );
}
