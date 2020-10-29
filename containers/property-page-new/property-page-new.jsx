import React, { Fragment, useEffect } from "react";

import Head from "next/head";

import Gallery from "../../components/gallery/gallery";
import Facilities from "../../components/facilities-new/facilities";
import AboutComp from "../../components/about/about";
import Nearby from "../../components/nearby-new/nearby";
import InclusionsExclusions from "../../components/inclusions-exclusions/inclusions-exclusions";
import Inclusions from "../../components/inclusions/inclusions";
import Exclusions from "../../components/exclusions/exclusions";
import SimilarProperties from "../../components/similar-properties/similar-properties";
import Essentials from "../../components/essentials-new/essentials";
import Faqs from "../../components/faq/faq";
import ImportantInformation from "../../components/important-information/important-information";
import BookNow from "../../components/book-now/book-now";
import Maps from "../../components/maps-new/maps";
import Calendar from "../../components/calendar/calendar";
import BookNowNew from "../../components/book-now-new/book-now-new";

import PropertyDetailsContainer from "../../style-components/property-page-container/property-page-container.style";

import {
  MegaContainer,
  Title,
  Container,
  BookNowContainer,
  Details,
  Content,
  About,
  Heading,
  Internet,
  EmptySpace,
  InternetNote,
} from "./property-page-new.style";

const amenitiesTypes = [
  {
    slug: "well furnished rooms",
    title: "Well Furnished Rooms",
  },
  {
    slug: "wifi",
    title: "WiFi",
  },
  {
    slug: "power backup",
    title: "Power Backup",
  },
  {
    slug: "homely meals",
    title: "Homely Meals",
  },
  {
    slug: "regular sanitisation",
    title: "Regular Sanitisation",
  },
  {
    slug: "safety guidelines",
    title: "Safety Guidelines",
  },
  {
    slug: "housekeeping service",
    title: "Housekeeping Service",
  },
  {
    slug: "swimming pool",
    title: "Swimming Pool",
  },
  {
    slug: "parking",
    title: "Parking",
  },
  {
    slug: "caretaker",
    title: "Caretaker",
  },
  {
    slug: "cafe",
    title: "Cafe",
  },
  {
    slug: "kitchenette",
    title: "Kitchenette",
  },
  {
    slug: "restaurant",
    title: "Restaurant",
  },
  {
    slug: "room service",
    title: "Room Service",
  },
  {
    slug: "bar",
    title: "Bar",
  },
  {
    slug: "balcony/terrace",
    title: "Balcony/Terrace",
  },
  {
    slug: "mountain views",
    title: "Mountain Views",
  },
  {
    slug: "beach views",
    title: "Beach Views",
  },
  {
    slug: "indoor games",
    title: "Indoor Games (Board Games)",
  },
  {
    slug: "outdoor sports",
    title: "Outdoor Sports",
  },
  {
    slug: "bonfire",
    title: "Bonfire (On Request)",
  },
  {
    slug: "bonfire request",
    title: "Bonfire (On Request)",
  },
  {
    slug: "lawn",
    title: "Lawn",
  },
  {
    slug: "washing machine",
    title: "Washing Machine",
  },
  {
    slug: "refrigerator",
    title: "Refrigerator",
  },
  {
    slug: "kitchen",
    title: "Kitchen",
  },
  {
    slug: "table chair setup",
    title: "Table & Chair Setup",
  },
  {
    slug: "forest view",
    title: "Forest View",
  },
  {
    slug: "lake view",
    title: "Lake View",
  },
  {
    slug: "riverside location",
    title: "Riverside Location",
  },
  {
    slug: "microwave",
    title: "Microwave",
  },
  {
    slug: "barbeque",
    title: "Barbeque",
  },
  {
    slug: "jacuzzi",
    title: "Jacuzzi",
  },
  {
    slug: "daily meals",
    title: "Homely Meals",
  },
];

const houseRulesTypes = [
  "Family Friendly",
  "Couple Friendly",
  "Bachelors Allowed",
  "Pet Friendly/Pets are not allowed",
  "Smoking is Allowed in Premises",
  "Smoking is Allowed in Rooms",
  "Alcohol Consumption is Allowed in Rooms",
  "Alcohol Consumption is Allowed in Premises",
  "No Loud Music after 10 PM",
  "Outside Visitors are allowed",
];

const propertyTypes = [
  "apartment",
  "campsite",
  "homestay",
  "hotel",
  "hostel",
  "resort",
  "villa",
];

const PropertyPage = ({ property, loadElements, isServer }) => {
  /*useEffect(() => {
    if (loadElements) {
      const imageLinks = inventory.map((room) => room.image);
      for (let i = 0; i < imageLinks.length; i++) {
        imageLinks[i].forEach((image) => {
          fetch(`https://www.wanderon.in/workcations/${slug}/${image}.jpg`);
        });
      }
    }
  }, [loadElements]);*/

  const {
    id,
    shortTitle,
    location,
    slug,
    images,
    meals,
    features,
    description,
    type,
    inventory,
    disabledDatesArray,
    finalDisabledDatesArray,
  } = property;
  const { breakfast, lunchVeg, lunchNonVeg, dinnerVeg, dinnerNonVeg } = meals;
  const {
    amenities,
    internet,
    cinCout,
    houseRules,
    houseRulesExtra,
    inclusions,
    exclusions,
    nearby,
    essentials,
    minDuration,
  } = features;
  const { upload, download } = internet;
  const { checkIn, checkOut } = cinCout;
  const isHouseRules = houseRules.indexOf(true) === -1 ? false : true;
  const { coordinates } = location;
  const { latitude, longitude } = coordinates;

  return (
    <Fragment>
      <Head>
        <title>
          Workcations {id} - {shortTitle}
        </title>
      </Head>
      <MegaContainer>
        <Title>
          <h1>
            Workcations {id} - {shortTitle}
          </h1>
          <div>
            {location.city}, {location.state}
          </div>
        </Title>
        <Container>
          <Gallery loadElements={loadElements} images={images} slug={slug} />
          <Facilities
            breakfast={breakfast}
            lunch={lunchVeg}
            dinner={dinnerVeg}
            facilities={amenities.map((item) =>
              item !== -1 ? amenitiesTypes[item].slug : ""
            )}
          />
          <BookNowContainer>
            <BookNowNew
              inventory={inventory}
              slug={slug}
              title={`Workcations ${id} - ${shortTitle}`}
              minDuration={Number(minDuration)}
              breakfast={breakfast}
              lunch={lunchVeg}
              dinner={dinnerVeg}
              type={propertyTypes[type]}
              isServer={isServer}
              disabledDatesArray={disabledDatesArray}
              finalDisabledDatesArray={finalDisabledDatesArray}
            />
          </BookNowContainer>
          <Details>
            <div>
              <Content>
                <About>
                  <Heading>About</Heading>
                  {description.about.value.split("***").map((item, i) => (
                    <p key={`about ${i + 1}`}>{item}</p>
                  ))}
                  {description.location.available ? (
                    <p>
                      <strong>Location: </strong>
                      {description.location.value}
                    </p>
                  ) : null}
                  {description.parking.available ? (
                    <p>
                      <strong>Parking: </strong>
                      {description.parking.value}
                    </p>
                  ) : null}
                  {description.structure.available ? (
                    <p>
                      <strong>Structure: </strong>
                      {description.structure.value}
                    </p>
                  ) : null}
                </About>
                {upload !== -1 ? (
                  <Fragment>
                    <Heading>Internet Speed</Heading>
                    <Internet>
                      <p> Download Speed </p> <b> {download} Mbps</b>
                      <p> Upload Speed </p> <b> {upload} Mbps</b>
                    </Internet>
                    <InternetNote>
                      <b>Note:</b>Above mentioned internet speed is based on a
                      speedtest result & should be taken only as a reference.
                      Actual speed depends on the ISP & may vary from time to
                      time
                    </InternetNote>
                  </Fragment>
                ) : null}
                {checkIn !== "-1" || !isHouseRules ? (
                  <Fragment>
                    <Heading>House Rules</Heading>
                    {checkIn !== "-1" ? (
                      <Internet>
                        <p> Check-In: </p> <b> {checkIn} </b>
                        <p> Check-Out: </p> <b> {checkOut} </b>
                      </Internet>
                    ) : null}
                    {houseRulesExtra.map((item, i) => (
                      <p key={`rule${i + 1}`}>&bull; {item}</p>
                    ))}
                    {isHouseRules
                      ? houseRules.map((rule, i) =>
                          rule ? (
                            <p key={`rule${i + 1}`}>
                              &bull; {houseRulesTypes[i]}
                            </p>
                          ) : null
                        )
                      : null}
                  </Fragment>
                ) : null}
              </Content>
            </div>
            <div>
              <Content>
                <Heading>Inclusions:</Heading>
                <Inclusions
                  inclusions={inclusions}
                  exclusions={exclusions}
                  features={amenities.map((item) =>
                    item !== -1 ? amenitiesTypes[item].slug : ""
                  )}
                />
                <Internet />
                <Heading>Exclusions:</Heading>
                <Exclusions
                  inclusions={inclusions}
                  exclusions={exclusions}
                  features={amenities.map((item) =>
                    item !== -1 ? amenitiesTypes[item].slug : ""
                  )}
                />
              </Content>
            </div>
            <div>
              <Content>
                <Heading>Nearby Attractions</Heading>
                <Nearby nearby={nearby} />
              </Content>
            </div>
            <div>
              <Content>
                <Heading>Essentials</Heading>
                <Essentials {...essentials} />
              </Content>
            </div>
            <Heading>Similar Properties</Heading>
            <SimilarProperties
              slug={slug}
              type={propertyTypes[type]}
              city={location.city}
              state={location.state}
            />
            <EmptySpace />
            <Maps
              slug={slug}
              title={`Workcations ${id} - ${shortTitle}`}
              latitude={latitude}
              longitude={longitude}
            />
            <Heading>Important Information</Heading>
            <ImportantInformation />
            <EmptySpace />
          </Details>
        </Container>
      </MegaContainer>
    </Fragment>
  );
};

export default PropertyPage;

/*



<Container>
          <Gallery loadElements={loadElements} images={images} slug={slug} />
          <Facilities
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            facilities={features}
          />
          <BookNowContainer>
            <BookNow
              inventory={inventory}
              slug={slug}
              title={title}
              minDuration={Number(minDuration)}
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              type={type}
            />
          </BookNowContainer>
          {loadElements ? (
            <Details>
              <div>
                <Content>
                  <About>
                    <Heading>About</Heading>
                    <p>{about}</p>
                  </About>
                  {upload !== -1 ? (
                    <Fragment>
                      <Heading>Internet Speed</Heading>
                      <Internet>
                        <p> Download Speed </p> <b> {download} Mbps</b>
                        <p> Upload Speed </p> <b> {upload} Mbps</b>
                      </Internet>
                      <InternetNote>
                        <b>Note:</b>Above mentioned internet speed is based on a
                        speedtest result & should be taken only as a reference.
                        Actual speed depends on the ISP & may vary from time to
                        time
                      </InternetNote>
                    </Fragment>
                  ) : null}
                  {checkIn !== "-1" || houseRules[0] !== "-1" ? (
                    <Fragment>
                      <Heading>House Rules</Heading>
                      {checkIn !== "-1" ? (
                        <Internet>
                          <p> Check-In: </p> <b> {checkIn} </b>
                          <p> Check-Out: </p> <b> {checkOut} </b>
                        </Internet>
                      ) : null}
                      {houseRules[0] !== "-1"
                        ? houseRules.map((rule) => (
                            <p key={rule}>&bull; {rule}</p>
                          ))
                        : null}
                    </Fragment>
                  ) : null}
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Inclusions:</Heading>
                  <Inclusions
                    inclusions={inclusions}
                    exclusions={exclusions}
                    features={features}
                    breakfast={breakfast}
                    lunch={lunch}
                    dinner={dinner}
                  />
                  <Internet />
                  <Heading>Exclusions:</Heading>
                  <Exclusions
                    inclusions={inclusions}
                    exclusions={exclusions}
                    features={features}
                    breakfast={breakfast}
                    lunch={lunch}
                    dinner={dinner}
                  />
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Nearby Attractions</Heading>
                  <Nearby nearby={nearby} />
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Essentials</Heading>
                  <Essentials {...essentials} />
                </Content>
              </div>
              <Maps slug={slug} title={title} latlong={latlong} />
              <Heading>Similar Properties</Heading>
              <SimilarProperties
                slug={slug}
                type={type}
                city={city}
                state={state}
              />
              <EmptySpace />
              <Heading>Important Information</Heading>
              <ImportantInformation />
              <EmptySpace />
            </Details>
          ) : null}
        </Container>

        */
