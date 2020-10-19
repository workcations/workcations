import React, { Fragment } from "react";
import Head from "next/head";

import Header from "../header/header";
import CallIcon from "../call-icon/call";
import ContactPopup from "../contact-popup/contact-popup";
import Footer from "../footer/footer";

import { Container } from "./layout.style";

import Pixel from "../pixel/index";

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Container>
      <Pixel name="FACEBOOK_PIXEL_1" />
      {children}
      <Header />
      <CallIcon />
      <ContactPopup />
      <Footer />
    </Container>
  </Fragment>
);

export default Layout;
