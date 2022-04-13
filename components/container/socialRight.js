import React, { useEffect, useRef } from "react";
import { css } from "emotion";
import IJN from "components/theme/TheIceJI";
import { TweenMax, Power3 } from "gsap";

export default function socialRight(props) {
  let Social01 = useRef(null);
  let Social02 = useRef(null);
  let Social03 = useRef(null);
  let Social04 = useRef(null);
  let Social05 = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom(
      [Social01, Social02, Social03, Social04, Social05],
      0.5,
      {
        delay: props.delay,
        x: 150,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, []);

  // Right - Social Media
  const RightSocial = css`
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 64px;
    & > a {
      height: 48px;
      color: #fff;
      opacity: ${props.opacity};
      transition-duration: 500ms;
    }
    & > a:hover {
      opacity: 1;
      transform: scale(2);
      transition-duration: 150ms;
    }
  `;
  return (
    <>
      <IJN.Layer fluid>
        <div className={RightSocial}>
          <a href="https://www.facebook.com/jirayunlp">
            <i ref={(e) => (Social01 = e)} className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/nlp_jirayu/">
            <i ref={(e) => (Social02 = e)} className="fa fa-instagram"></i>
          </a>

          <a href="https://www.youtube.com/channel/UCkuktA0dNvT9Te3-V0nl9zg">
            <i ref={(e) => (Social03 = e)} className="fa fa-youtube-play"></i>
          </a>
          <a href="https://m.me/jirayunlp">
            <i ref={(e) => (Social04 = e)} className="fa fa-comment"></i>
          </a>
          <a href="mailto:Jirayu.Ninl@gmail.com">
            <i ref={(e) => (Social05 = e)} className="fa fa-envelope"></i>
          </a>
        </div>
      </IJN.Layer>
    </>
  );
}
