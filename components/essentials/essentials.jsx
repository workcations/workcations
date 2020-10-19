import React from "react";

import {
  Container,
  Content,
  Grid,
  FlexItem,
  GridContent,
} from "./essentials.style";

const Essentials = (essentials) => (
  <Container>
    <Grid>
      <FlexItem>
        <GridContent>
          <img src="/essentials/medical.svg" alt="Medical Centre" />
          Medical Clinic
        </GridContent>
        <p>-----</p>
        <p>{essentials[0].distance} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/market.svg" alt="Market Area" />
          Market Area
        </GridContent>
        <p>-----</p>
        <p>{essentials[1].distance} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/fuel.svg" alt="Petrol Pump" />
          Petrol Pump
        </GridContent>
        <p>-----</p>
        <p>{essentials[3].distance} Km</p>
      </FlexItem>
      <FlexItem>
        <GridContent>
          <img src="/essentials/atm.svg" alt="ATM" />
          ATM
        </GridContent>
        <p>-----</p>
        <p>{essentials[2].distance} Km</p>
      </FlexItem>
    </Grid>
  </Container>
);

export default Essentials;
