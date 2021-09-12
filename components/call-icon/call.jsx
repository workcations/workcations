import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import * as gtag from "../ga";

import { useDispatch, useSelector } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";
import {
  selectPopupHidden,
  selectPopupPosition,
} from "../../redux/contact-popup/contact-popup.selectors";

import {
  Container,
  ContainerMobile,
  PopupMobile,
  PopupItem,
} from "./call.style";

const CallIcon = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectPopupHidden);
  const iconPosition = useSelector(selectPopupPosition);
  const [showMobilePopup, setMobilePopup] = useState(false);

  const isServer = typeof window === "undefined";

  const handleScroll = () => {
    if (isServer || !showMobilePopup) return;
    if (screen.height - window.pageYOffset < 250) {
      setMobilePopup(false);
    }
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  /*useEffect(() => {
    let showPopup;
    showPopup = setTimeout(() => {
      dispatch(toggleContactPopupHidden());

      gtag.event({
        category: "Contact Form Popup after 5 minutes",
        action: "Contact Form Popup after 5 minutes",
        label: "Contact Form Popup after 5 minutes",
      });

      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("717219922161498");

          ReactPixel.trackCustom("Contact Form Popup after 5 minutes", {
            action: "Contact Form Popup after 5 minutes",
          });
        });
    }, 300000);
  }, []);*/

  const sendWhatsAppEvent = () => {
    gtag.event({
      category: "WhatsApp Button Clicked",
      action: "WhatsApp Button Clicked",
      label: "WhatsApp Button Clicked",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Contact", {
          action: "WhatsApp Button Clicked",
        });
      });
  };

  const sendCallNowEvent = () => {
    gtag.event({
      category: "Call Now Button Clicked",
      action: "Call Now Button Clicked",
      label: "Call Now Button Clicked",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Contact", {
          action: "Call Now Button Clicked",
        });
      });
  };

  const sendRequestACallBackEvent = () => {
    gtag.event({
      category: "Request A Call Back Button Clicked",
      action: "Request A Call Back Button Clicked",
      label: "Request A Call Back Button Clicked",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Contact", {
          action: "Request A Call Back Button Clicked",
        });
      });
  };

  const sendContactUsEvent = () => {
    gtag.event({
      category: "Contact Us Button Clicked",
      action: "Contact Us Button Clicked",
      label: "Contact Us Button Clicked",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Contact", {
          action: "Contact Us Button Clicked",
        });
      });
  };

  const sendVirtualPageView = (url) => {
    gtag.pageview(`/${url}`);
  };

  return (
    <Fragment>
      <Container
        onClick={() => {
          dispatch(toggleContactPopupHidden());
          sendRequestACallBackEvent();
          sendVirtualPageView(`request-a-callback-button-clicked`);
        }}
        hidden={hidden}
        iconPosition={iconPosition}
      >
        <img src="/phone.svg" alt="Request a Call Back" />
      </Container>
      <ContainerMobile
        onClick={() => {
          setMobilePopup(!showMobilePopup);
          sendContactUsEvent();
          sendVirtualPageView(`contact-us-button-clicked`);
        }}
        hidden={hidden}
        iconPosition={iconPosition}
      >
        <img src="/phone.svg" alt="Request a Call Back" />
      </ContainerMobile>
      <PopupMobile isActive={showMobilePopup}>
        <PopupItem
          onClick={() => {
            setMobilePopup(!showMobilePopup);
            dispatch(toggleContactPopupHidden());
            sendRequestACallBackEvent();
            sendVirtualPageView(`request-a-callback-button-clicked`);
          }}
        >
          <img src="/call-back.svg" alt="request a call back" />
          <span>Request A Call Back</span>
        </PopupItem>
        <Link
          href="https://wa.me/918928337347?text=I'm%20interested%20in%20workcations"
          passHref
        >
          <PopupItem
            target="_blank"
            onClick={() => {
              setMobilePopup(!showMobilePopup);
              sendWhatsAppEvent();
              sendVirtualPageView(`whatsapp-button-clicked`);
            }}
          >
            <img src="/whatsapp.svg" alt="whatsapp" />
            <span>WhatsApp</span>
          </PopupItem>
        </Link>
        <Link href="tel:8928337347" passHref>
          <PopupItem
            target="_blank"
            onClick={() => {
              setMobilePopup(!showMobilePopup);
              sendCallNowEvent();
              sendVirtualPageView(`call-now-button-clicked`);
            }}
          >
            <img src="/call-now.svg" alt="call now" />
            <span>Call Now</span>
          </PopupItem>
        </Link>
      </PopupMobile>
    </Fragment>
  );
};

export default CallIcon;
