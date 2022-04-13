import { css } from "emotion";
import IJN from "components/theme/TheIceJI";

export default function Hobbies() {
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
      background-image: url(/page/about/sec4_bg.png);
      background-repeat: no-repeat;
      background-size: cover;
      bottom: -30px;
      left: -290px;
    }
  `;
  const CardItem = css`
    margin-bottom: 24px;
    z-index: 10;
    width: 250px;
    height: 250px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    transition-duration: 150ms;
    align-items: center;
    text-align: center;
    color: #000;
    &:hover {
      background-color: #7341ff;
      transition-duration: 250ms;
      color: #fff;
      box-shadow: 4px 20px 50px rgba(115, 65, 255, 0.26);
      transform: scale(1.05);
      & svg {
        color: #fff;
      }
    }
    & svg {
      color: #7341ff;
    }
    & p {
      font-family: "poppins";
      font-size: 20px;
      font-weight: 600;
      padding-top: 20px;
    }
  `;
  return (
    <>
      <IJN.Section H={1000}>
        <IJN.Container xl Xs>
            <div className={SectionTitle}>
              <h1>HOBBIES</h1>
            </div>
        </IJN.Container>
        <IJN.Container xl>
              <IJN.Div mr={24}>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
                      />
                    </svg>
                    <p>Piano</p>
                  </div>
                </div>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.018 7.5h2.49c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM2.255 4H4.09a9.266 9.266 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.024 7.024 0 0 0 2.255 4zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V1.077zM7.5 5H4.847a12.5 12.5 0 0 0-.338 2.5H7.5V5zm1 2.5V5h2.653c.187.765.306 1.608.338 2.5H8.5zm-1 1H4.51a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm1 2.5V8.5h2.99a12.495 12.495 0 0 1-.337 2.5H8.5zm-1 1H5.145c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm-2.173 2.472a6.695 6.695 0 0 1-.597-.933A9.267 9.267 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 11H3.82a13.651 13.651 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm8.999 3.472A7.024 7.024 0 0 0 13.745 12h-1.834a9.278 9.278 0 0 1-.641 1.539 6.688 6.688 0 0 1-.597.933zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855A7.98 7.98 0 0 0 10.855 12zm1.325-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm.312-3.5h2.49a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.91 4a9.277 9.277 0 0 0-.64-1.539 6.692 6.692 0 0 0-.597-.933A7.024 7.024 0 0 1 13.745 4h-1.834zm-1.055 0H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
                      />
                    </svg>
                    <p>Explore</p>
                  </div>
                </div>
              </IJN.Div>
              <IJN.Div mr={24}>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                      <path
                        fillRule="evenodd"
                        d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"
                      />
                      <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                    </svg>
                    <p>Music</p>
                  </div>
                </div>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                      />
                      <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                    <p>Photograph</p>
                  </div>
                </div>
              </IJN.Div>
              <IJN.Div mr={24}>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"
                      />
                    </svg>
                    <p>Movie</p>
                  </div>
                </div>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
                      />
                    </svg>
                    <p>Learning</p>
                  </div>
                </div>
              </IJN.Div>
              <IJN.Div>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 1H1v8h4V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2H9v5h5V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13H3v2h2v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1H9v2h6v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"
                      />
                    </svg>
                    <p>Design</p>
                  </div>
                </div>
                <div className={CardItem}>
                  <div>
                    <svg
                      width="3em"
                      height="3em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.497 5.942l.959 8.155c.014.118.06.181.101.21C5.912 14.555 6.724 15 8 15s2.088-.445 2.443-.693c.04-.029.087-.092.101-.21l.96-8.155.993.116-.96 8.156a1.279 1.279 0 0 1-.52.912C10.53 15.466 9.522 16 8 16s-2.531-.534-3.016-.874a1.279 1.279 0 0 1-.521-.912l-.96-8.156.994-.116z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.467 6.116l.005-.006a.024.024 0 0 1-.005.006zM4.645 6c.146-.073.362-.15.648-.222C5.967 5.61 6.924 5.5 8 5.5c1.076 0 2.033.11 2.707.278.286.072.502.149.648.222-.146.073-.362.15-.648.222C10.033 6.39 9.076 6.5 8 6.5c-1.076 0-2.033-.11-2.707-.278A3.284 3.284 0 0 1 4.645 6zm6.888.116s-.003-.002-.005-.006l.005.006zm-.005-.226a.026.026 0 0 1 .005-.006l-.005.006zm-7.056 0l-.005-.006s.003.002.005.006zm.578-1.082C5.824 4.614 6.867 4.5 8 4.5c1.133 0 2.176.114 2.95.308.383.096.728.218.99.372.228.135.56.396.56.82 0 .424-.332.685-.56.82-.262.154-.607.276-.99.372-.774.194-1.817.308-2.95.308-1.133 0-2.176-.114-2.95-.308-.383-.096-.728-.218-.99-.372-.228-.135-.56-.396-.56-.82 0-.424.332-.685.56-.82.262-.154.607-.276.99-.372z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.964 1.314a.5.5 0 0 1-.278.65l-2.255.902-.943 4.242-.976-.216 1-4.5a.5.5 0 0 1 .302-.356l2.5-1a.5.5 0 0 1 .65.278z"
                      />
                    </svg>
                    <p>Coffee</p>
                  </div>
                </div>
              </IJN.Div>
        </IJN.Container>
      </IJN.Section>
    </>
  );
}
