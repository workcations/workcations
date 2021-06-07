import React, { useState, useEffect } from "react";

import {
  Container,
  FilterItem,
  FilterHeading,
  FilterHeadingBackground,
  FilterContent,
} from "./filters.style";

const Filters = ({ min, max, duration, states, cities, types }) => {
  const [isActive, setIsActive] = useState([false, false, false, false, false]);
  const filterKeys = [
    { title: "Price" },
    { title: "Duration" },
    { title: "States" },
    { title: "Types" },
    { title: "Cities" },
  ];
  const content = [[min, max], [duration], states, types, cities];

  return (
    <Container>
      {filterKeys.map((item, i) => (
        <FilterItem key={`Filter Item ${item.title}`} isActive={isActive[i]}>
          <FilterHeading
            onClick={(e) => {
              e.preventDefault();
              let newIsActive = [];
              if (isActive[i]) {
                newIsActive = [false, false, false, false, false];
              } else {
                newIsActive = isActive.map((subItem, j) =>
                  i === j ? true : false
                );
              }

              setIsActive(newIsActive);
            }}
            isActive={isActive[i]}
          >
            <FilterHeadingBackground isActive={isActive[i]} />
            <span>{item.title}</span>
          </FilterHeading>
          <FilterContent isActive={isActive[i]}>
            {content[i].map((subItem, j) => (
              <div key={`Filter Item ${item.title} Sub Item ${subItem.title}`}>
                <span>{!!subItem.title ? subItem.title : subItem}</span>
                <span>({!!subItem.count ? subItem.count : 0})</span>
              </div>
            ))}
          </FilterContent>
        </FilterItem>
      ))}
    </Container>
  );
};

export default Filters;
