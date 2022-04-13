import { css } from "@emotion/core";

// Z-INDEX
const zIndex = (props) =>
  css({
    zIndex: props.z ? props.z : "",
  });

export default zIndex;