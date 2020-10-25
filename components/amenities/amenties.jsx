import React, { Fragment } from "react";

import { Container } from "./amenities.style";

const Amenities = (value) => {
  const mappingTree = [
    {
      title: "well furnished rooms",
      text: "Well Furnished Rooms",
      image: "/amenities/well-furnished-rooms.svg",
    },
    { title: "wifi", text: "WiFi", image: "/amenities/wifi.svg" },
    {
      title: "power backup",
      text: "Power Backup",
      image: "/amenities/power-backup.svg",
    },
    {
      title: "homely meals",
      text: "Homely Meals",
      image: "/amenities/homely-meals.svg",
    },
    {
      title: "daily meals",
      text: "Homely Meals",
      image: "/amenities/homely-meals.svg",
    },
    {
      title: "regular sanitisation",
      text: "Regular Sanitisation",
      image: "/amenities/regular-sanitisation.svg",
    },
    {
      title: "safety guidelines",
      text: "Safety Guidelines",
      image: "/amenities/safety-guidelines.svg",
    },
    {
      title: "housekeeping service",
      text: "Housekeeping Service",
      image: "/amenities/regular-housekeeping.svg",
    },
    {
      title: "swimming pool",
      text: "Swimming Pool",
      image: "/amenities/swimming-pool.svg",
    },
    { title: "parking", text: "Parking", image: "/amenities/parking.svg" },
    {
      title: "caretaker",
      text: "Caretaker",
      image: "/amenities/caretaker.svg",
    },
    { title: "cafe", text: "Cafe", image: "/amenities/cafe.svg" },
    {
      title: "kitchenette",
      text: "Kitchenette",
      image: "/amenities/kitchenette.svg",
    },
    {
      title: "restaurant",
      text: "Restaurant",
      image: "/amenities/restaurant.svg",
    },
    {
      title: "room service",
      text: "Room Service",
      image: "/amenities/room-service.svg",
    },
    { title: "bar", text: "Bar", image: "/amenities/bar.svg" },
    {
      title: "balcony/terrace",
      text: "Balcony/Terrace",
      image: "/amenities/balcony.svg",
    },
    {
      title: "mountain views",
      text: "Mountain Views",
      image: "/amenities/mountain-views.svg",
    },
    {
      title: "beach views",
      text: "Beach Views",
      image: "/amenities/beach-views.svg",
    },
    {
      title: "indoor games",
      text: "Indoor Games (Board Games)",
      image: "/amenities/indoor-games.svg",
    },
    {
      title: "outdoor sports",
      text: "Outdoor Sports",
      image: "/amenities/outdoor-sports.svg",
    },
    {
      title: "bonfire",
      text: "Bonfire (on Request)",
      image: "/amenities/bonfire.svg",
    },
    {
      title: "bonfire request",
      text: "Bonfire (on Request)",
      image: "/amenities/bonfire.svg",
    },
    {
      title: "lawn",
      text: "Lawn",
      image: "/amenities/lawn.svg",
    },
    {
      title: "bonfire paid",
      text: "Bonfire (Paid)",
      image: "/amenities/bonfire-paid.svg",
    },
    {
      title: "washing machine",
      text: "Washing Machine",
      image: "/amenities/washing-machine.svg",
    },
    {
      title: "refrigerator",
      text: "Refrigerator",
      image: "/amenities/refrigerator.svg",
    },
    {
      title: "kitchen",
      text: "Kitchen",
      image: "/amenities/kitchen.svg",
    },
    {
      title: "table chair setup",
      text: "Table & Chair Setup",
      image: "/amenities/table-chair.svg",
    },
    {
      title: "forest view",
      text: "Forest View",
      image: "/amenities/forest-view.svg",
    },
    {
      title: "lake view",
      text: "Lake View",
      image: "/amenities/lake-view.svg",
    },
    {
      title: "riverside location",
      text: "Riverside Location",
      image: "/amenities/riverside.svg",
    },
  ];
  return (
    <Fragment>
      {mappingTree.map((treeItem, i) =>
        value.value === treeItem.title ? (
          <Container key={treeItem.title + i}>
            <img src={treeItem.image} alt={treeItem.title} />
            <span>{treeItem.text}</span>
          </Container>
        ) : null
      )}
    </Fragment>
  );
};

export default Amenities;
