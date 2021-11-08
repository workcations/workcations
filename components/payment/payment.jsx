import React from "react";

import { Container, Heading } from "./payment.style";

const Payment = () => (
  <Container>
    <Heading>Account Details</Heading>
    <ul>
      <li>
        Account Name: <strong>WORKCATIONS STAYS PRIVATE LIMITED</strong>
      </li>
      <li>
        Account Branch: <strong>AMAR COLONY - NEW DELHI</strong>
      </li>
      <li>
        Account No: <strong>50200051898306</strong>
      </li>
      <li>
        RTGS/NEFT IFSC: <strong>HDFC0001409</strong>
      </li>
    </ul>
  </Container>
);

export default Payment;
