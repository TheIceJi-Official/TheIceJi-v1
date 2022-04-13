import React from "react";
import { css } from "emotion";
import IJN, { Object } from "components/theme/TheIceJI";

export default function Info() {
  const MainContainer = css`
    margin-top: -420px;
    overflow: hidden;
  `;
  const section1 = css`
    padding: 220px 0px 0px 0px;
    & h1 {
      font-size: 80px;
      font-weight: 1000;
      font-family: poppins;
      color: #303030;
    }
    & h1:before {
      position: absolute;
      content: "";
      height: 470px;
      width: 470px;
      background-image: url(/page/about/sec1_bg.png);
      background-repeat: no-repeat;
      top: 100px;
      left: -280px;
    }
    & p {
      font-size: 28px;
      padding-top: 5%;
      opacity: 0.6;
    }
  `;
  const section2 = css`

    & img {
      border-style: solid;
      border-color: white;
    }
    .about-sec2-p1 {
      height: 600px;
      & > img {
        border-width: 13px;
        box-shadow: 20px 40px 60px rgba(0, 0, 0, 0.4);
      }
    }
    .about-sec2-p2 {
      & > img {
        border-width: 13px;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.32);
      }
    }
  `;
  return (
    <>
      <IJN.Section p0 H={'900px'} Ys className={MainContainer}>
        <IJN.Container Xs xl>
            <IJN.Div W={750} posR className={section1}>
              <h4>My name is</h4>
              <h1>JIRAYU NINLAPUN</h1>
              <p>
                "Time" is a non reusable resource. I have many things that I
                want to do, then I do. It make me to generalist. I'm not
                stopping Self-development and that's reason why I am I.
              </p>
            </IJN.Div>
            <IJN.Div posR className={section2}>
              <Object.A l={60} className="about-sec2-p2">
                <img src="/page/about/sec1_p2.png" />
              </Object.A>
              <Object.A t={500} l={-30} className="about-sec2-p1">
                <img src="/page/about/sec1_p1.png" />
              </Object.A>
            </IJN.Div>
        </IJN.Container>
      </IJN.Section>
    </>
  );
}
