import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
import Router from "next/router";
import IJN from "components/theme/TheIceJI";
import { css } from "emotion";
import { TweenMax, Power3 } from "gsap";

export default function sideIndicator(props) {
  let BarActive = useRef(null);
  let SideBar = useRef(null);

  const [ButtonNext, setButtonNext] = useState([0.7, 1, "scale(1.1)"]);
  const [ButtonPrev, setButtonPrev] = useState([0.3, 1, "scale(1.1)"]);
  const [SlideState, setSlideState] = useState(1);

  let SliderHight = "52px";

  useEffect(() => {
    // TweenMax.from(SideBar, 2, {
    //   delay: 1,
    //   x: -200,
    //   ease: Power3.easeInOut,
    // });

    if (props.title == "home") {
      TweenMax.to(BarActive, 2, {
        delay: 0,
        height: 26,
        ease: Power3.easeInOut,
      });
      setButtonNext([0.6, 1, "scale(1.1)"]);
      setButtonPrev([0.3, 0.3, "scale(1)"]);
      setSlideState(1);
    } else if (props.title == "about") {
      TweenMax.to(BarActive, 2, {
        delay: 0,
        height: 52,
        ease: Power3.easeInOut,
      });
      setButtonNext([0.6, 1, "scale(1.1)"]);
      setButtonPrev([0.6, 1, "scale(1.1)"]);
      setSlideState(2);
    } else if (props.title == "services") {
      TweenMax.to(BarActive, 2, {
        delay: 0,
        height: 78,
        ease: Power3.easeInOut,
      });
      setButtonNext([0.3, 0.3, "scale(1)"]);
      setButtonPrev([0.6, 1, "scale(1.1)"]);
      setSlideState(3);
    } else {
    }
  }, []);

  const GoNext = () => {
    if (SlideState == 1) {
      Router.push("/about");
    } else if (SlideState == 2) {
      let SliderHight = "78px";
      Router.push("/services");
    } else {
    }
  };
  const GoPrev = () => {
    if (SlideState == 3) {
      Router.push("/about");
    } else if (SlideState == 2) {
      Router.push("/home");
    } else {
    }
  };
  
  let currentHeight = props.height

  const sliderBar = css`
    position: relative;
    height: 78px;
  `;
  const sliderBarBG = css`
    position: absolute;
    background-color: #fff;
    height: 78px;
    width: 2px;
    opacity: 0.2;
  `;
  const sliderBarActive = css`
    position: absolute;
    background-color: #fff;
    height: ${SlideState == 1
      ? props.height + "px"
      : SlideState == 3
      ? props.height + "px"
      : props.height > currentHeight
      ? "26px"
      : currentHeight > props.height
      ? "78px"
      : ""};
    width: 2px;
    opacity: 1;
  `;

  const numberIndicator = css`
    display: flex;
    transform: rotate(90deg) translate(70px, 5px);
    & h4 {
      font-family: "poppins";
      font-weight: 600;
      color: #fff;
      font-size: 17px;
      padding-right: 11px;
    }
    & h4:not(.currentSlide) {
      opacity: 0.3;
    }
  `;

  const SlideSwitcher = css`
    margin-bottom: 45px;
    & > div {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      border: solid 3px #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: 250ms;
      transition-timing-function: ease;
    }
  `;

  const NextSlide = css`
    margin-bottom: 12px;
    opacity: ${ButtonNext[0]};
    &:hover {
      opacity: ${ButtonNext[1]};
      transform: ${ButtonNext[2]};
    }
  `;

  const PrevSlide = css`
    opacity: ${ButtonPrev[0]};
    &:hover {
      opacity: ${ButtonPrev[1]};
      transform: ${ButtonPrev[2]};
    }
  `;

  return (
    <IJN.Layer H100vh style={{ width: 150 }} dF Y Jc>
      <IJN.Flex H={350} Y Ac ref={(e) => (SideBar = e)}>
        <div className={SlideSwitcher}>
          <div className={NextSlide} onClick={GoNext}>
            <a>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#fff"
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
            </a>
          </div>
          <div className={PrevSlide} onClick={GoPrev}>
            <a>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </a>
          </div>
        </div>
        <IJN.Div>
          <div className={sliderBar}>
            <div className={sliderBarBG} />
            <div className={sliderBarActive} ref={(e) => (BarActive = e)} />
          </div>
        </IJN.Div>
        <div className={numberIndicator}>
          <h4 className="currentSlide">0{props.ActiveNumber}</h4>
          <h4>/</h4>
          <h4>03</h4>
        </div>
      </IJN.Flex>
    </IJN.Layer>
  );
}
