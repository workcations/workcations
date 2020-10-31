import React, { useLayoutEffect, useState, useRef } from "react";
import { useEffect } from "react";
import * as gtag from "../../components/ga";
import {
  FormInput,
  FormText,
  FormSubmit,
} from "../../components/form-input/form-input";

import {
  Container,
  Top,
  Title,
  Video,
  Quote,
  Description,
  FeaturesContainer,
  FeaturesCard,
  SlideShow,
  Slide,
  ContactUs,
  Bottom,
  ContactForm,
  Heading,
  Form,
  FormGrid,
  FormSubmitAlert,
} from "./workcations-for-teams.style";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const WorkcationsForTeams = ({ loadElements, screenWidth }) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    phone: "",
    email: "",
    pax: "",
    company: "",
    destination: "",
  });

  const sendEvent = () => {
    gtag.event({
      category: "Workcations For Teams Contact Form Submitted",
      action: "Workcations For Teams Contact Form Submitted",
      label: "Workcations For Teams Contact Form Submitted",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Lead", {
          action: "Workcations For Teams Contact Form Submitted",
        });
      });
  };

  const { name, phone, email, pax, company, destination } = formDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "phone" || value.length !== 11)
      setFormDetails({ ...formDetails, [name]: value });
  };

  const [formSubmitAlert, setFormSubmitAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone / 10000000000 > 0.1) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        formDetails: {
          name: name,
          phone: phone,
          email: email,
          pax: pax,
          company: company,
          destination: destination,
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/submitLeadTeams",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          sendEvent();

          setFormSubmitAlert(true);
          setFormDetails({
            name: "",
            phone: "",
            email: "",
            pax: "",
            company: "",
            destination: "",
          });

          setTimeout(() => {
            setFormSubmitAlert(false);
          }, 4000);
        })
        .catch((error) => console.log("error", error));
    }
  };

  const ContactFormRef = useRef(null);

  const scrollToRef = (ref) =>
    window.scrollTo(0, ref.current.offsetTop - 100, "smooth");

  const scrollToContactForm = () => {
    scrollToRef(ContactFormRef);
  };

  return (
    <Container>
      <Top>
        <Title>
          Workcations For Teams<div></div>
        </Title>
        <Video>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ubZge1-ZBJw?rel=0&enablejsapi=1&amp;origin=https%3A%2F%2Fwww.workcations.in"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Quote>
          “ The power of human brain exists above and beyond the boundaries of a
          glass cubicle. Yet most employers are busy fixing it in a box“
        </Quote>
        <Description>
          Are you a distinguished leader who constantly thrives to boost the
          productivity of your team?
        </Description>
        <FeaturesContainer>
          <FeaturesCard>
            <img src="/workcations-for-teams/wifi.svg" />
            <span>High Speed WiFi</span>
          </FeaturesCard>
          <FeaturesCard>
            <img src="/workcations-for-teams/puzzle.svg" />
            <span>Team Building Activities</span>
          </FeaturesCard>
          <FeaturesCard>
            <img src="/workcations-for-teams/bbq.svg" />
            <span>Homely Meals</span>
          </FeaturesCard>
          <FeaturesCard>
            <img src="/workcations-for-teams/stay.svg" />
            <span>Comfortable Stays</span>
          </FeaturesCard>
        </FeaturesContainer>
        <ContactUs onClick={scrollToContactForm}>Contact Us</ContactUs>
        <SlideShow>
          {images.map((item, i) =>
            i === 0 || loadElements ? (
              <Slide
                src={`/workcations-for-teams/${item}.jpg`}
                key={`slide ${item}`}
              />
            ) : null
          )}
        </SlideShow>
      </Top>
      <Bottom>
        <ContactForm ref={ContactFormRef}>
          <Heading>Contact Us To Know More</Heading>
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
              warningMessage=""
            />
            <FormInput
              name="email"
              type="email"
              value={email}
              handleChange={handleChange}
              required
              label="Email"
            />
            <FormGrid>
              <FormInput
                name="pax"
                type="number"
                value={pax}
                handleChange={handleChange}
                required
                label="Pax"
                warningMessage=""
              />
              <FormInput
                name="company"
                type="text"
                value={company}
                handleChange={handleChange}
                required
                label="Company Name"
              />
            </FormGrid>
            <FormInput
              name="destination"
              type="text"
              value={destination}
              handleChange={handleChange}
              label="Destination"
            />
            <FormSubmit value="Submit" />
          </Form>
        </ContactForm>
      </Bottom>
      <FormSubmitAlert active={formSubmitAlert}>
        <span>
          Your details have been submitted. Our Expert will get in touch with
          you soon.
        </span>
      </FormSubmitAlert>
    </Container>
  );
};

export default WorkcationsForTeams;
