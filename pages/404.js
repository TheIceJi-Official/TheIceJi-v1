import React from "react";
import { css } from "emotion";

export default function NotFound() {
  const container = css`
    background-color: #000;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    & h1 {
        font-size: 60px;
        font-weight: 600;
    }
    & h2 {
        font-size: 40px;
        font-weight: 400;
        opacity: 0.6;
    }
  `;
  return (
    <div className={container}>
      <h1>Please stay tuned!</h1>
      <h2>Under construction</h2>
    </div>
  );
}
