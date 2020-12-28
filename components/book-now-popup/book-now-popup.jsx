import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import * as emailjs from "emailjs-com";
import * as gtag from "../ga";

import { hideBookingPopup } from "../../redux/property/properties.actions";

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
} from "./book-now-popup.style";

const getTotal = (total, num) => {
  return total + num;
};

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
  cart,
  days,
  slug,
  checkIn,
  checkOut,
  title,
}) => {
  const dispatch = useDispatch();

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
  text +=
    "Check In: " +
    checkIn.getDate() +
    monthNames[checkIn.getMonth()] +
    ", " +
    checkIn.getFullYear() +
    "\n";
  text +=
    "Check Out: " +
    checkOut.getDate() +
    monthNames[checkOut.getMonth()] +
    ", " +
    checkOut.getFullYear() +
    "\n\n";

  for (let i = 0; i < cart.length; i++) {
    text += i + 1 + ") " + cart[i].type + "\n";
    text += "Sharing: \n";
    for (let j = 0; j < cart[i].rooms.length; j++) {
      text += cart[i].rooms[j].sharing + " X " + cart[i].rooms[j].count + "\n";
    }
    text += "\n";
  }

  const whatsAppLink = "https://wa.me/919870301533?text=" + encodeURI(text);

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
      dispatch(hideBookingPopup());
      emailjs.send(
        "gmail",
        "template_yxj2s5YB",
        templateParams,
        "user_aMOzAjaX7UHRvpK7SiiR3"
      );
      setFormSubmitAlert(true);
      sendEvent();

      const waLeadUrl =
        "https://panel.capiwha.com/send_message.php?apikey=L00RQROD2VU0ZOXC25YX&number=919870301533&text=" +
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
      <Container isActive={isActive}>
        <Cancel>
          <span onClick={() => dispatch(hideBookingPopup())}>Cancel</span>
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
                    {checkIn.getDate()} {monthNames[checkIn.getMonth()]}
                    {", "}
                    {checkIn.getFullYear()}
                  </span>
                </div>
                <div>
                  Check Out
                  <span>
                    {checkOut.getDate()} {monthNames[checkOut.getMonth()]}
                    {", "}
                    {checkOut.getFullYear()}
                  </span>
                </div>
              </CheckInCheckOut>
              {cart.map((cartItem, i) => (
                <SummaryItem key={i}>
                  <Image
                    src={
                      "https://d1xmqx9e0b6ljd.cloudfront.net/" +
                      slug +
                      "/" +
                      cartItem.image +
                      ".jpg"
                    }
                    alt={cartItem.image}
                  />
                  <Title>{cartItem.type}</Title>
                  <Sharing>
                    {cartItem.rooms.map((room, j) => (
                      <SharingItem key={i + "room" + j}>
                        <SharingTitle>
                          {room.sharing}
                          <span>
                            INR{" "}
                            {days < 21
                              ? days < 16
                                ? days < 11
                                  ? days < 6
                                    ? room.ultrashort
                                    : room.short
                                  : room.normal
                                : room.long
                              : room.ultralong}
                            /- per night
                          </span>
                        </SharingTitle>
                        <SharingCount>X {room.count}</SharingCount>
                        <SharingTotal>
                          =&nbsp;&nbsp;&nbsp;
                          {(
                            room.count *
                            (days < 21
                              ? days < 16
                                ? days < 11
                                  ? days < 6
                                    ? room.ultrashort
                                    : room.short
                                  : room.normal
                                : room.long
                              : room.ultralong)
                          ).toLocaleString("en-IN", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </SharingTotal>
                      </SharingItem>
                    ))}
                  </Sharing>
                </SummaryItem>
              ))}
              <CartTotal>
                <div>
                  <span>Total</span>
                  <span>
                    {cart
                      .map((cartItem) =>
                        cartItem.rooms
                          .map((room) =>
                            days < 21
                              ? days < 16
                                ? days < 11
                                  ? days < 6
                                    ? room.ultrashort * room.count * days
                                    : room.short * room.count * days
                                  : room.normal * room.count * days
                                : room.long * room.count * days
                              : room.ultralong * room.count * days
                          )
                          .reduce(getTotal, 0)
                      )
                      .reduce(getTotal, 0)
                      .toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                  </span>
                </div>
                <div>
                  <span>GST(5%)</span>
                  <span>
                    {cart
                      .map((cartItem) =>
                        cartItem.rooms
                          .map((room) =>
                            days < 21
                              ? days < 16
                                ? days < 11
                                  ? days < 6
                                    ? room.ultrashort * room.count * 0.05 * days
                                    : room.short * room.count * 0.05 * days
                                  : room.normal * room.count * 0.05 * days
                                : room.long * room.count * 0.05 * days
                              : room.ultralong * room.count * 0.05 * days
                          )
                          .reduce(getTotal, 0)
                      )
                      .reduce(getTotal, 0)
                      .toLocaleString("en-IN", {
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
                    {cart
                      .map((cartItem) =>
                        cartItem.rooms
                          .map((room) =>
                            days < 21
                              ? days < 16
                                ? days < 11
                                  ? days < 6
                                    ? room.ultrashort * room.count * 1.05 * days
                                    : room.short * room.count * 1.05 * days
                                  : room.normal * room.count * 1.05 * days
                                : room.long * room.count * 1.05 * days
                              : room.ultralong * room.count * 1.05 * days
                          )
                          .reduce(getTotal, 0)
                      )
                      .reduce(getTotal, 0)
                      .toLocaleString("en-IN", {
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
                    href="tel:9870301533"
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
