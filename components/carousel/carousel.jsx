import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors";

import {
  CarouselFlex,
  CarouselItem,
  Image,
  ImageText,
  Tag,
  CarouselPrice,
  CarouselDetails,
} from "./carousel.style";

const Carousel = ({ slug, type, city, state }) => {
  const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);
  const [similarProperties, setSimilarProperties] = useState([]);

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

  useEffect(() => {
    if (
      propertyList.length !== 0 &&
      slug.length !== 0 &&
      type.length !== 0 &&
      city.length !== 0 &&
      state.length !== 0
    ) {
      let list = [];
      let sluglist = [];

      propertyList.forEach((property) => {
        if (
          property.type === type &&
          property.location.city === city &&
          property.slug !== slug &&
          list.length < 5
        ) {
          list.push(property);
          sluglist.push(property.slug);
        }
      });

      propertyList.forEach((property) => {
        if (
          property.location.city === city &&
          property.slug !== slug &&
          sluglist.indexOf(property.slug) === -1 &&
          list.length < 5
        ) {
          list.push(property);
          sluglist.push(property.slug);
        }
      });

      propertyList.forEach((property) => {
        if (
          property.type === type &&
          property.location.state === state &&
          property.slug !== slug &&
          sluglist.indexOf(property.slug) === -1 &&
          list.length < 5
        ) {
          list.push(property);
          sluglist.push(property.slug);
        }
      });

      propertyList.forEach((property) => {
        if (
          property.location.state === state &&
          property.slug !== slug &&
          sluglist.indexOf(property.slug) === -1 &&
          list.length < 5
        ) {
          list.push(property);
          sluglist.push(property.slug);
        }
      });

      propertyList.forEach((property) => {
        if (
          property.type === type &&
          property.slug !== slug &&
          sluglist.indexOf(property.slug) === -1 &&
          list.length < 5
        ) {
          list.push(property);
          sluglist.push(property.slug);
        }
      });

      setSimilarProperties(list);
    }
  }, [propertyList]);

  return (
    <CarouselFlex className="carousel">
      {slug.length !== 0 &&
      type.length !== 0 &&
      city.length !== 0 &&
      state.length !== 0
        ? similarProperties.map((property) =>
            slug !== property.slug && property.visibility === "TRUE" ? (
              <Link
                href={"/property/" + property.slug}
                key={property.slug}
                passHref
              >
                <CarouselItem key={property.slug}>
                  <Image
                    style={{
                      backgroundImage:
                        "url(https://ik.imagekit.io/workcations/tr:f-auto/" +
                        property.slug +
                        "/" +
                        property.images[0] +
                        ".jpg)",
                    }}
                  >
                    <ImageText>
                      <Tag tag={property.type}>{property.type}</Tag>
                      <CarouselPrice>
                        {property.long}
                        <span>/night</span>
                      </CarouselPrice>
                    </ImageText>
                  </Image>
                  <CarouselDetails>
                    <div>{property.titleShort}</div>
                    <span>
                      {property.location.city}, {property.location.state}
                    </span>
                  </CarouselDetails>
                </CarouselItem>
              </Link>
            ) : null
          )
        : propertyList.map((property) =>
            slug !== property.slug && property.visibility === "TRUE" ? (
              <Link
                href={"/property/" + property.slug}
                key={property.slug}
                passHref
              >
                <CarouselItem key={property.slug}>
                  <Image
                    style={{
                      backgroundImage:
                        "url(https://ik.imagekit.io/workcations/tr:f-auto/" +
                        property.slug +
                        "/" +
                        property.images[0] +
                        ".jpg)",
                    }}
                  >
                    <ImageText>
                      <Tag tag={property.type}>{property.type}</Tag>
                      <CarouselPrice>
                        {property.long}
                        <span>/night</span>
                      </CarouselPrice>
                    </ImageText>
                  </Image>
                  <CarouselDetails>
                    <div>{property.titleShort}</div>
                    <span>
                      {property.location.city}, {property.location.state}
                    </span>
                  </CarouselDetails>
                </CarouselItem>
              </Link>
            ) : null
          )}
    </CarouselFlex>
  );
};

export default Carousel;
