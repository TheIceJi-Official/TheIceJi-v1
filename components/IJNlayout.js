import React, { useState } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// IJN Components
import { IJNnav as Nav, Canvas as NavCanvas } from "components/layout/nav";
import Footer from "components/footer";
import Cursor from "components/cursor";
// import ScrollTop from "components/function/scrollToTop";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "components/context/globalContext";

export default function IJNlayout({ children, SEO }) {
  const dispatch = useGlobalDispatchContext();

  // Cursor State
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  // Navbar Canvas State
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Cursor />
      <Nav
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <NavCanvas
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      {/* <ScrollTop /> */}
      {children}
      <Footer />
    </>
  );
}
