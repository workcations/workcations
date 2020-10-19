import React from "react";

import Amenities from "../amenities/amenties";

import { Container } from "./facilities.style";

const Facilities = ({ facilities, breakfast, lunch, dinner }) => {
  let newFacilities = [];
  for (let i = 0; i < facilities.length; i++) {
    if (facilities[i] !== "daily meals") {
      newFacilities.push(facilities[i]);
    } else if (
      Number(breakfast) === 0 &&
      Number(lunch) === 0 &&
      Number(dinner) === 0
    ) {
      newFacilities.push(facilities[i]);
    }
  }
  return (
    <Container className="facilities_container">
      {newFacilities.map((feature, i) => (
        <Amenities key={i} value={feature}></Amenities>
      ))}
    </Container>
  );
};

export default Facilities;
