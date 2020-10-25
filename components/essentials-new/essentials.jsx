import React from "react";

import {
  Container,
  Content,
  Grid,
  FlexItem,
  GridContent,
} from "./essentials.style";

const Essentials = ({ atm, market, medical, petrol }) => (
  <Container>
    <Grid>
      <FlexItem>
        <GridContent>
          <img src="/essentials/medical.svg" alt="Medical Centre" />
          Medical Clinic
        </GridContent>
        <p>-----</p>
        <p>{medical} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/market.svg" alt="Market Area" />
          Market Area
        </GridContent>
        <p>-----</p>
        <p>{market} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/fuel.svg" alt="Petrol Pump" />
          Petrol Pump
        </GridContent>
        <p>-----</p>
        <p>{petrol} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/atm.svg" alt="ATM" />
          ATM
        </GridContent>
        <p>-----</p>
        <p>{atm} Km</p>
      </FlexItem>
    </Grid>
  </Container>
);

export default Essentials;
