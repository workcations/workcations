import React, { useState, useEffect, Fragment } from "react";

import {
  OuterContainer,
  RoomPopupContainer,
  ActualContainer,
  Gallery,
  GalleryArrow,
  Features,
  Close,
} from "./room-popup.style";

const RoomPopup = ({
  images,
  size,
  balcony,
  view,
  features,
  isOpen,
  closePopup,
  slug,
  start,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (start) {
      setCurrentSlide(0);
    }
  }, [start]);

  const nextSlide = () => {
    if (currentSlide !== images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const previousSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  };

  let featuresList = [];

  if (size !== "-1") {
    featuresList.push("Room Size: " + size + " sqft.");
  }

  if (balcony !== "-1") {
    featuresList.push(balcony);
  }

  if (view !== "-1") {
    featuresList.push(view);
  }

  if (features[0] !== "-1") {
    features.forEach((element) => {
      featuresList.push(element);
    });
  }

  return (
    <Fragment>
      <OuterContainer isOpen={isOpen}>
        <RoomPopupContainer
          isOpen={isOpen}
          onClick={closePopup}
        ></RoomPopupContainer>
        <ActualContainer>
          <Close>
            <span onClick={closePopup}>Close</span>
          </Close>
          {images.length > 1 ? (
            <Gallery
              style={{
                backgroundImage: `url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${images[currentSlide]}.jpg)`,
              }}
            >
              <GalleryArrow>
                <svg
                  viewBox="0 0 32 32"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  onClick={previousSlide}
                >
                  <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
                </svg>
                <svg
                  viewBox="0 0 32 32"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  onClick={nextSlide}
                >
                  <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
                </svg>
              </GalleryArrow>
            </Gallery>
          ) : isOpen ? (
            <Gallery
              style={{
                backgroundImage: `url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${images[0]}.jpg)`,
              }}
            ></Gallery>
          ) : null}
          <Features>
            <ul>
              {featuresList.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </Features>
        </ActualContainer>
      </OuterContainer>
    </Fragment>
  );
};

export default RoomPopup;
