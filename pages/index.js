import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { css } from "emotion";
import { TweenMax, Power3 } from "gsap";

export default function index() {
  const router = useRouter();

  let progressBar = useRef(null);
  let logoAnimted = useRef(null);
  let NumberCount = useRef(null);
  let initNumber = { val: 0 },
    NewVal = 100;

  useEffect(() => {
    //   router.prefetch('/home');
    TweenMax.from(progressBar, 5, {
      delay: 1,
      width: 0,
      ease: Power3.easeInOut,
    });
    TweenMax.to(initNumber, 5, {
      delay: 1,
      val: NewVal,
      roundProps: "val",
      _onUpdate: function () {
        NumberCount.innerHTML = initNumber.val;
      },
    });
    TweenMax.from(logoAnimted, 8, {
      delay: 0,
      strokeDasharray: 50,
      ease: Power3.easeInOut,
    });
    TweenMax.to(logoAnimted, 1, {
      delay: 6,
      fill: "#fff",
      ease: Power3.easeInOut,
    });
    router.prefetch("/home");
    setTimeout(() => {router.push("/home")}, 7000);
  }, []);

  const container = css`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #010101;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 60;
  `;
  const inner = css``;
  const logoContainer = css`
    width: 165px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  `;
  const logoFG = css`
    position: absolute;
    & > svg {
      stroke: #fff;
      stroke-dasharray: 100;
      gap: 20;
    }
  `;
  const logoBG = css`
    & > svg {
      stroke: #fff;
      stroke-opacity: 0.5;
    }
  `;
  const loading = css`
    width: 224px;
    height: 10px;
    border: solid 1px #fff;
    border-radius: 5px;
    margin: 20px 0 10px 0;
  `;
  const loadingBar = css`
    width: 218px;
    height: 4px;
    background-color: #fff;
    margin: 2px;
    border-radius: 2px;
  `;
  const percent = css`
    font-family: poppins;
    font-size: 37px;
    font-weight: 600;
    color: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  `;
  const text = css`
    font-family: poppins;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    opacity: 0.8;
  `;
  return (
    <>
      <div className={container}>
        <div className={inner}>
          <div className={logoContainer}>
            <div className={logoFG}>
              <svg ref={(e) => (logoAnimted = e)}>
                <path
                  d="M83.9,78.6L73.4,96.8l18.1,31.3l-8.9,15.5L54.2,94.3L62.4,80l0.8-1.4l0.4-0.6l10.3-17.8h35.8l24.1-41.8H98
	l4.2-7.3L108.6,0h56.6L120,78.6H83.9z M94.8,12.1L25,12.2l0.2,4.2l66.9,0.4L50.9,88.6L36.8,63.9l7.7-13.4l6.9,12.7l19.2-33.5
	L25.7,30l-4.2,7.4L0,0h101.7L94.8,12.1z"
                ></path>
              </svg>
            </div>
            <div className={logoBG}>
              <svg>
                <path
                  d="M83.9,78.6L73.4,96.8l18.1,31.3l-8.9,15.5L54.2,94.3L62.4,80l0.8-1.4l0.4-0.6l10.3-17.8h35.8l24.1-41.8H98
	l4.2-7.3L108.6,0h56.6L120,78.6H83.9z M94.8,12.1L25,12.2l0.2,4.2l66.9,0.4L50.9,88.6L36.8,63.9l7.7-13.4l6.9,12.7l19.2-33.5
	L25.7,30l-4.2,7.4L0,0h101.7L94.8,12.1z"
                ></path>
              </svg>
            </div>
          </div>
          <div className={percent}>
            <h2 ref={(e) => (NumberCount = e)}>0</h2>
            <h2>%</h2>
          </div>
          <div className={loading}>
            <div className={loadingBar} ref={(e) => (progressBar = e)}></div>
          </div>
          <p className={text}>Loading your Experience.</p>
        </div>
      </div>
    </>
  );
}
