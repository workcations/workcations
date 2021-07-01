import React, { Fragment } from "react";
import Link from "next/link";

import {
  Container,
  About,
  Connect,
  QuickLinks,
  Heading,
  SubFooter,
} from "./footer.style";

const Footer = () => (
  <Fragment>
    <Container>
      <About>
        <Heading>Workcations</Heading>
        <p>
          Started with a vision to transform remote-work life, we at Workcations
          are dedicated to help you embrace a blend of work and vacation like
          never before. We provide a fusion of top notch services along with a
          beautiful view so that you can relish your new work environment.
        </p>
      </About>

      <Connect>
        <Heading>Connect with Us</Heading>
        <div>
          <a href="tel:8928337347" target="_blank" rel="noopener noreferrer">
            <img src="/phone.svg" alt="Call Us" />
            +91-8928337347
          </a>
          <a
            href="mailto:workcations@wanderon.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/mail.svg" alt="Email Us" />
            workcations@wanderon.in
          </a>
          <a
            href="https://www.instagram.com/workcations.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" alt="Instagram" />
            workcations.in
          </a>
          <a
            href="https://www.facebook.com/Workcations.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.svg" alt="Facebook" />
            workcations.in
          </a>
        </div>
      </Connect>
      <QuickLinks>
        <Heading>Quick Links</Heading>
        <div>
          <Link href="/privacy-policy" passHref>
            <a>Privacy Policy</a>
          </Link>
          <Link href="/cancellation" passHref>
            <a>Cancellation Policy</a>
          </Link>
          <Link href="/tnc" passHref>
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/disclaimer" passHref>
            <a>Disclaimer</a>
          </Link>
        </div>
      </QuickLinks>
    </Container>
    <a
      href="https://www.wanderon.in/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SubFooter>A Unit of WanderOn</SubFooter>
    </a>
  </Fragment>
);

export default Footer;

/*

<Destinations>
      <Heading>Destinations</Heading>
      <div>
        <span>Kasol</span>
        <span>Manali</span>
        <span>Pushkar</span>
        <span>Coorg</span>
        <span>Tirthan</span>
      </div>
    </Destinations>
    <Information>
      <Heading>Information</Heading>
      <div>
        <span>About Us</span>
        <span>Work With Us</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Cancellation Policy</span>
        <span>FAQs</span>
      </div>
    </Information>
    */
