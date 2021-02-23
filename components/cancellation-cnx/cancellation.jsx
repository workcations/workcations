import React from "react";

import { Container, Heading } from "./cancellation.style";

const Cancellation = () => (
  <Container>
    <Heading>Cancellation Policy for Concentrix Employees</Heading>
    <ol>
      <li>
        <strong>Less than 7 days</strong> from Check In Date:{" "}
        <strong>A minimal amount</strong> will be charged as cancellation fees
        and the rest of your amount will be adjusted for future bookings.
      </li>
      <li>
        <strong>7+ days</strong> from Check In Date:{" "}
        <strong>Full Refund</strong> will be provided fees.
      </li>
    </ol>
  </Container>
);

export default Cancellation;
