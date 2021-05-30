import React, { useState, useRef, useEffect, Fragment } from "react";
import Slider from "react-slick";
import * as gtag from "../ga";

import {
  Container,
  SlickContainer,
  HeroImage,
  SlickContainer2,
  ThumbnailImage,
  GalleryArrow,
  ThumbnailContainer,
  ArrowContainer,
  Thumbnails,
} from "./gallery.style";

const Gallery = ({ images, slug, loadElements }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);
  const [lastImage, setLastImage] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    cssEase: "ease-in-out",
    fade: true,
  };

  const settings2 = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 0,
    speed: 500,
    cssEase: "ease-in-out",
    afterChange: (index) => {
      if (index === images.length - 1 && !lastImage) {
        gtag.event({
          category: "Content View - All Gallery Images Viewed",
          action: "Content View - All Gallery Images Viewed",
          label: "Content View - All Gallery Images Viewed",
        });

        import("react-facebook-pixel")
          .then((x) => x.default)
          .then((ReactPixel) => {
            ReactPixel.init("717219922161498");

            ReactPixel.track("ViewContent", {
              action: "All Gallery Images Viewed",
            });
          });

        setLastImage(true);
      }

      setCurrentSlide(index);
      if (mainSlider) {
        mainSlider.current.slickGoTo(index);
      }
    },
  };

  return (
    <Container>
      <SlickContainer>
        <GalleryArrow>
          <svg
            viewBox="0 0 32 32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            onClick={() => {
              if (mainSlider) {
                mainSlider.current.slickPrev();
              }
            }}
          >
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            onClick={() => {
              if (mainSlider) {
                mainSlider.current.slickNext();
              }
            }}
          >
            <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
          </svg>
        </GalleryArrow>
        <Slider
          asNavFor={thumbnailSlider ? thumbnailSlider.current : null}
          ref={mainSlider}
          {...settings}
        >
          {images.map((image, i) => (
            <HeroImage key={image}>
              <div
                style={{
                  backgroundImage: `url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg)`,
                }}
              >
                <span>
                  {i + 1}/{images.length}
                </span>
                <img
                  src={`https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg`}
                  alt={`${slug} ${image}`}
                />
              </div>
            </HeroImage>
          ))}
        </Slider>
      </SlickContainer>
      <ThumbnailContainer>
        <div></div>
        <SlickContainer2>
          <Slider
            asNavFor={mainSlider ? mainSlider.current : null}
            ref={thumbnailSlider}
            {...settings2}
          >
            {images.map((image, i) => (
              <ThumbnailImage key={`thumbnail${i}`}>
                {i === currentSlide ? (
                  <div
                    style={{
                      backgroundImage: `url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg)`,
                    }}
                  ></div>
                ) : (
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%),url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg)`,
                    }}
                  ></div>
                )}
              </ThumbnailImage>
            ))}
          </Slider>
        </SlickContainer2>
        <div></div>
      </ThumbnailContainer>
    </Container>

    /* asNavFor={mainRef} */

    /* asNavFor={thumbnailRef} */

    /*<Container>
      <HeroImage
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
      </HeroImage>
      <ThumbnailContainer>
        <ArrowContainer onClick={previousThumbnail}>
          <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
          </svg>
        </ArrowContainer>

        <Thumbnails ref={thumbnailContainer} className="thumbnail-container">
          {images.map((image, i) =>
            i === currentSlide && i < count ? (
              <div
                key={image}
                style={{
                  backgroundImage: `url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            ) : i < count ? (
              <div
                key={image}
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%),url(https://ik.imagekit.io/workcations/tr:f-auto/${slug}/${image}.jpg)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            ) : (
              <div
                key={image}
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            )
          )}
        </Thumbnails>
        <ArrowContainer onClick={nextThumbnail}>
          <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
          </svg>
        </ArrowContainer>
      </ThumbnailContainer>
    </Container>*/
  );
};

export default Gallery;

/*

      {loadElements ? (
        <ThumbnailContainer>
          <ArrowContainer onClick={previousThumbnail}>
            <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
            </svg>
          </ArrowContainer>

          <Thumbnails ref={thumbnailContainer} className="thumbnail-container">
            {images.map((image, i) =>
              i === currentSlide ? (
                <div
                  key={image}
                  style={{
                    backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
                  }}
                  onClick={() => {
                    activeSlide(i);
                  }}
                ></div>
              ) : (
                <div
                  key={image}
                  style={{
                    backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%),url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
                  }}
                  onClick={() => {
                    activeSlide(i);
                  }}
                ></div>
              )
            )}
          </Thumbnails>
          <ArrowContainer onClick={nextThumbnail}>
            <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
            </svg>
          </ArrowContainer>
        </ThumbnailContainer>
      ) : null}

      */
