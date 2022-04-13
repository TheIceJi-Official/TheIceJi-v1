import React from "react";
import Router from "next/router";

//nprogress module
import NProgress from "nprogress";

// IJN Components
import IJNlayout from "components/IJNlayout";

// Global Context
import { GlobalProvider } from "components/context/globalContext";
// import SmoothScroll from "components/hooks/useSmoothScroll";

// IJN CSS
import "assets/styles/index.css";

// NProgress - loading screen
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function IJNapp({ Component, pageProps, SEO }) {

  return (
    <GlobalProvider>
      <IJNlayout {...SEO}>
        {/* <SmoothScroll> */}
          <Component {...pageProps} />
        {/* </SmoothScroll> */}
      </IJNlayout>
    </GlobalProvider>
  );
}
