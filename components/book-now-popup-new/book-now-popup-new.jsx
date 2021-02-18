import React, { useState, Fragment } from "react";
import * as emailjs from "emailjs-com";
import * as gtag from "../ga";
import axios from "axios";
import Spinner from "../spinner/spinner";
import { useRouter } from "next/router";

import { FormInput, FormSubmit } from "../form-input/form-input";
import { CheckBox } from "../checkbox/checkbox";

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
  BookNowButton,
  FormSubmitAlert,
  PromoCode,
  ApplyPromoCode,
  WarningMessage,
  EmailIdPopup,
  EmailIdPopupContainer,
  InputContainer,
  EmailIdContainer,
  EmailIdButtons,
  TncContainer,
  TncPopup,
  TncHeading,
  TncHeadingText,
  TncList,
  AcceptButton,
  VacationWorkcation,
  CheckBoxContainer,
} from "./book-now-popup-new.style";
import { useEffect } from "react";

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

const convertDate = (date) =>
  `${date.split("-")[0]}-${
    date.split("-")[1].length === 1
      ? "0" + date.split("-")[1]
      : date.split("-")[1]
  }-${
    date.split("-")[2].length === 1
      ? "0" + date.split("-")[2]
      : date.split("-")[2]
  }`;

const propertyTypes = [
  "apartment",
  "campsite",
  "homestay",
  "hotel",
  "hostel",
  "resort",
  "villa",
];

const cnxTnc = [
  "Employee needs to discuss & seek consent from the manager before proceeding for Workcation.",
  "The arrangement / booking contract will be between traveler and Workcations.",
  "Workcations is offering discounted rates for Concentrix Employees however employees can choose if they want to travel with Workcations or any other service provider in case they get better rate and / or services.",
  "Entire cost will be borne by employee.",
  "Employees are expected to take good care of company asset and secure company / client confidential data. Any damage to company asset will be recovered from employee’s salary.",
  "This is extended benefit to our employees and therefore employees cannot claim this as matter of right.",
  "This benefit can be withdrawn or cancelled at any point of time.",
  "CONCENTRIX shall not be accountable for any kind of mishappening/incident/accident that might happen during such travel.",
  "The employee shall be solely responsible for such incidences as this travel plan shall be tantamount as his personal and at his own will and volition.",
];

const getBookingId = async (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };

  return await fetch(
    "https://workcationsbackend.herokuapp.com/booking",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};

const BookNowPopup = ({
  property,
  mealsIncluded,
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
  noOfPax,
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

  const router = useRouter();

  const [formDetails, setDetails] = useState({
    name: "",
    phone: "",
    warningMessage: null,
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoCodeWarning, setPromoCodeWarning] = useState("");
  const [couponDetails, setCouponDetails] = useState(null);
  const [discount, setDiscount] = useState(0);

  const [spinner, setSpinner] = useState(false);

  const [formSubmitAlert, setFormSubmitAlert] = useState(false);
  const [isCouponApplied, setCouponApplied] = useState(false);

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

  const whatsAppLink = "https://wa.me/919870301533?text=" + encodeURI(text);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSpinner(true);

    let templateParams = {
      from_name: name,
      to_name: "WanderOn",
      subject: "Booking Query",
      message_html: text,
    };

    if (phone / 10000000000 > 0.1) {
      const waLeadText = "Name: " + name + "\nPhone: " + phone + "\n\n" + text;

      displayRazorpay(name, phone);

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
      setFormSubmitAlert(false);
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

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(name, phone) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const paymentId = await axios.get(
      `https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/paymentId/${
        slug.split("-")[0]
      }`
    );

    const data = JSON.stringify({
      amount: (totalPrice - discount) * 1.05 * 100,
      currency: "INR",
      receipt: paymentId.data,
      notes: {},
    });

    const config = {
      method: "post",
      url: "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/order",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic Og==",
      },
      data: data,
    };

    // creating a new order
    const result = await axios(config);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_live_93qKOtoFrp4Vnl", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: name,
      description: `Booking for Workcations-${slug.split("-")[0]}`,
      //image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/success",
          data
        );

        if (result.data.msg === "success") {
          setSpinner(true);

          const data = {
            name: name,
            phone: phone,
            email: emailId,
            coupon: couponDetails,
            totalPax: {
              value: noOfPax,
              warningMessage: "",
            },
            salesPerson: "website",
            advance: (totalPrice - discount) * 1.05,
            account: "RazorPay",
            amount: (totalPrice - discount) * 1.05,
            leadSource: "website booking",
            transportation: "self",
            checkIn: new Date(
              convertDate(
                `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`
              )
            ),
            checkOut: new Date(
              convertDate(
                `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`
              )
            ),
            property: {
              about: property.description.about.value,
              address: property.location.address,
              breakfast: property.meals.breakfast.available
                ? property.meals.breakfast.value
                : -1,
              lunch: property.meals.lunchVeg.available
                ? property.meals.lunchVeg.value
                : -1,
              dinner: property.meals.dinnerVeg.available
                ? property.meals.dinnerVeg.value
                : -1,
              email: property.owner.email,
              phone: property.owner.contactPerson[0].phone,
              slug: slug,
              title: `Workcations ${property.id} - ${property.shortTitle}`,
              titleShort: property.titleShort,
              type: propertyTypes[property.type],
              nearby: property.features.nearby,
              name: property.location.title,
              minDuration: property.features.minDuration,
              location: {
                city: property.location.city,
                state: property.location.state,
              },
              link: property.location.location,
              inventory: property.inventory,
              inclusions: property.features.inclusions,
              exclusions: property.features.exclusions,
              images: property.images,
              features: property.features.amenities,
              essentials: property.features.essentials,
            },
            breakfast: {
              state: mealsIncluded[0],
              value: property.meals.breakfast.value,
            },
            lunch: {
              state: mealsIncluded[1],
              value: property.meals.lunchVeg.value,
            },
            dinner: {
              state: mealsIncluded[2],
              value: property.meals.dinnerVeg.value,
            },
            cart: roomCount
              .map((item, i) => {
                return {
                  image: cartDetails[i].images[0],
                  type: cartDetails[i].name,
                  rooms: item.map((subItem, j) => {
                    return {
                      count: subItem,
                      sharing:
                        mappingTree[
                          getRoomSharing(
                            cartDetails[i].unit,
                            cartDetails[i].occupancy + j
                          )
                        ],
                      ultrashort:
                        j === 0
                          ? getRoomPrice(i, "ultraShort")
                          : getExtraBedPrice(i, j - 1, "ultraShort"),
                      short:
                        j === 0
                          ? getRoomPrice(i, "short")
                          : getExtraBedPrice(i, j - 1, "short"),
                      normal:
                        j === 0
                          ? getRoomPrice(i, "normal")
                          : getExtraBedPrice(i, j - 1, "normal"),
                      long:
                        j === 0
                          ? getRoomPrice(i, "long")
                          : getExtraBedPrice(i, j - 1, "long"),
                      ultralong:
                        j === 0
                          ? getRoomPrice(i, "ultraLong")
                          : getExtraBedPrice(i, j - 1, "ultraLong"),
                      monthly:
                        j === 0
                          ? getRoomPrice(i, "monthly")
                          : getExtraBedPrice(i, j - 1, "monthly"),
                    };
                  }),
                };
              })
              .map((item) => {
                return {
                  ...item,
                  rooms: item.rooms.filter((subItem) => subItem.count !== 0),
                };
              })
              .filter((item) => item.rooms.length > 0),
            cartDetails: cartDetails,
            customer: false,
            remarks: "",
            websiteBooking: true,
            approved: false,
          };

          getBookingId(
            JSON.stringify({
              approval: {
                status: false,
                approvedBy: null,
              },
              data: data,
            })
          )
            .then((response) => {
              return JSON.parse(response);
            })
            .then((bookingDetails) => {
              const bookingId = bookingDetails.bookingId;
              const bookingLink = bookingDetails.slug;

              const dataEmail = JSON.stringify({
                emailId: emailId,
                name: formDetails.name,
                manager: "hr@wanderon.in",
              });

              const config = {
                method: "post",
                url: "https://workcationsbackend.herokuapp.com/emailTnc",
                headers: {
                  "Content-Type": "application/json",
                },
                data: dataEmail,
              };

              if (
                !!couponDetails &&
                !!couponDetails.code &&
                isWorkcation.value &&
                couponDetails.code.toLowerCase() === "wcconcentrix"
              ) {
                axios(config).then((response) => {
                  router.push(`/bookings/${bookingLink}`);
                });
              } else {
                router.push(`/bookings/${bookingLink}`);
              }

              /*

            bookingId: action.payload.bookingId,
        bookingLink: action.payload.slug

        */
            });
        } else {
          setSpinner(false);
        }
      },
      prefill: {
        name: name,
        contact: phone,
      },
      theme: {
        color: "#ff6c6b",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const [emailId, setEmailId] = useState("");
  const [isWorkcation, setIsWorkcation] = useState({
    value: false,
    popup: true,
  });
  const [otp, setOtp] = useState("");
  const [emailIdPopup, setEmailIdPopup] = useState(false);
  const [emailIdPlaceHolder, setEmailIdPlaceHolder] = useState("");
  const [otpPlaceHolder, setOtpPlaceHolder] = useState("");
  const [tempCodeDetails, setTempCodeDetails] = useState({});
  const [emailState, setEmailState] = useState(0);
  const [emailWarningMessage, setEmailWarningMessage] = useState("");
  const [tncAccepted, setTncAccepted] = useState(false);
  const [tncActive, setTncActive] = useState(false);

  const applyPromoCode = () => {
    setPromoCodeWarning("");
    setCouponDetails(null);

    if (promoCode.length === 0) {
      setPromoCodeWarning("Invalid Promo Code");
      setCouponDetails(null);
    } else {
      fetch(
        `https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/coupon/${promoCode}`
      )
        .then((codeData) => codeData.json())
        .then((codeData) => {
          if (codeData === "invalid") {
            setPromoCodeWarning("Invalid Promo Code");
          } else {
            if (promoCode === "WCCONCENTRIX") {
              setEmailIdPopup(true);
              setTempCodeDetails(codeData);
            } else {
              setCouponDetails(codeData);
              setCouponApplied(true);
            }
          }
        });
    }
  };

  const submitEmailId = () => {
    setEmailWarningMessage("");
    const emailIdsList = [
      "megha.arora5@concentrix.com",
      "vivek.verma@concentrix.com",
      "amit.sharma10@concentrix.com",
      "govind@wanderon.in",
      "ravi@wanderon.in",
    ];

    if (
      emailId.split("@")[1] === "concentrix.com" ||
      emailIdsList.indexOf(emailId) !== -1
    ) {
      const data = JSON.stringify({
        emailId: emailId,
      });
      const config = {
        method: "post",
        url: "https://workcationsbackend.herokuapp.com/createOtp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      setEmailWarningMessage("Please Wait");

      axios(config)
        .then((response) => {
          setEmailState(1);
          setEmailIdPlaceHolder("");
          setEmailWarningMessage("");
        })
        .catch((err) => {
          setEmailWarningMessage(
            "Looks like we encountered a problem! Please Try Again"
          );
        });
    } else {
      setEmailIdPlaceHolder("Invalid Email Id");
      setEmailId("");
    }
  };

  const verifyOtp = () => {
    if (otp.length !== 6) {
      setOtp("");
      setOtpPlaceHolder("Invalid Otp");
    } else {
      setOtp("");
      setOtpPlaceHolder("Verifying OTP");

      const data = JSON.stringify({ emailId: emailId, otp: Number(otp) });

      const config = {
        method: "post",
        url: "https://workcationsbackend.herokuapp.com/verifyOtp",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.data.toLowerCase() === "valid otp") {
            setOtp("");
            setOtpPlaceHolder("");
            setEmailState(0);
            setEmailIdPopup(false);
            setTncActive(true);
          }
        })
        .catch((err) => {
          setOtp("");
          setOtpPlaceHolder("Please Try Again");
        });
    }
  };

  useEffect(() => {
    if (tncAccepted) {
      setCouponDetails(tempCodeDetails);
      setCouponApplied(true);
      setTncActive(false);

      /*const data = JSON.stringify({
        emailId: emailId,
        name: formDetails.name,
        manager: "hr@wanderon.in",
      });

      const config = {
        method: "post",
        url: "https://workcationsbackend.herokuapp.com/emailTnc",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config);*/
    }
  }, [tncAccepted]);

  useEffect(() => {
    if (!!couponDetails) {
      const {
        availableCoupons,
        bookingIds,
        code,
        issuedBy,
        maxDiscount,
        minOrder,
        noOfUsers,
        offerDescription,
        offerName,
        offerTnc,
        subType,
        type,
        value,
      } = couponDetails;

      setDiscount((totalPrice * value) / 100);
    }
  }, [couponDetails]);

  return (
    <Fragment>
      {spinner ? (
        <Spinner />
      ) : (
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
                      {!!couponDetails && discount > 0 ? (
                        <div>
                          <span>Discount ({couponDetails.value}%)</span>
                          <span>
                            {discount.toLocaleString("en-IN", {
                              maximumFractionDigits: 2,
                              style: "currency",
                              currency: "INR",
                            })}
                          </span>
                        </div>
                      ) : null}
                      <div>
                        <span>GST(5%)</span>
                        <span>
                          {((totalPrice - discount) * 0.05).toLocaleString(
                            "en-IN",
                            {
                              maximumFractionDigits: 2,
                              style: "currency",
                              currency: "INR",
                            }
                          )}
                        </span>
                      </div>
                      <Line />
                      <div>
                        <span>Grand Total</span>
                        <span>
                          {((totalPrice - discount) * 1.05).toLocaleString(
                            "en-IN",
                            {
                              maximumFractionDigits: 2,
                              style: "currency",
                              currency: "INR",
                            }
                          )}
                        </span>
                      </div>
                      <Line />
                    </CartTotal>
                    {isCouponApplied ? null : (
                      <Fragment>
                        <PromoCode>
                          <FormInput
                            name="promoCode"
                            type="text"
                            value={promoCode}
                            handleChange={(e) => {
                              setPromoCode(e.target.value);
                              setPromoCodeWarning("");
                              setCouponDetails(null);
                            }}
                            label="Have a Coupon Code?"
                          />
                          <ApplyPromoCode onClick={applyPromoCode}>
                            Apply
                          </ApplyPromoCode>
                        </PromoCode>
                        <WarningMessage>{promoCodeWarning}</WarningMessage>
                      </Fragment>
                    )}
                  </Summary>
                </FlexItem>
                <FlexItem>
                  <h2>Fill in the details to make the payment</h2>
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
                      <FormSubmit style={{ width: "90%" }} value="Pay Now" />
                      <br />
                      <br />
                      <h2>For any support</h2>
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
          ) : null}
          <FormSubmitAlert active={formSubmitAlert}>
            <span>
              Your details have been submitted. Our Expert will get in touch
              with you soon.
            </span>
          </FormSubmitAlert>
          <EmailIdPopup isActive={emailIdPopup}>
            <EmailIdPopupContainer>
              {emailState === 1 ? (
                <span>
                  Please enter the OTP sent to <strong>{emailId}</strong>
                </span>
              ) : (
                <span>
                  Please enter your <strong>Concentrix Email Id</strong> to
                  avail the discount
                </span>
              )}
              <InputContainer>
                <EmailIdContainer emailState={emailState}>
                  <div>
                    <FormInput
                      name="emailId"
                      type="email"
                      value={emailId}
                      handleChange={(e) => {
                        setEmailIdPlaceHolder("");
                        setEmailId(e.target.value);
                      }}
                      required
                      label="Email Id"
                      placeholder={emailIdPlaceHolder}
                    />
                    {emailWarningMessage.length > 0 ? (
                      <span>{emailWarningMessage}</span>
                    ) : null}
                  </div>
                  <div>
                    <FormInput
                      name="otp"
                      type="number"
                      value={otp}
                      handleChange={(e) => {
                        setOtpPlaceHolder("");
                        if ((e.target.value + "").length <= 6) {
                          setOtp(e.target.value);
                        }
                      }}
                      required
                      label="OTP"
                      placeholder={otpPlaceHolder}
                    />
                    <span
                      onClick={() => {
                        const data = JSON.stringify({
                          emailId: emailId,
                        });
                        const config = {
                          method: "post",
                          url:
                            "https://workcationsbackend.herokuapp.com/createOtp",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          data: data,
                        };

                        setOtp("");
                        setOtpPlaceHolder("Please Wait");

                        axios(config)
                          .then((response) => {
                            setOtpPlaceHolder("Please Enter OTP");
                          })
                          .catch((err) => {
                            setEmailWarningMessage(
                              "Looks like we encountered a problem! Please Try Again"
                            );
                          });
                      }}
                    >
                      Resend OTP
                    </span>
                  </div>
                </EmailIdContainer>
              </InputContainer>
              <EmailIdButtons>
                <div onClick={emailState !== 1 ? submitEmailId : verifyOtp}>
                  {emailState === 1 ? "Verify OTP" : "Get OTP"}
                </div>
                <div
                  onClick={(e) => {
                    setEmailIdPopup(false);
                    setEmailId("");
                    setEmailIdPlaceHolder("");
                    setOtp("");
                    setOtpPlaceHolder("");
                    setEmailState(0);
                  }}
                >
                  Cancel
                </div>
              </EmailIdButtons>
            </EmailIdPopupContainer>
          </EmailIdPopup>
          <TncPopup isActive={tncActive}>
            <TncContainer>
              {isWorkcation.popup ? (
                <VacationWorkcation>
                  <TncHeading>
                    Are you travelling for Vacation or Workcation?
                  </TncHeading>
                  <CheckBoxContainer>
                    <CheckBox
                      name="vacation"
                      label="Vacation"
                      handleChange={() => {
                        setIsWorkcation({
                          ...isWorkcation,
                          value: false,
                        });
                      }}
                      checked={!isWorkcation.value}
                    />
                    <CheckBox
                      name="workcation"
                      label="Workcation"
                      handleChange={() => {
                        setIsWorkcation({
                          ...isWorkcation,
                          value: true,
                        });
                      }}
                      checked={isWorkcation.value}
                    />
                  </CheckBoxContainer>
                  <AcceptButton
                    onClick={(e) => {
                      e.preventDefault();

                      setIsWorkcation({
                        ...isWorkcation,
                        popup: false,
                      });

                      if (!isWorkcation.value) {
                        setTncAccepted(true);
                      }
                    }}
                    style={{ width: "30%", textAlign: "center" }}
                  >
                    Submit
                  </AcceptButton>
                </VacationWorkcation>
              ) : !isWorkcation.popup && isWorkcation.value ? (
                <Fragment>
                  <TncHeading>Concentrix Terms & Conditions</TncHeading>
                  <TncHeadingText>
                    Please read and accept the following terms & conditions by
                    CONCENTRIX to proceed with your booking
                  </TncHeadingText>
                  <TncList>
                    {cnxTnc.map((item, i) => (
                      <li key={`cnxTnc ${i + 1}`}>{item}</li>
                    ))}
                  </TncList>
                  <AcceptButton
                    onClick={() => {
                      setTncAccepted(true);
                    }}
                  >
                    Accept
                  </AcceptButton>
                </Fragment>
              ) : null}
            </TncContainer>
          </TncPopup>
        </Fragment>
      )}
    </Fragment>
  );
};

export default BookNowPopup;
