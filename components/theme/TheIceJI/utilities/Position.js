import { css } from "@emotion/core";

// POSITION Properties
const Position = (props) =>
  css({
    position: props.posR
      ? "relative"
      : props.posA
      ? "absolute"
      : props.posF
      ? "fixed"
      : props.posS
      ? "sticky"
      : "",
  });

export default Position;