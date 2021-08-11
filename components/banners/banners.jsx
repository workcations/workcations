import React, { Fragment, useState } from "react";
import Link from "next/link";

import { Container, Card, CardImage } from "./banners.style";

const Banners = () => {
  const images = [
    "why-workcations-1",
    "why-workcations-2",
    "why-workcations-3",
  ];

  const [searchInputElement, setSearchInputElement] = useState(
    document.getElementsByClassName("headerstyle__SearchInput-sc-ofc8s5-12")[0]
  );

  return (
    <Container className="remove-scrollbar">
      {images.map((item, i) => (
        <Card
          key={`Why Workcations ${item}`}
          onClick={(e) => {
            e.preventDefault();
            searchInputElement.focus();
          }}
        >
          <CardImage src={`/banners/${item}.jpg`} alt={item} />
        </Card>
      ))}
    </Container>
  );
};

export default Banners;
