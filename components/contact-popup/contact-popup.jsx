import React, { useState, Fragment } from "react";
import * as emailjs from "emailjs-com";
import * as gtag from "../ga";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";
import { selectPopupHidden } from "../../redux/contact-popup/contact-popup.selectors";

//import { useDispatch } from "react-redux";
import { FormInput, FormText, FormSubmit } from "../form-input/form-input";

import Heading from "../../style-components/heading/heading.style";
//import { ContactFormContainer } from "./contact-form.style";

import {
  PopupBackground,
  PopupContainer,
  ContactFormContainer,
  Form,
  ContactForm,
  Cross,
  Image,
  FormSubmitAlert,
} from "./contact-popup.style";

//import { contactFormSubmitStart } from "../../redux/contact-form/contact-form.actions";

const ContactPopup = () => {
  const [formDetails, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    warningMessage: null,
  });

  const [formSubmitAlert, setFormSubmitAlert] = useState(false);

  const sendEvent = () => {
    gtag.event({
      category: "Contact Form Submitted",
      action: "Contact Form Submitted",
      label: "Contact Form Submitted",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Lead", {
          action: "Contact Form Submitted",
        });
      });
  };

  const dispatch = useDispatch();

  const hidden = useSelector(selectPopupHidden);

  const { name, phone, email, message, warningMessage } = formDetails;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const finalMessage =
      "Name: " +
      name +
      "<br/>Phone: " +
      phone +
      "<br/>Message: " +
      message +
      "<br/>Page: " +
      window.location.href;

    let templateParams = {
      from_name: email,
      to_name: "WanderOn",
      subject: finalMessage,
      message_html: finalMessage,
    };

    if (phone / 10000000000 > 0.1) {
      const data = JSON.stringify({
        name,
        phone,
        email,
        message,
        page: window.location.href,
        website: "workcations",
        leadNumber: 9870301533,
        apiKey: "ravi",
        source: "popup",
      });

      const config = {
        method: "post",
        url: "https://api.wanderon.in/submitLead",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      setDetails({
        name: "",
        phone: "",
        email: "",
        message: "",
        warningMessage: null,
      });
      dispatch(toggleContactPopupHidden());
      sendEvent();
      emailjs.send(
        "gmail",
        "template_yxj2s5YB",
        templateParams,
        "user_aMOzAjaX7UHRvpK7SiiR3"
      );
      axios(config);
      setFormSubmitAlert(true);

      setTimeout(() => {
        setFormSubmitAlert(false);
      }, 4000);
    } else {
      setDetails({
        ...formDetails,
        warningMessage: "Please Enter a Valid Phone Number",
      });
    }

    //dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name !== "phone" || value.length !== 11)
      setDetails({ ...formDetails, [name]: value });
  };

  return (
    <Fragment>
      <PopupBackground
        onClick={() => dispatch(toggleContactPopupHidden())}
        isHidden={hidden}
      ></PopupBackground>
      <PopupContainer isHidden={hidden}>
        <ContactFormContainer>
          <Cross>
            <span onClick={() => dispatch(toggleContactPopupHidden())}>
              &#10006;
            </span>
          </Cross>
          <Heading>
            Not sure what to do? We'll give you a <span>call back</span>
          </Heading>
          <ContactForm>
            <Form onSubmit={handleSubmit}>
              <FormInput
                name="name"
                type="text"
                value={name}
                handleChange={handleChange}
                required
                label="Name"
              />
              <FormInput
                name="phone"
                type="number"
                value={phone}
                handleChange={handleChange}
                required
                label="Phone Number"
                warningMessage={warningMessage}
              />
              <FormInput
                name="email"
                type="email"
                value={email}
                handleChange={handleChange}
                required
                label="Email"
              />
              <FormText
                name="message"
                rows="3"
                value={message}
                handleChange={handleChange}
                label="Message"
              />
              <FormSubmit value="Submit" />
            </Form>
            <Image>
              <img src="/contact-us.svg" alt="Contact Us" />
            </Image>
          </ContactForm>
        </ContactFormContainer>
      </PopupContainer>
      <FormSubmitAlert active={formSubmitAlert}>
        <span>
          Your details have been submitted. Our Expert will get in touch with
          you soon.
        </span>
      </FormSubmitAlert>
    </Fragment>
  );
};

export default ContactPopup;
