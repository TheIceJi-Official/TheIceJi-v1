import React from "react";
import { css } from "emotion";
import IJN, { Card } from "components/theme/TheIceJI";
import Tilt from "react-parallax-tilt";

export default function Gallery() {
  const SectionTitle = css`
    position: relative;
    & h1 {
      font-size: 114px;
      font-weight: 1000;
      font-family: poppins;
      color: #303030;
      padding-bottom: 30px;
    }
    & h1:after {
      content: "";
      position: absolute;
      mix-blend-mode: darken;
      margin: 100px 0 0 -10px;
      left: 0;
      width: 150px;
      height: 30px;
      background: #7341ff;
    }
    & > h1:before {
      position: absolute;
      content: "";
      height: 500px;
      width: 540px;
      background-image: url(/page/about/sec3_bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      top: -150px;
      left: -290px;
    }
  `;
  const CardItem = css`
    box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.06);
    transition-duration: 750ms;
    &:hover {
      box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
      transition-duration: 250ms;
    }
    /* margin-right: -20px; */
  `;
  const seeAll = css`
    & > p {
      font-size: 30px;
      color: #7341ff;
    }
    & > svg {
      color: #7341ff;
      padding-left: 3px;
    }
  `;
  return (
    <>
      <IJN.Section H={1000} style={{ overflow: "hidden" }}>
        <IJN.Container xl Xs>
          <div className={SectionTitle}>
            <h1>GALLERY</h1>
          </div>
        </IJN.Container>
        <IJN.Container>
          <IJN.Flex W={2200} Jb>
            <Tilt>
              <Card.Container pA={"24px"} W={"23rem"} className={CardItem}>
                <div>
                  <Card.Img src="/delta/featured_photo2.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Hold my CAM!!</Card.Title>
                  <p>Mar 7, 2019</p>
                </Card.Body>
              </Card.Container>
            </Tilt>
            <Tilt>
              <Card.Container pA={"24px"} W={"23rem"} className={CardItem}>
                <div>
                  <Card.Img src="/delta/featured_002.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Rellax, but not Lellax</Card.Title>
                  <p>Aug 7, 2017</p>
                </Card.Body>
              </Card.Container>
            </Tilt>
            <Tilt>
              <Card.Container pA={"24px"} W={"23rem"} className={CardItem}>
                <div>
                  <Card.Img src="/delta/featured_001.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Yeahhh, pretty cool</Card.Title>
                  <p>Feb 1, 2020</p>
                </Card.Body>
              </Card.Container>
            </Tilt>
            <Tilt>
              <Card.Container pA={"24px"} W={"23rem"} className={CardItem}>
                <div>
                  <Card.Img src="/delta/featured_music2.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Sing some song</Card.Title>
                  <p>Nov 15, 2019</p>
                </Card.Body>
              </Card.Container>
            </Tilt>
            <Tilt>
              <Card.Container pA={"24px"} W={"23rem"} className={CardItem}>
                <div>
                  <Card.Img src="/delta/featured_Starwars.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>May the force be with you</Card.Title>
                  <p>Oct 21, 2019</p>
                </Card.Body>
              </Card.Container>
            </Tilt>
          </IJN.Flex>
        </IJN.Container>
        <IJN.Container fluid Xe>
          <IJN.Flex
            pt={60}
            style={{ alignSelf: "flex-end" }}
            className={seeAll}
          >
            <p>Explore gallery</p>
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
        </IJN.Container>
      </IJN.Section>
    </>
  );
}
