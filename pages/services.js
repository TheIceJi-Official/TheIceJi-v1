import React, { useRef, useEffect } from "react";
import { NextSeo } from "next-seo";
import { css } from "emotion";
import IJN, { Object } from "components/theme/TheIceJI";
// IJN Components
import Sidebar from "components/container/sideIndicator";
import SocialRight from "components/container/socialRight";
import Processes from "components/container/services/processes";
// GSAP
import { TweenMax, Power3 } from "gsap";

export default function index() {
  const SEO = {
    title: "TheIceJI - Services",
    description: "Services, Process, Clients, Partners, and Testimonial",
  };

  let heroT1 = useRef(null);
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
    TweenMax.to(heroT1, 2, {
      delay: 1,
      opacity: 1,
      y: -500,
      ease: Power3.easeInOut,
    });
    TweenMax.from(heroT1, 2, {
      delay: 1,
      skewY: 10,
      ease: Power3.easeInOut,
    });
  });

  const HeroBG = css`
    background-image: url(/page/services/hero_bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `;

  const HeroFG = css`
    background-image: url(/page/services/hero_fg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    pointer-events: none;
  `;

  const mainContainer = css`
    width: 80%;
    fill: #fff;
    & {
      transform: translateY(500px);
    }
  `;

  const BGfade = css`
    width: 100%;
    height: 372px;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(17, 17, 17, 1) 0%,
      rgba(17, 17, 17, 0) 100%
    );
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
      <IJN.Hero H100>
        <IJN.Layer fluid className={HeroBG}></IJN.Layer>
        <IJN.Layer W100 H={"60vh"} dF Jc Ac>
          <IJN.Flex Y className={mainContainer}>
            <svg
              ref={(e) => (heroT1 = e)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1407.575 221.125"
            >
              <path
                d="M172.935-60.7a59.452,59.452,0,0,1-8.693,31.415q-8.692,14.335-25.62,22.875T97.6,2.135q-36.3,0-59.78-17.69T12.2-64.965H67.71q1.22,12.2,8.692,19.215t19.063,7.015q10.065,0,15.86-5.49t5.795-14.64a18.9,18.9,0,0,0-5.337-13.725,41.849,41.849,0,0,0-13.268-9q-7.93-3.508-21.96-8.388a269.613,269.613,0,0,1-33.4-13.572,61.51,61.51,0,0,1-22.265-19.52q-9.3-12.962-9.3-33.7,0-19.215,9.76-33.245t26.992-21.5q17.233-7.473,39.5-7.473,35.99,0,57.188,17.08t23.942,46.97H112.545q-1.525-10.675-7.778-16.928T87.84-178.12q-9.15,0-14.792,4.88t-5.643,14.335a18.2,18.2,0,0,0,5.032,12.963A38.352,38.352,0,0,0,85.1-137.25q7.625,3.355,21.96,8.54,20.74,7.015,33.855,13.878a64.765,64.765,0,0,1,22.57,19.978Q172.935-81.74,172.935-60.7Zm81.13-113.46v45.14h72.9V-89.67h-72.9v47.885H336.11V0H201.91V-215.635h134.2v41.48ZM476.41,0,429.745-81.435h-11.9V0H365.7V-215.635h89.06q25.62,0,43.31,8.845T524.6-182.543q8.845,15.4,8.845,35.228,0,23.485-12.962,39.955T482.815-84.79L534.055,0ZM417.85-117.12h32.33q15.555,0,22.875-6.863t7.32-20.282q0-12.81-7.472-20.13t-22.723-7.32H417.85Zm182.085-98.515L652.7-53.375l52.765-162.26H761.28L686.25,0h-67.4L544.12-215.635Zm233.63,0V0H781.41V-215.635ZM968.07-217.77q41.175,0,68.167,21.655t34.922,58.56h-55.2A50.652,50.652,0,0,0,997.2-161.04q-12.658-8.54-30.043-8.54-22.875,0-36.9,16.775T916.22-107.97q0,28.06,14.03,44.682t36.9,16.622q17.385,0,30.043-8.54a50.87,50.87,0,0,0,18.758-23.18h55.2q-7.93,36.6-34.922,58.408T968.07,1.83q-31.415,0-55.205-13.878a94.2,94.2,0,0,1-36.753-38.888Q863.15-75.945,863.15-107.97t12.962-57.035a94.2,94.2,0,0,1,36.753-38.887Q936.655-217.77,968.07-217.77ZM1152.6-174.155v45.14h72.9V-89.67h-72.9v47.885h82.045V0h-134.2V-215.635h134.2v41.48ZM1419.165-60.7a59.452,59.452,0,0,1-8.693,31.415q-8.693,14.335-25.62,22.875t-41.023,8.54q-36.295,0-59.78-17.69t-25.62-49.41h55.51q1.22,12.2,8.693,19.215t19.063,7.015q10.065,0,15.86-5.49t5.8-14.64a18.9,18.9,0,0,0-5.338-13.725,41.849,41.849,0,0,0-13.267-9q-7.93-3.508-21.96-8.388a269.614,269.614,0,0,1-33.4-13.572,61.509,61.509,0,0,1-22.265-19.52q-9.3-12.962-9.3-33.7,0-19.215,9.76-33.245t26.993-21.5q17.232-7.473,39.5-7.473,35.99,0,57.188,17.08t23.943,46.97h-56.425q-1.525-10.675-7.778-16.928t-16.927-6.253q-9.15,0-14.792,4.88t-5.642,14.335a18.2,18.2,0,0,0,5.032,12.963,38.351,38.351,0,0,0,12.657,8.693q7.625,3.355,21.96,8.54,20.74,7.015,33.855,13.878a64.765,64.765,0,0,1,22.57,19.978Q1419.165-81.74,1419.165-60.7Z"
                transform="translate(-11.59 218.99)"
              />
            </svg>
          </IJN.Flex>
        </IJN.Layer>
        <IJN.Layer fluid t0 className={HeroFG}></IJN.Layer>
        <IJN.Layer
          fluid
          style={{ backgroundColor: "#111" }}
          ref={(e) => (SwiperBG = e)}
        ></IJN.Layer>
        <IJN.Layer W100 className={BGfade}></IJN.Layer>
        <SocialRight opacity={0.6} delay={2.5} />
        <Sidebar
          style={{ zIndex: 500 }}
          ActiveNumber="3"
          title="services"
          height={52}
          main={78}
          next="#"
          prev="/about"
        />
      </IJN.Hero>
      <Processes />
    </div>
  );
}
