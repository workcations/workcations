import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";

import {
  PageContainer,
  FlexItem,
  Summary,
  PropertyTitle,
  CheckInCheckOut,
  SummaryItem,
  Image,
  CartSharingTitle,
  Sharing,
  SharingItem,
  CartSharingSharingTitle,
  SharingCount,
  SharingTotal,
  CartTotal,
  Line,
  DownloadContainer,
  DownloadInvoice,
  Approval,
} from "./approval-page.style";

const getNoOfDays = (date1, date2) => {
  return (date2.getTime() - date1.getTime()) / 86400000;
};

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

const approveBookingAPI = async (data) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(
    "https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/approveBooking",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const ApprovalPage = ({ data, bookingSlug }) => {
  const {
    amount,
    cart,
    property,
    checkIn,
    checkOut,
    totalPax,
    breakfast,
    lunch,
    dinner,
    approved,
  } = data;

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const TotalAmount = cart
    .map((cartItem) =>
      cartItem.rooms
        .map((room) =>
          Math.round(getNoOfDays(checkInDate, checkOutDate)) < 21
            ? Math.round(getNoOfDays(checkInDate, checkOutDate)) < 16
              ? Math.round(getNoOfDays(checkInDate, checkOutDate)) < 11
                ? Math.round(getNoOfDays(checkInDate, checkOutDate)) < 6
                  ? room.ultrashort *
                    room.count *
                    Math.round(getNoOfDays(checkInDate, checkOutDate))
                  : room.short *
                    room.count *
                    Math.round(getNoOfDays(checkInDate, checkOutDate))
                : room.normal *
                  room.count *
                  Math.round(getNoOfDays(checkInDate, checkOutDate))
              : room.long *
                room.count *
                Math.round(getNoOfDays(checkInDate, checkOutDate))
            : room.ultralong *
              room.count *
              Math.round(getNoOfDays(checkInDate, checkOutDate))
        )
        .reduce(getTotal, 0)
    )
    .reduce(getTotal, 0);

  const [isBookingApproved, setApproved] = useState(approved);

  const approveBooking = (isApproved) => {
    const newData = {
      ...data,
      approved: isApproved,
    };

    approveBookingAPI(newData).then(() => {
      setApproved(isApproved);
    });
  };

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageContainer>
        <div>
          {cart ? (
            <FlexItem className="carousel">
              <h2>Booking Summary</h2>
              <Summary>
                <PropertyTitle>{property.title}</PropertyTitle>
                <CheckInCheckOut>
                  <div>
                    Check In
                    <span>
                      {checkInDate.getDate()}{" "}
                      {monthNames[checkInDate.getMonth()]}
                      {","}
                      {checkInDate.getFullYear()}
                    </span>
                  </div>
                  <div>
                    Check Out
                    <span>
                      {checkOutDate.getDate()}{" "}
                      {monthNames[checkOutDate.getMonth()]}
                      {", "}
                      {checkOutDate.getFullYear()}
                    </span>
                  </div>
                </CheckInCheckOut>
                {cart.map((cartItem, i) => (
                  <SummaryItem key={i}>
                    <Image
                      src={
                        "https://d1xmqx9e0b6ljd.cloudfront.net/" +
                        property.slug +
                        "/" +
                        cartItem.image +
                        ".jpg"
                      }
                      alt={cartItem.image}
                    />
                    <CartSharingTitle>{cartItem.type}</CartSharingTitle>
                    <Sharing>
                      {cartItem.rooms.map((room, j) => (
                        <SharingItem key={i + "room" + j}>
                          <CartSharingSharingTitle>
                            {room.sharing}
                            <span>
                              INR{" "}
                              {Math.round(
                                getNoOfDays(checkInDate, checkOutDate)
                              ) < 21
                                ? Math.round(
                                    getNoOfDays(checkInDate, checkOutDate)
                                  ) < 16
                                  ? Math.round(
                                      getNoOfDays(checkInDate, checkOutDate)
                                    ) < 11
                                    ? Math.round(
                                        getNoOfDays(checkInDate, checkOutDate)
                                      ) < 6
                                      ? room.ultrashort
                                      : room.short
                                    : room.normal
                                  : room.long
                                : room.ultralong}
                              /- per night
                            </span>
                          </CartSharingSharingTitle>
                          <SharingCount>X {room.count}</SharingCount>
                          <SharingTotal>
                            =&nbsp;&nbsp;&nbsp;
                            {(
                              room.count *
                              (Math.round(
                                getNoOfDays(checkInDate, checkOutDate)
                              ) < 21
                                ? Math.round(
                                    getNoOfDays(checkInDate, checkOutDate)
                                  ) < 16
                                  ? Math.round(
                                      getNoOfDays(checkInDate, checkOutDate)
                                    ) < 11
                                    ? Math.round(
                                        getNoOfDays(checkInDate, checkOutDate)
                                      ) < 6
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
                  {breakfast &&
                  breakfast.state &&
                  Number(breakfast.value) > 0 ? (
                    <div>
                      <span>Breakfast</span>
                      <span>
                        {(
                          Number(breakfast.value) *
                          Number(totalPax.value) *
                          Math.round(getNoOfDays(checkInDate, checkOutDate))
                        ).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    </div>
                  ) : null}
                  {lunch && lunch.state && Number(lunch.value) > 0 ? (
                    <div>
                      <span>Lunch</span>
                      <span>
                        {(
                          Number(lunch.value) *
                          Number(totalPax.value) *
                          Math.round(getNoOfDays(checkInDate, checkOutDate))
                        ).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    </div>
                  ) : null}
                  {dinner && dinner.state && Number(dinner.value) > 0 ? (
                    <div>
                      <span>Dinner</span>
                      <span>
                        {(
                          Number(dinner.value) *
                          Number(totalPax.value) *
                          Math.round(getNoOfDays(checkInDate, checkOutDate))
                        ).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    </div>
                  ) : null}
                  <div>
                    <span>Total</span>
                    {breakfast ? (
                      <span>
                        {(
                          TotalAmount +
                          (Number(breakfast.value) * Number(breakfast.state) +
                            Number(lunch.value) * Number(lunch.state) +
                            Number(dinner.value) * Number(dinner.state)) *
                            Number(totalPax.value) *
                            Math.round(getNoOfDays(checkInDate, checkOutDate))
                        ).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    ) : (
                      <span>
                        {TotalAmount.toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    )}
                  </div>
                  <div>
                    <span>
                      Discount(
                      {breakfast ? (
                        <Fragment>
                          {(
                            ((TotalAmount +
                              (Number(breakfast.value) *
                                Number(breakfast.state) +
                                Number(lunch.value) * Number(lunch.state) +
                                Number(dinner.value) * Number(dinner.state)) *
                                Number(totalPax.value) *
                                Math.round(
                                  getNoOfDays(checkInDate, checkOutDate)
                                ) -
                              Number(amount) / 1.05) *
                              100) /
                            (TotalAmount +
                              (Number(breakfast.value) *
                                Number(breakfast.state) +
                                Number(lunch.value) * Number(lunch.state) +
                                Number(dinner.value) * Number(dinner.state)) *
                                Number(totalPax.value) *
                                Math.round(
                                  getNoOfDays(checkInDate, checkOutDate)
                                ))
                          ).toFixed(2)}
                        </Fragment>
                      ) : (
                        <Fragment>
                          {(
                            ((TotalAmount - Number(amount) / 1.05) * 100) /
                            TotalAmount
                          ).toFixed(2)}
                        </Fragment>
                      )}
                      %)
                    </span>
                    {breakfast ? (
                      <span>
                        {(
                          TotalAmount +
                          (Number(breakfast.value) * Number(breakfast.state) +
                            Number(lunch.value) * Number(lunch.state) +
                            Number(dinner.value) * Number(dinner.state)) *
                            Number(totalPax.value) *
                            Math.round(getNoOfDays(checkInDate, checkOutDate)) -
                          Number(amount) / 1.05
                        ).toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          style: "currency",
                          currency: "INR",
                        })}
                      </span>
                    ) : (
                      <span>
                        {(TotalAmount - Number(amount) / 1.05).toLocaleString(
                          "en-IN",
                          {
                            maximumFractionDigits: 2,
                            style: "currency",
                            currency: "INR",
                          }
                        )}
                      </span>
                    )}
                  </div>
                  <div>
                    <span>GST(5%)</span>
                    <span>
                      {(Number(amount) / 21).toLocaleString("en-IN", {
                        maximumFractionDigits: 2,
                        style: "currency",
                        currency: "INR",
                      })}
                    </span>
                  </div>
                  <Line />
                  <div style={{ fontWeight: "600", color: "#ff6c6b" }}>
                    <span>Grand Total</span>
                    <span>
                      {Number(amount).toLocaleString("en-IN", {
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
          ) : null}
        </div>
        {isBookingApproved ? (
          <DownloadContainer>
            <DownloadInvoice
              href={`https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/pdf/${bookingSlug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Booking Voucher
            </DownloadInvoice>
          </DownloadContainer>
        ) : isBookingApproved ? (
          <DownloadContainer>
            <DownloadInvoice
              href={`https://1sdx3eq12j.execute-api.ap-south-1.amazonaws.com/dev/pdf/${bookingSlug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Booking Voucher
            </DownloadInvoice>
          </DownloadContainer>
        ) : (
          <DownloadContainer>
            <Approval>
              <span
                onClick={() => {
                  approveBooking(true);
                }}
              >
                Confirm Booking
              </span>
              <span
                onClick={() => {
                  approveBooking(false);
                }}
              >
                Cancel Booking
              </span>
            </Approval>
          </DownloadContainer>
        )}
      </PageContainer>
    </Fragment>
  );
};

export default ApprovalPage;
