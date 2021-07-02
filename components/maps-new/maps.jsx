import React from "react";
// import React, { useEffect, useState, useRef } from "react";
/* import { useDispatch, useSelector } from "react-redux";
import useSupercluster from "use-supercluster";
import Link from "next/link";

import { setPropertyListStart } from "../../redux/property/properties.actions";
import { selectPropertyList } from "../../redux/property/properties.selectors"; */

import {
  Container /* , MainMarker, AuxMarker, ClusterMarker  */,
} from "./maps.style";
/* 
import GoogleMapReact from "google-map-react";

const MarkerNew = ({ children }) => children; */

const Maps = ({ latitude, longitude, title, slug }) => {
  /* const dispatch = useDispatch();
  const propertyList = useSelector(selectPropertyList);

  const [filteredList, setFilteredList] = useState([]);

  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);

  const mapRef = useRef();

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

  useEffect(() => {
    setFilteredList(
      propertyList.filter(
        (item) => item.slug !== slug && item.visibility === "TRUE"
      )
    );
  }, [propertyList]); */

  /* const [points, setPoints] = useState([]);

  useEffect(() => {
    if (filteredList && filteredList.length > 1) {
      const pointsArray = filteredList.map((item) => {
        return {
          type: "Feature",
          properties: {
            cluster: false,
            crimeId: item.slug,
            category: item.type,
            title: item.title,
          },
          geometry: {
            type: "Point",
            coordinates: [
              parseFloat(Number(item.latlong[1]) - 0.0005),
              parseFloat(Number(item.latlong[0]) + 0.0005),
            ],
          },
        };
      });
      setPoints(pointsArray);
    }
  }, [filteredList]); */

  /* const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 76, maxZoom: 20 },
  }); */

  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${
    Number(latitude) + 0.0005
  },${
    Number(longitude) - 0.0005
  }&format=png32&zoom=12&size=600x400&maptype=roadmap&markers=icon:https://www.workcations.in/logo-map.png%7C${
    Number(latitude) + 0.0005
  },${Number(longitude) - 0.0005}&key=AIzaSyBAVnqm6RoXqOOBe88VqV5aDaRFgL-YSQc`;

  return (
    <Container>
      <img src={url} alt="" />
    </Container>
  );
};

export default Maps;

/*

<GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBAVnqm6RoXqOOBe88VqV5aDaRFgL-YSQc" }}
        defaultCenter={{
          lat: Number(latitude) + 0.0005,
          lng: Number(longitude) - 0.0005,
        }}
        defaultZoom={12}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        <MainMarker
          lat={Number(latitude) + 0.0005}
          lng={Number(longitude) - 0.0005}
        >
          <img src="/logo.png" />
          <span>{title}</span>
        </MainMarker>
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;

          if (isCluster) {
            return (
              <MarkerNew
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <ClusterMarker
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {}}
                >
                  {pointCount}
                </ClusterMarker>
              </MarkerNew>
            );
          }

          return (
            <MarkerNew
              key={`crime-${cluster.properties.crimeId}`}
              lat={latitude}
              lng={longitude}
            >
              <AuxMarker>
                <img src="/logo-black.png" alt="crime doesn't pay" />
                <span>
                  <Link
                    href={`/property/${cluster.properties.crimeId}`}
                    passHref
                  >
                    <a target="_blank">{cluster.properties.title}</a>
                  </Link>
                </span>
              </AuxMarker>
            </MarkerNew>
          );
        })}
      </GoogleMapReact>

      */
