import React from "react";
import * as gtag from "../ga";

import { useDispatch } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";

import { Container, Card, CardImage } from "./banners.style";

const Banners = ({ screenWidth }) => {
  const images = [
    "why-workcations-1",
    "why-workcations-2",
    "why-workcations-3",
  ];

  /* const [searchInputElement, setSearchInputElement] = useState(
    document.getElementsByClassName("headerstyle__SearchInput-sc-ofc8s5-12")[0]
  ); */

  const dispatch = useDispatch();

  const slideClickEvent = () => {
    gtag.event({
      category: "Slider Slide Clicked",
      action: "Slider Slide Clicked",
      label: "Slider Slide Clicked",
    });

    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("717219922161498");

        ReactPixel.trackCustom("Slider Slide Clicked", {
          action: "Slider Slide Clicked",
        });
      });
  };

  return (
    <Container className="remove-scrollbar">
      {images.map((item, i) => (
        <Card
          key={`Why Workcations ${item}`}
          onClick={(e) => {
            e.preventDefault();
            //searchInputElement.focus();
            slideClickEvent();
            dispatch(toggleContactPopupHidden());
          }}
        >
          <CardImage
            src={`/banners/why-workcations-${screenWidth < 601 ? "min-" : ""}${
              i + 1
            }.jpg`}
            alt={item}
          />
        </Card>
      ))}
    </Container>
  );
};

export default Banners;
