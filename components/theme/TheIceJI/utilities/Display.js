import { css } from "@emotion/core";

// DISPLAY Properties
const Display = (props) =>
  css({
    display: props.dB ? "block" : props.dI ? "inline" : props.dF ? "flex" : "",
  });

export default Display;