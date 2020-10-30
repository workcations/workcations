import React, { useState, Fragment } from "react";
import * as emailjs from "emailjs-com";
import * as gtag from "../ga";

import { FormInput, FormSubmit } from "../form-input/form-input";

import {
  Container,
  Cancel,
  Flex,
  FlexItem,
  Summary,
  PropertyTitle,
  CheckInCheckOut,
  SummaryItem,
  Image,
  Title,
  Sharing,
  SharingItem,
  SharingTitle,
  SharingCount,
  SharingTotal,
  CartTotal,
  Line,
  Contact,
  Form,
  Buttons,
  Button,
  FormSubmitAlert,
} from "./book-now-popup-new.style";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BookNowPopup = ({
  isActive,
  closePopup,
  title,
  selectedDayRange,
  roomCount,
  cartDetails,
  slug,
  mappingTree,
  getRoomSharing,
  getRoomPrice,
  getExtraBedPrice,
  pricingDuration,
  totalPrice,
}) => {
  const sendEvent = () => {
    gtag.event({
      category: "Book Now Contact Form Submitted",
      action: "Book Now Contact Form Submitted",
      label: "Book Now Contact Form Submitted",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.track("Lead", {
          action: "Book Now Contact Form Submitted",
        });
      });
  };

  const [formDetails, setDetails] = useState({
    name: "",
    phone: "",
    warningMessage: null,
  });

  const [formSubmitAlert, setFormSubmitAlert] = useState(false);

  const { name, phone, warningMessage } = formDetails;

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name !== "phone" || value.length !== 11)
      setDetails({ ...formDetails, [name]: value });
  };

  let text = "Hey I would like to make the following booking:\n\n";

  text += title + "\n\n";

  const addDatesString = () => {
    if (!!selectedDayRange.from && !!selectedDayRange.to) {
      let textString = "";

      textString +=
        "Check In: " +
        selectedDayRange.from.day +
        " " +
        monthNames[selectedDayRange.from.month - 1] +
        ", ";
      selectedDayRange.from.year + "\n";
      textString +=
        "Check Out: " +
        selectedDayRange.to.day +
        " " +
        monthNames[selectedDayRange.to.month - 1] +
        ", ";
      selectedDayRange.to.year + "\n\n";

      return textString;
    }
    return "";
  };

  text += addDatesString();

  for (let i = 0; i < roomCount.length; i++) {
    if (roomCount[i].reduce((a, b) => a + b, 0) !== 0) {
      text += i + 1 + ") " + cartDetails[i].name + "\n";
      text += "Sharing: \n";
      for (let j = 0; j < roomCount[i].length; j++) {
        if (roomCount[i][j] !== 0) {
          text +=
            mappingTree[
              getRoomSharing(cartDetails[i].unit, cartDetails[i].occupancy + j)
            ] +
            " X " +
            roomCount[i][j] +
            "\n";
        }
      }
    }
    text += "\n";
  }

  const whatsAppLink = "https://wa.me/919599615300?text=" + encodeURI(text);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let templateParams = {
      from_name: name,
      to_name: "WanderOn",
      subject: "Booking Query",
      message_html: text,
    };

    if (phone / 10000000000 > 0.1) {
      const waLeadText = "Name: " + name + "\nPhone: " + phone + "\n\n" + text;

      setDetails({
        name: "",
        phone: "",
        warningMessage: null,
      });
      closePopup();
      emailjs.send(
        "gmail",
        "template_yxj2s5YB",
        templateParams,
        "user_aMOzAjaX7UHRvpK7SiiR3"
      );
      setFormSubmitAlert(true);
      sendEvent();

      const waLeadUrl =
        "https://panel.capiwha.com/send_message.php?apikey=L00RQROD2VU0ZOXC25YX&number=919599615300&text=" +
        encodeURI(waLeadText);
      fetch(waLeadUrl);

      setTimeout(() => {
        setFormSubmitAlert(false);
      }, 4000);
    } else {
      setDetails({
        ...formDetails,
        warningMessage: "Please Enter a Valid Phone Number",
      });
    }
  };

  return (
    <Fragment>
      {!!selectedDayRange.from && selectedDayRange.to ? (
        <Container isActive={isActive}>
          <Cancel>
            <span onClick={closePopup}>Cancel</span>
          </Cancel>
          <Flex>
            <FlexItem>
              <h2>Booking Summary</h2>
              <Summary>
                <PropertyTitle>{title}</PropertyTitle>
                <CheckInCheckOut>
                  <div>
                    Check In
                    <span>
                      {selectedDayRange.from.day}{" "}
                      {monthNames[selectedDayRange.from.month - 1]}
                      {", "}
                      {selectedDayRange.from.year}
                    </span>
                  </div>
                  <div>
                    Check Out
                    <span>
                      {selectedDayRange.to.day}{" "}
                      {monthNames[selectedDayRange.to.month - 1]}
                      {", "}
                      {selectedDayRange.to.year}
                    </span>
                  </div>
                </CheckInCheckOut>
                {roomCount.map((item, i) =>
                  item.reduce((a, b) => a + b, 0) === 0 ? null : (
                    <SummaryItem key={`room no ${i + 1}`}>
                      <Image
                        src={
                          "https://d1xmqx9e0b6ljd.cloudfront.net/" +
                          slug +
                          "/" +
                          cartDetails[i].images[0] +
                          ".jpg"
                        }
                        alt={cartDetails[i].images[0]}
                      />
                      <Title>{cartDetails[i].name}</Title>
                      <Sharing>
                        {item.map((subItem, j) =>
                          subItem === 0 ? null : (
                            <SharingItem
                              key={`room no ${i + 1} sharing ${j + 1}`}
                            >
                              <SharingTitle>
                                {
                                  mappingTree[
                                    getRoomSharing(
                                      cartDetails[i].unit,
                                      cartDetails[i].occupancy + j
                                    )
                                  ]
                                }
                                <span>
                                  INR{" "}
                                  {j === 0
                                    ? getRoomPrice(i, pricingDuration)
                                    : getExtraBedPrice(
                                        i,
                                        j - 1,
                                        pricingDuration
                                      )}
                                  /- per night
                                </span>
                              </SharingTitle>
                              <SharingCount>X {subItem}</SharingCount>
                              <SharingTotal>
                                =&nbsp;&nbsp;&nbsp;
                                {(
                                  subItem *
                                  (j === 0
                                    ? getRoomPrice(i, pricingDuration)
                                    : getExtraBedPrice(
                                        i,
                                        j - 1,
                                        pricingDuration
                                      ))
                                ).toLocaleString("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                })}
                              </SharingTotal>
                            </SharingItem>
                          )
                        )}
                      </Sharing>
                    </SummaryItem>
                  )
                )}
                <CartTotal>
                  <div>
                    <span>Total</span>
                    <span>
                      {totalPrice.toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                  </div>
                  <div>
                    <span>GST(5%)</span>
                    <span>
                      {(totalPrice * 0.05).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                  </div>
                  <Line />
                  <div>
                    <span>Grand Total</span>
                    <span>
                      {(totalPrice * 1.05).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                  </div>
                  <Line />
                </CartTotal>
              </Summary>
            </FlexItem>
            <FlexItem>
              <h2>Check Availability</h2>
              <Contact>
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
                  <FormSubmit
                    style={{ width: "90%" }}
                    value="Request A CallBack"
                  />
                  <Buttons>
                    <Button
                      onClick={() => {
                        gtag.event({
                          category: "Book Now WhatsApp Button Clicked",
                          action: "Book Now WhatsApp Button Clicked",
                          label: "Book Now WhatsApp Button Clicked",
                        });

                        import("react-facebook-pixel")
                          .then((x) => x.default)
                          .then((ReactPixel) => {
                            ReactPixel.init("717219922161498");

                            ReactPixel.track("Contact", {
                              action: "Book Now WhatsApp Button Clicked",
                            });
                          });
                      }}
                      href={whatsAppLink}
                      buttonColor={"#25D366"}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() => {
                        gtag.event({
                          category: "Book Now Call Now Button Clicked",
                          action: "Book Now Call Now Button Clicked",
                          label: "Book Now Call Now Button Clicked",
                        });

                        import("react-facebook-pixel")
                          .then((x) => x.default)
                          .then((ReactPixel) => {
                            ReactPixel.init("717219922161498");

                            ReactPixel.track("Contact", {
                              action: "Book Now Call Now Button Clicked",
                            });
                          });
                      }}
                      href="tel:9599615300"
                      buttonColor={"#000000"}
                    >
                      Call Now
                    </Button>
                  </Buttons>
                </Form>
              </Contact>
            </FlexItem>
          </Flex>
        </Container>
      ) : null}
      <FormSubmitAlert active={formSubmitAlert}>
        <span>
          Your details have been submitted. Our Expert will get in touch with
          you soon.
        </span>
      </FormSubmitAlert>
    </Fragment>
  );
};

export default BookNowPopup;
