import React from "react";
import { css } from "emotion";
import IJN from "components/theme/TheIceJI";

export default function processes() {
  const Items = [
    {
      number: "01",
      icon:
        "M29.792,18.333H11.458V16.042H29.792Zm0,4.583H11.458V20.625H29.792ZM22.917,27.5H11.458V25.208H22.917ZM48.519,55,31.591,38.071a20.674,20.674,0,1,1,6.481-6.481L55,48.519,48.519,55ZM20.625,36.667A16.042,16.042,0,1,0,4.583,20.625,16.061,16.061,0,0,0,20.625,36.667Z",
      topic: "Define the Problem",
      text1: "Clear idea of what the problem is.",
      text2: "Collect sketches, take photographs",
      text3: "and gather data.",
    },
    {
      number: "02",
      icon:
        "M46.021,22.606,50.9,25.452,25.448,40.3,0,25.452l4.88-2.846,20.567,12,20.574-12Zm-20.574,22.6-20.567-12L0,36.057,25.448,50.9,50.9,36.057,46.021,33.21Zm0-40.3,17.036,9.937L25.448,24.784,8.418,14.847,25.448,4.91Zm0-4.91L0,14.847,25.448,29.694,50.9,14.847,25.448,0Z",
      topic: "Collect Information",
      text1: "Collect sketches, take photographs",
      text2: "and gather data to start giving you",
      text3: "inspiration.",
    },
    {
      number: "03",
      icon:
        "M60.173,27.01c0,11.408-9.485,17.45-17.917,17.039a21.711,21.711,0,0,0,.963,9.129l-9.327,2.981c-.847-2.831-2.49-9.583-6.9-13.236a11.67,11.67,0,0,1-14.5-6.586C5.388,36.452,0,31.733,0,24.921,0,14.394,11.543,1,30.061,1,48.946,1,60.173,14.481,60.173,27.01ZM5.034,24.33c-.364,5.9,5.463,7.7,11.132,7.085.842,6.09,7.035,8.221,11.664,6.007,3.889,1.855,6.887,5.942,9.349,12.453l.005.015.278-.09a25.013,25.013,0,0,1,.9-11.353c9.8,1.72,17.172-2.891,16.773-12.1-.416-9.6-9.169-20.085-24.679-20.331C14.66,5.909,5.5,16.68,5.034,24.33ZM25.506,18.1a5.014,5.014,0,1,1,6.734-2.715c3.046,2.284,6.03,4.651,9.026,7.005a6.267,6.267,0,1,1-2.219,6.451c-3.011.246-6.027.434-9.041.637a5.015,5.015,0,1,1-5.461-5.887C24.846,21.76,25.177,19.932,25.506,18.1Zm5.162-.617a4.98,4.98,0,0,1-2.65,1.046L27.108,24a5.027,5.027,0,0,1,2.705,2.951l9.146-.725a6.17,6.17,0,0,1,.657-1.878l-8.948-6.86Z",
      topic: "Brainstorm an Ideas",
      text1: "Begin to sketch, make, and study so I",
      text2: "can start to understand how all the",
      text3: "data may impact our design.",
    },
    {
      number: "04",
      icon:
        "M24.331,0,1,12.726v25.73L24.331,50.9,47.662,38.456V12.864L24.331,0ZM22.21,44.965,8.076,37.425l8.91-5.941c2.291-1.525-.14-5-2.636-3.341l-9.108,6.07V17.456L22.21,26.71ZM7.645,13.935,22.21,5.99v9.388a2.121,2.121,0,0,0,4.242,0V6.013L41.108,14.1,24.342,23.042l-16.7-9.108Zm18.807,12.79L43.42,17.67V34.214l-9.042-6.028c-2.5-1.665-4.927,1.813-2.641,3.338l8.849,5.9L26.452,44.965Z",
      topic: "Develop Solutions",
      text1: "Take preliminary ideas and form",
      text2: "multiple small-scale design ",
      text3: "solutions.",
    },
    {
      number: "05",
      icon:
        "M14.253,43.463a21.2,21.2,0,0,0,22.381.011l2.63,3.355a25.449,25.449,0,0,1-27.641-.011l2.63-3.355ZM50.9,40.3H38.178a4.241,4.241,0,0,1,4.242-4.242h4.242A4.244,4.244,0,0,1,50.9,40.3Zm-38.178,0H0a4.241,4.241,0,0,1,4.242-4.242H8.484A4.244,4.244,0,0,1,12.726,40.3ZM25.452,16.968A11.665,11.665,0,1,0,37.117,28.633,11.666,11.666,0,0,0,25.452,16.968Zm.649,3.888H24.8v1.383c-2.52.348-3.867,1.928-3.867,3.695,0,3.16,3.691,3.642,4.9,4.2,1.646.736,1.34,2.267-.148,2.607a7.919,7.919,0,0,1-4.18-.7l-.59,2.132a8.979,8.979,0,0,0,3.888.942v1.294h1.3V35.045c2.146-.3,3.89-1.485,3.888-3.712,0-2.781-2.893-3.555-5.112-4.6-1.347-.7-1.177-2.371.753-2.484a8.274,8.274,0,0,1,3.167.6l.469-2.136a12.027,12.027,0,0,0-3.165-.545V20.856Zm18.44,4.6a4.772,4.772,0,1,1-4.772,4.772A4.774,4.774,0,0,1,44.541,25.452Zm-38.178,0a4.772,4.772,0,1,1-4.772,4.772A4.774,4.774,0,0,1,6.363,25.452Zm10.6-24V6.009A21.266,21.266,0,0,0,4.67,21.191L.356,21.184A25.509,25.509,0,0,1,16.968,1.451Zm16.968,0A25.509,25.509,0,0,1,50.547,21.184l-4.314.006a21.266,21.266,0,0,0-12.3-15.182V1.451Zm-2.121,13.4H19.089A4.241,4.241,0,0,1,23.331,10.6h4.242a4.244,4.244,0,0,1,4.242,4.242ZM25.452,0A4.772,4.772,0,1,1,20.68,4.772,4.774,4.774,0,0,1,25.452,0Z",
      topic: "Gather Feedback",
      text1: "Present our ideas to as many people",
      text2: "as possible and insightful comments",
      text3: "and collect.",
    },
    {
      number: "06",
      icon:
        "M22.106,42.212h4.221v8.442H22.106Zm6.026,0,7.218,8.442h5.544l-7.206-8.442H28.132ZM7.5,50.654h5.544l7.218-8.442H14.71ZM23.541,18.98,26.7,22.14,33.855,15l1.76,1.752,1.264-6.2L30.548,11.71l1.809,1.8-5.646,5.654L23.545,16,15.8,23.641l1.488,1.5,6.249-6.157ZM36.88,27.438H13.663V10.553H11.553v19H36.88ZM47.433,6.332H45.322V37.99H3.111V6.332H1V0H47.433Zm-6.332,0H7.332V33.769H41.1Z",
      topic: "Improve",
      text1: "Reflect on all of my feedback and ",
      text2: "decide if or to what extent it should ",
      text3: "be incorporated.",
    },
  ];

  const mainContainer = css`
    background-color: #111;
    margin-top: -40px;
    padding-bottom: 100px;
  `;
  const Decor01 = css`
    position: relative;
    width: 20px;
    & h1 {
      color: #fff;
      position: absolute;
      left: 0;
      transform: rotate(90deg) translate(60px, 80px);
    }
  `;
  const Decor02 = css`
    position: relative;
    width: 20px;
    & > div {
      color: #fff;
      position: absolute;
      left: -10px;
      bottom: 32px;
    }
    & svg {
      margin-top: 32px;
    }
  `;

  const ProcessItem = css`
    width: calc((100% - 64px) / 3);
    height: 458px;
    background-color: #fff;
    margin: 0 32px 32px 0;
    overflow: hidden;
    transition-duration: 250ms;
    &:hover {
      background-color: #7341ff;
      transform: translateY(-20px) scale(1.05) rotate(-4deg);
      transition-duration: 250ms;
      & h1 {
        color: #fff;
        &:before {
          color: #fff;
        }
      }
      & p {
        color: #fff;
      }
      & a {
        color: #fff !important;
        &:after {
          background-color: #fff;
        }
      }
    }
  `;
  const Layer01 = css``;

  const ProcessContent = css`
    & > h1 {
      font-family: poppins;
      font-size: 30px;
      color: #1f1f29;
      margin-left: -30px;
    }
    & > h1:before {
      content: ">_";
      position: relative;
      font-family: poppins;
      color: #69686d;
      font-size: 30px;
      font-weight: 400;
      left: -14px;
      opacity: 0.6;
    }
    & > p {
      font-family: poppins;
      color: #1f1f29;
      font-size: 16px;
      font-weight: 300;
      line-height: 36px;
      padding: 24px 0;
    }
    & > a {
      font-family: poppins;
      color: #7341ff !important;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      position: relative;
    }
    & > a:after {
      content: "";
      position: absolute;
      background-color: #7341ff;
      height: 3px;
      width: 100%;
      left: 0;
      bottom: -7px;
    }
  `;

  const ProcessIcon = css`
    position: absolute;
    top: 52px;
    right: 67px;
    width: 55px;
    fill: #e8e8e8;
  `;

  const ProcessNumber = css`
    position: absolute;
    top: -120px;
    left: -60px;
    font-family: poppins;
    font-size: 255px;
    color: #f7f8fa;
  `;

  return (
    <div className={mainContainer}>
      <IJN.Section>
        <IJN.Container xl>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
              >
                <path d={Items[0].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[0].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[0].topic}</h1>
                <p>
                  {Items[0].text1}
                  <br />
                  {Items[0].text2}
                  <br />
                  {Items[0].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
              >
                <path d={Items[1].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[1].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[1].topic}</h1>
                <p>
                  {Items[1].text1}
                  <br />
                  {Items[1].text2}
                  <br />
                  {Items[1].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60.173 55.159"
              >
                <path d={Items[2].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[2].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[2].topic}</h1>
                <p>
                  {Items[2].text1}
                  <br />
                  {Items[2].text2}
                  <br />
                  {Items[2].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <div className={Decor01}>
            <h1>Processes</h1>
          </div>
        </IJN.Container>
        <IJN.Container xl>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
              >
                <path d={Items[3].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[3].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[3].topic}</h1>
                <p>
                  {Items[3].text1}
                  <br />
                  {Items[3].text2}
                  <br />
                  {Items[3].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
              >
                <path d={Items[4].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[4].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[4].topic}</h1>
                <p>
                  {Items[4].text1}
                  <br />
                  {Items[4].text2}
                  <br />
                  {Items[4].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <IJN.Flex posR Jcc Aie pb={60} className={ProcessItem}>
            <IJN.Layer fluid t0 className={Layer01}>
              <svg
                className={ProcessIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
              >
                <path d={Items[5].icon} />
              </svg>
              <h1 className={ProcessNumber}>{Items[5].number}</h1>
            </IJN.Layer>
            <IJN.Layer>
              <div className={ProcessContent}>
                <h1>{Items[5].topic}</h1>
                <p>
                  {Items[5].text1}
                  <br />
                  {Items[5].text2}
                  <br />
                  {Items[5].text3}
                </p>
                <a>LEARN MORE</a>
              </div>
            </IJN.Layer>
          </IJN.Flex>
          <div className={Decor02}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.418"
                height="14.542"
                viewBox="0 0 24.418 14.542"
              >
                <g transform="translate(-1648.673 -1812.673)" opacity="0.4">
                  <line
                    y1="8.887"
                    x2="9.382"
                    transform="translate(1651.5 1815.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <line
                    x1="9.382"
                    y1="8.887"
                    transform="translate(1660.882 1815.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.418"
                height="14.542"
                viewBox="0 0 24.418 14.542"
              >
                <g transform="translate(1673.091 1827.215) rotate(180)">
                  <line
                    y1="8.887"
                    x2="9.382"
                    transform="translate(1651.5 1815.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <line
                    x1="9.382"
                    y1="8.887"
                    transform="translate(1660.882 1815.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </g>
              </svg>
            </div>
          </div>
        </IJN.Container>
      </IJN.Section>
    </div>
  );
}
