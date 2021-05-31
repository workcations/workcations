import React, { Fragment, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import * as gtag from "../ga";

import { showBookingPopup } from "../../redux/property/properties.actions";
import { selectBookingPopup } from "../../redux/property/properties.selectors";

import FormInput from "../form-input-text/form-input-text";
import { CheckBox } from "../checkbox/checkbox";
import BookNowPopup from "../book-now-popup/book-now-popup";
import RoomPopup from "../room-popup/room-popup";

import {
  Container,
  DatePickerDiv,
  SubContainer,
  Top,
  Heading,
  CinCoutContainer,
  CinCoutWrapper,
  CinCoutHeading,
  Disclaimer,
  Line,
  RoomsContainer,
  RoomCard,
  ImageCon,
  RoomImage,
  MicroDetails,
  RoomDetails,
  Category,
  SubCategory,
  RoomSharing,
  RoomQuantity,
  RoomPriceContainer,
  PriceObject,
  Striked,
  RoomPrice,
  Discount,
  PerUnit,
  RoomQty,
  PlusMinusButton,
  PlusButton,
  AddRoomButton,
  AddMeals,
  AddMealsHeading,
  AddMealsGrid,
  CostingContainer,
  CostingText,
  CostingValue,
  PaymentButton,
  EmptyCartAlert,
  DurationWrapper,
  DurationItem,
} from "./book-now.style";

const mappingTree = [
  "Single Sharing",
  "Double Sharing",
  "Triple Sharing",
  "Quad Sharing",
  "Entire Apartment",
  "Dorm Bed",
  "Single Room",
  "Entire Room",
];
const mappingImages = [
  "/book-now/person.svg",
  "/book-now/2person.svg",
  "/book-now/3person.svg",
  "/book-now/4person.svg",
  "/book-now/apartment.svg",
  "/book-now/person.svg",
  "/book-now/person.svg",
  "/book-now/apartment.svg",
];

const DateInput = ({ value, onClick }) => (
  <DatePickerDiv onClick={onClick}>{value}</DatePickerDiv>
);

const BookNow = ({
  inventory,
  slug,
  title,
  minDuration,
  breakfast,
  lunch,
  dinner,
  type,
}) => {
  const [cartDetails, setCart] = useState(
    inventory.map((room, roomIndex) => {
      return {
        type: room.type,
        image: room.image[0],
        max: room.max,
        isMaxed: false,
        rooms: room.short.map((roomSharing, i) => {
          return {
            sharing: roomSharing.sharing,
            ultrashort: inventory[roomIndex].ultrashort[i].cost,
            short: roomSharing.cost,
            normal: inventory[roomIndex].normal[i].cost,
            long: inventory[roomIndex].long[i].cost,
            ultralong: inventory[roomIndex].ultralong[i].cost,
            count: 0,
          };
        }),
      };
    })
  );

  const [addToCart, setAddToCart] = useState(false);

  const [totalPax, setTotalPax] = useState(null);

  const dispatch = useDispatch();

  const getTotal = (total, num) => {
    return total + num;
  };

  const today = new Date();
  let endDateInitial = new Date();

  if (!minDuration || minDuration <= 7) {
    endDateInitial.setDate(today.getDate() + 7);
  } else {
    endDateInitial.setDate(today.getDate() + minDuration);
  }

  let endDateMinInitial = new Date();
  endDateMinInitial.setDate(today.getDate() + minDuration);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(endDateInitial);
  const [minEndDate, setMinEndDate] = useState(endDateMinInitial);

  const [duration, setDuration] = useState("week");
  const [durationActive, setDurationActive] = useState([false, true, false]);
  const [disabled, setDisabled] = useState([false, false, false]);

  useEffect(() => {
    if (minDuration > 20) {
      setDisabled([true, true, false]);
    } else if (minDuration > 6) {
      setDisabled([true, false, false]);
    } else {
      setDisabled([false, false, false]);
    }
  }, [minDuration]);

  useEffect(() => {
    if (duration === "short") {
      setDurationActive([true, false, false]);
    } else if (duration === "week") {
      setDurationActive([false, true, false]);
    } else {
      setDurationActive([false, false, true]);
    }
  }, [duration]);

  const [breakfastBox, setBreakfast] = useState(false);
  const [lunchBox, setLunch] = useState(false);
  const [dinnerBox, setDinner] = useState(false);

  const [roomPopup, setRoomPopup] = useState({
    size: "-1",
    balcony: "-1",
    view: "-1",
    features: ["-1"],
    images: [],
    isOpen: false,
    closePopup: () => {},
    start: false,
  });

  const getNoOfDays = (date1, date2) => {
    return (date2.getTime() - date1.getTime()) / 86400000;
  };

  const setCheckInDate = (date) => {
    setStartDate(date);
    let selectedDate = new Date(date);
    selectedDate.setDate(selectedDate.getDate() + minDuration);
    setMinEndDate(selectedDate);
  };

  useEffect(() => {
    if (minEndDate > endDate) {
      setEndDate(minEndDate);
    }
  }, [minEndDate, endDate]);

  useEffect(() => {
    if (
      Math.round(getNoOfDays(startDate, endDate)) < 7 &&
      duration !== "short"
    ) {
      setDuration("short");
    } else if (
      Math.round(getNoOfDays(startDate, endDate)) > 6 &&
      Math.round(getNoOfDays(startDate, endDate)) < 21 &&
      duration !== "week"
    ) {
      setDuration("week");
    } else if (
      Math.round(getNoOfDays(startDate, endDate)) > 20 &&
      duration !== "month"
    ) {
      setDuration("month");
    }
  }, [startDate, endDate]);

  const durationUpdated = (dur) => {
    let selectedDate = new Date(startDate);

    if (dur === "short" && Math.round(getNoOfDays(startDate, endDate)) > 6) {
      if (minDuration > 1) {
        selectedDate.setDate(selectedDate.getDate() + minDuration);
      } else {
        selectedDate.setDate(selectedDate.getDate() + 1);
      }
    } else if (
      dur === "week" &&
      (Math.round(getNoOfDays(startDate, endDate)) < 7 ||
        Math.round(getNoOfDays(startDate, endDate)) > 20)
    ) {
      if (minDuration > 7) {
        selectedDate.setDate(selectedDate.getDate() + minDuration);
      } else {
        selectedDate.setDate(selectedDate.getDate() + 7);
      }
    } else if (
      dur === "month" &&
      Math.round(getNoOfDays(startDate, endDate)) < 21
    ) {
      if (minDuration > 21) {
        selectedDate.setDate(selectedDate.getDate() + minDuration);
      } else {
        selectedDate.setDate(selectedDate.getDate() + 30);
      }
    }

    setEndDate(selectedDate);
  };

  const [emptyCartAlert, setEmptyCartAlert] = useState(false);

  const addRoom = (roomIndex, sharingIndex) => {
    if (!addToCart) {
      gtag.event({
        category: "Add To Cart",
        action: "Add To Cart",
        label: "Add To Cart",
      });

      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("717219922161498");

          ReactPixel.track("AddToCart", {
            action: "Add To Cart Button Clicked",
          });
        });

      setAddToCart(true);
    }
    const newCount = cartDetails[roomIndex].rooms[sharingIndex].count + 1;

    let newTotal = 0;

    for (let i = 0; i < cartDetails[roomIndex].rooms.length; i++) {
      newTotal += cartDetails[roomIndex].rooms[i].count;
    }

    newTotal++;

    let isCountMax = false;

    if (newTotal === cartDetails[roomIndex].max) {
      isCountMax = true;
    }

    if (newTotal <= cartDetails[roomIndex].max) {
      setCart(
        cartDetails.map((roomType, i) =>
          i === roomIndex
            ? {
                type: roomType.type,
                image: roomType.image,
                max: roomType.max,
                isMaxed: isCountMax,
                rooms: roomType.rooms.map((roomSharing, j) =>
                  j === sharingIndex
                    ? {
                        sharing: roomSharing.sharing,
                        ultrashort: roomSharing.ultrashort,
                        short: roomSharing.short,
                        normal: roomSharing.normal,
                        long: roomSharing.long,
                        ultralong: roomSharing.ultralong,
                        count: newCount,
                      }
                    : roomSharing
                ),
              }
            : roomType
        )
      );
    }
  };

  const removeRoom = (roomIndex, sharingIndex) => {
    const newCount = cartDetails[roomIndex].rooms[sharingIndex].count - 1;

    if (newCount >= 0) {
      setCart(
        cartDetails.map((roomType, i) =>
          i === roomIndex
            ? {
                type: roomType.type,
                image: roomType.image,
                max: roomType.max,
                isMaxed: false,
                rooms: roomType.rooms.map((roomSharing, j) =>
                  j === sharingIndex
                    ? {
                        sharing: roomSharing.sharing,
                        ultrashort: roomSharing.ultrashort,
                        short: roomSharing.short,
                        normal: roomSharing.normal,
                        long: roomSharing.long,
                        ultralong: roomSharing.ultralong,
                        count: newCount,
                      }
                    : roomSharing
                ),
              }
            : roomType
        )
      );
    }
  };

  const bookNow = () => {
    if (
      cartDetails
        .map((room) =>
          room.rooms
            .map((sharing) =>
              Math.round(getNoOfDays(startDate, endDate)) < 21
                ? Math.round(getNoOfDays(startDate, endDate)) < 16
                  ? Math.round(getNoOfDays(startDate, endDate)) < 11
                    ? Math.round(getNoOfDays(startDate, endDate)) < 6
                      ? sharing.ultrashort * sharing.count
                      : sharing.short * sharing.count
                    : sharing.normal * sharing.count
                  : sharing.long * sharing.count
                : sharing.ultralong * sharing.count
            )
            .reduce(getTotal, 0)
        )
        .reduce(getTotal, 0) === 0
    ) {
      setEmptyCartAlert(true);

      setTimeout(() => {
        setEmptyCartAlert(false);
      }, 4000);
    } else {
      gtag.event({
        category: "CheckOut Initiated Book Now Button Clicked",
        action: "CheckOut Initiated Book Now Button Clicked",
        label: "CheckOut Initiated Book Now Button Clicked",
      });

      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("717219922161498");

          ReactPixel.track("InitiateCheckout", {
            action: "Book Now Button Clicked",
          });
        });

      dispatch(showBookingPopup());
      setEmptyCartAlert(false);
    }
  };

  const getGrandTotal = () => {
    let roomCost = cartDetails
      .map((room) =>
        room.rooms
          .map((sharing) =>
            Math.round(getNoOfDays(startDate, endDate)) < 21
              ? Math.round(getNoOfDays(startDate, endDate)) < 16
                ? Math.round(getNoOfDays(startDate, endDate)) < 11
                  ? Math.round(getNoOfDays(startDate, endDate)) < 6
                    ? Math.round(getNoOfDays(startDate, endDate)) *
                      sharing.ultrashort *
                      sharing.count
                    : Math.round(getNoOfDays(startDate, endDate)) *
                      sharing.short *
                      sharing.count
                  : Math.round(getNoOfDays(startDate, endDate)) *
                    sharing.normal *
                    sharing.count
                : Math.round(getNoOfDays(startDate, endDate)) *
                  sharing.long *
                  sharing.count
              : Math.round(getNoOfDays(startDate, endDate)) *
                sharing.ultralong *
                sharing.count
          )
          .reduce(getTotal, 0)
      )
      .reduce(getTotal, 0);

    let mealsValue = 0;

    if (totalPax) {
      if (breakfast > 0 && breakfastBox) {
        mealsValue += Number(totalPax) * breakfast;
      }

      if (lunch > 0 && lunchBox) {
        mealsValue += Number(totalPax) * lunch;
      }

      if (dinner > 0 && dinnerBox) {
        mealsValue += Number(totalPax) * dinner;
      }
    } else {
      const noOfPax = cartDetails
        .map((item) =>
          item.rooms
            .map((room) =>
              room.sharing === "Single Sharing"
                ? room.count * 1
                : room.sharing === "Double Sharing"
                ? room.count * 2
                : room.sharing === "Triple Sharing"
                ? room.count * 3
                : room.sharing === "Dorm Bed"
                ? room.count * 1
                : null
            )
            .reduce(getTotal, 0)
        )
        .reduce(getTotal, 0);

      if (breakfast > 0 && breakfastBox) {
        mealsValue += Number(noOfPax) * breakfast;
      }

      if (lunch > 0 && lunchBox) {
        mealsValue += Number(noOfPax) * lunch;
      }

      if (dinner > 0 && dinnerBox) {
        mealsValue += Number(noOfPax) * dinner;
      }
    }

    return roomCost + Math.round(getNoOfDays(startDate, endDate)) * mealsValue;
  };

  return (
    <Fragment>
      <Container>
        <SubContainer>
          <Top>
            <Heading>Book With Us!</Heading>
            <DurationWrapper>
              <DurationItem
                isActive={durationActive[0]}
                isDisabled={disabled[0]}
                onClick={() => {
                  if (!disabled[0] && duration !== "short") {
                    setDuration("short");
                    durationUpdated("short");
                  }
                }}
              >
                Short Stay<span>(1-6 days)</span>
              </DurationItem>
              <DurationItem
                isActive={durationActive[1]}
                isDisabled={disabled[1]}
                onClick={() => {
                  if (!disabled[1] && duration !== "week") {
                    setDuration("week");
                    durationUpdated("week");
                  }
                }}
              >
                Weekly Stay<span>(7-20 days)</span>
              </DurationItem>
              <DurationItem
                isActive={durationActive[2]}
                isDisabled={disabled[2]}
                onClick={() => {
                  if (!disabled[2] && duration !== "month") {
                    setDuration("month");
                    durationUpdated("month");
                  }
                }}
              >
                Monthly Stay<span>(20+ days)</span>
              </DurationItem>
            </DurationWrapper>
            <CinCoutContainer>
              <CinCoutWrapper>
                <CinCoutHeading>Check-In</CinCoutHeading>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setCheckInDate(date)}
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "0px, 10px",
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false,
                      boundariesElement: "viewport",
                    },
                  }}
                  customInput={<DateInput />}
                  minDate={new Date()}
                />
              </CinCoutWrapper>
              <CinCoutWrapper>
                <CinCoutHeading>Check-Out</CinCoutHeading>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "-100px, 10px",
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false,
                      boundariesElement: "viewport",
                    },
                  }}
                  customInput={<DateInput />}
                  minDate={minEndDate}
                />
              </CinCoutWrapper>
            </CinCoutContainer>
            <Disclaimer>
              Prices not valid for dates 15th Dec - 05th Jan
            </Disclaimer>
            <Line />
            <CinCoutHeading>Select Rooms</CinCoutHeading>
          </Top>
          {/*
            test
            */}
          <RoomsContainer className="rooms-container">
            {inventory.map((room, i) => (
              <RoomCard key={room.type}>
                <ImageCon>
                  {room.size !== "-1" ||
                  room.balcony !== "-1" ||
                  room.view !== "-1" ||
                  room.features[0] !== "-1" ? (
                    <RoomImage
                      style={{
                        backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${slug}/${room.image[0]}.jpg)`,
                      }}
                      onClick={() => {
                        setRoomPopup({
                          size: room.size,
                          balcony: room.balcony,
                          view: room.view,
                          features: room.features,
                          images: room.image,
                          isOpen: true,
                          closePopup: () => {
                            setRoomPopup({
                              size: "-1",
                              balcony: "-1",
                              view: "-1",
                              features: ["-1"],
                              images: [],
                              isOpen: false,
                              closePopup: () => {},
                              start: false,
                            });
                          },
                          start: true,
                        });
                      }}
                    />
                  ) : (
                    <RoomImage
                      style={{
                        backgroundImage: `url(https://d1xmqx9e0b6ljd.cloudfront.net/${slug}/${room.image[0]}.jpg)`,
                      }}
                    />
                  )}

                  {room.size !== "-1" ||
                  room.view !== "-1" ||
                  room.balcony !== "-1" ? (
                    <MicroDetails>
                      {room.size !== "-1" ? (
                        <span>&bull; Room Size: {room.size} sqft.</span>
                      ) : null}
                      {room.balcony !== "-1" ? (
                        <span>&bull; {room.balcony}</span>
                      ) : null}
                      {room.view !== "-1" ? (
                        <span>&bull; {room.view}</span>
                      ) : null}
                      {room.features[0] !== "-1" ? (
                        <span
                          style={{
                            color: "#ff6b6c",
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            setRoomPopup({
                              size: room.size,
                              balcony: room.balcony,
                              view: room.view,
                              features: room.features,
                              images: room.image,
                              isOpen: true,
                              closePopup: () => {
                                setRoomPopup({
                                  size: "-1",
                                  balcony: "-1",
                                  view: "-1",
                                  features: ["-1"],
                                  images: [],
                                  isOpen: false,
                                  closePopup: () => {},
                                  start: false,
                                });
                              },
                              start: true,
                            });
                          }}
                        >
                          View More Details
                        </span>
                      ) : null}
                    </MicroDetails>
                  ) : null}
                </ImageCon>
                <RoomDetails>
                  <Category>{room.type}</Category>
                  {room.short.map((sharing, j) => (
                    <SubCategory key={sharing + i + j}>
                      <RoomSharing>
                        <img
                          src={
                            mappingImages[mappingTree.indexOf(sharing.sharing)]
                          }
                          alt="sharing.sharing"
                        />
                        <span>{sharing.sharing}</span>
                      </RoomSharing>
                      <RoomQuantity>
                        <RoomPriceContainer>
                          <PriceObject>
                            {room.ultrashort[j].cost >
                            Number(
                              Math.round(getNoOfDays(startDate, endDate)) < 21
                                ? Math.round(getNoOfDays(startDate, endDate)) <
                                  16
                                  ? Math.round(
                                      getNoOfDays(startDate, endDate)
                                    ) < 11
                                    ? Math.round(
                                        getNoOfDays(startDate, endDate)
                                      ) < 6
                                      ? room.ultrashort[j].cost
                                      : sharing.cost
                                    : room.normal[j].cost
                                  : room.long[j].cost
                                : room.ultralong[j].cost
                            ) ? (
                              <Striked>₹{room.ultrashort[j].cost}</Striked>
                            ) : null}
                            <RoomPrice>
                              ₹
                              {Math.round(getNoOfDays(startDate, endDate)) < 21
                                ? Math.round(getNoOfDays(startDate, endDate)) <
                                  16
                                  ? Math.round(
                                      getNoOfDays(startDate, endDate)
                                    ) < 11
                                    ? Math.round(
                                        getNoOfDays(startDate, endDate)
                                      ) < 6
                                      ? room.ultrashort[j].cost
                                      : sharing.cost
                                    : room.normal[j].cost
                                  : room.long[j].cost
                                : room.ultralong[j].cost}
                            </RoomPrice>
                            {room.ultrashort[j].cost >
                            Number(
                              Math.round(getNoOfDays(startDate, endDate)) < 21
                                ? Math.round(getNoOfDays(startDate, endDate)) <
                                  16
                                  ? Math.round(
                                      getNoOfDays(startDate, endDate)
                                    ) < 11
                                    ? Math.round(
                                        getNoOfDays(startDate, endDate)
                                      ) < 6
                                      ? room.ultrashort[j].cost
                                      : sharing.cost
                                    : room.normal[j].cost
                                  : room.long[j].cost
                                : room.ultralong[j].cost
                            ) ? (
                              <Discount>
                                {Math.round(
                                  ((room.ultrashort[j].cost -
                                    Number(
                                      Math.round(
                                        getNoOfDays(startDate, endDate)
                                      ) < 21
                                        ? Math.round(
                                            getNoOfDays(startDate, endDate)
                                          ) < 16
                                          ? Math.round(
                                              getNoOfDays(startDate, endDate)
                                            ) < 11
                                            ? Math.round(
                                                getNoOfDays(startDate, endDate)
                                              ) < 6
                                              ? room.ultrashort[j].cost
                                              : sharing.cost
                                            : room.normal[j].cost
                                          : room.long[j].cost
                                        : room.ultralong[j].cost
                                    )) *
                                    100) /
                                    room.ultrashort[j].cost
                                )}
                                % off
                              </Discount>
                            ) : null}
                          </PriceObject>
                          <PerUnit>per {room.unit} per night</PerUnit>
                        </RoomPriceContainer>

                        <RoomQty>
                          {cartDetails[i].rooms[j].count > 0 ? (
                            <PlusMinusButton>
                              <span
                                onClick={() => {
                                  removeRoom(i, j);
                                }}
                              >
                                -
                              </span>
                              <span>{cartDetails[i].rooms[j].count}</span>
                              <PlusButton
                                isMaxed={cartDetails[i].isMaxed}
                                onClick={() => {
                                  addRoom(i, j);
                                }}
                              >
                                +
                              </PlusButton>
                            </PlusMinusButton>
                          ) : (
                            <AddRoomButton
                              isMaxed={cartDetails[i].isMaxed}
                              onClick={() => {
                                addRoom(i, j);
                              }}
                            >
                              ADD
                            </AddRoomButton>
                          )}
                        </RoomQty>
                      </RoomQuantity>
                    </SubCategory>
                  ))}
                </RoomDetails>
              </RoomCard>
            ))}
          </RoomsContainer>
          {breakfast + lunch + dinner > 10 ? (
            <AddMeals>
              <AddMealsHeading>Add Meals</AddMealsHeading>
              <AddMealsGrid>
                {breakfast > 0 ? (
                  <CheckBox
                    name="breakfast"
                    label={"Breakfast @ INR " + breakfast + "/person/day"}
                    handleChange={() => {
                      if (breakfastBox) {
                        setBreakfast(false);
                      } else {
                        setBreakfast(true);
                      }
                    }}
                    checked={breakfastBox}
                  />
                ) : null}
                {lunch > 0 ? (
                  <CheckBox
                    name="lunch"
                    label={"Lunch @ INR " + lunch + "/person/day"}
                    handleChange={() => {
                      if (lunchBox) {
                        setLunch(false);
                      } else {
                        setLunch(true);
                      }
                    }}
                    checked={lunchBox}
                  />
                ) : null}
                {dinner > 0 ? (
                  <CheckBox
                    name="dinner"
                    label={"Dinner @ INR " + dinner + "/person/day"}
                    handleChange={() => {
                      if (dinnerBox) {
                        setDinner(false);
                      } else {
                        setDinner(true);
                      }
                    }}
                    checked={dinnerBox}
                  />
                ) : null}
              </AddMealsGrid>
            </AddMeals>
          ) : null}
          <div>
            <CostingContainer>
              <CostingText>Total Cost</CostingText>
              <CostingValue>₹ {getGrandTotal()}</CostingValue>
            </CostingContainer>
            <PaymentButton onClick={bookNow}>
              <span>Book Now</span>
            </PaymentButton>
          </div>
        </SubContainer>
      </Container>
      <EmptyCartAlert active={emptyCartAlert}>
        <span>Cart is Empty</span>
      </EmptyCartAlert>
      <BookNowPopup
        isActive={useSelector(selectBookingPopup)}
        cart={cartDetails
          .map((room) => {
            return {
              type: room.type,
              image: room.image,
              rooms: room.rooms.filter((sharing) => sharing.count > 0),
            };
          })
          .filter((room) => room.rooms.length > 0)}
        days={Math.round(getNoOfDays(startDate, endDate))}
        checkIn={startDate}
        checkOut={endDate}
        title={title}
        slug={slug}
      />
      <RoomPopup {...roomPopup} slug={slug} />
    </Fragment>
  );
};

export default BookNow;
