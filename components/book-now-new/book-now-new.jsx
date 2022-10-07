import React from "react";
import Link from "next/link";

import { Container } from "./book-now-new.style";

const BookNowNew = ({ location, owner }) => {
  return (
    <Container>
      Sorry folks, we are not taking direct bookings from the website kindly
      contact this property{" "}
      <Link href={location.location} passHref>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          target="_blank"
        >
          ({location.title})
        </a>
      </Link>
      directly on
      <br />
      {owner.contactPerson.map((item) => item.phone).join(", ")}
    </Container>
  );
};

export default BookNowNew;
