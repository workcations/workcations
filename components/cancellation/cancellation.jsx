import React from "react";

import { Container, Heading } from "./cancellation.style";

const Cancellation = () => (
  <Container>
    <Heading>Cancellation Policy</Heading>
    <ol>
      <li>
        <strong>Less than 15 days</strong> from Check In Date:{" "}
        <strong>Full Value</strong> will be charged as cancellation fees.
      </li>
      <li>
        <strong>15-30 days</strong> from Check In Date:{" "}
        <strong>50% of the total amount</strong> will be charged as cancellation
        fees.
      </li>
      <li>
        <strong>30-45 days</strong> from Check In Date:{" "}
        <strong>25% of the total amount</strong> will be charged as cancellation
        fees.
      </li>
      <li>
        <strong>45+ days</strong> from Check In Date:{" "}
        <strong>10% of the total amount</strong> will be charged as cancellation
        fees.
      </li>
    </ol>
  </Container>
);

export default Cancellation;
