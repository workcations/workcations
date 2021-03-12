import React from "react";

import { Container, Heading } from "./cancellation.style";

const Cancellation = () => (
  <Container>
    <br />
    <Heading>Cancellation Policy for Concentrix Employees</Heading>
    <br />
    <strong>Booking Duration: 1-5 Days</strong>
    <ol>
      <li>
        <strong>0-7 Days before Check-In:</strong> 15% of the Booking Value will
        be charged as Cancellation Fees
      </li>
      <li>
        <strong>7+ Days before Check-In:</strong> Full Refund will be provided
      </li>
    </ol>
    <br />
    <strong>Booking Duration: 6-15 Days</strong>
    <ol>
      <li>
        <strong>0-7 Days before Check-In:</strong> 30% of the Booking Value will
        be charged as Cancellation Fees
      </li>
      <li>
        <strong>8-15 Days before Check-In:</strong> 20% of the Booking Value
        will be charged as Cancellation Fees
      </li>
      <li>
        <strong>15+ Days before Check-In:</strong> Full Refund will be provided
      </li>
    </ol>
    <br />
    <strong>Booking Duration: 15+ Days</strong>
    <ol>
      <li>
        <strong>0-7 Days before Check-In:</strong> 50% of the Booking Value will
        be charged as Cancellation Fees
      </li>
      <li>
        <strong>8-15 Days before Check-In:</strong> 30% of the Booking Value
        will be charged as Cancellation Fees
      </li>
      <li>
        <strong>15-30 Days before Check-In:</strong> 20% of the Booking Value
        will be charged as Cancellation Fees
      </li>
      <li>
        <strong>30+ Days before Check-In:</strong> Full Refund will be provided
      </li>
    </ol>
    <br />
  </Container>
);

export default Cancellation;
