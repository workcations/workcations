import React from "react";

import {
  Container,
  AddButton,
  QuantityContainer,
  MinusButton,
  Quantity,
  PlusButton,
} from "./add-to-cart.style";

const AddToCart = ({
  sharingCount,
  roomCount,
  roomAvailable,
  addRoom,
  removeRoom,
}) => (
  <Container>
    {sharingCount === 0 ? (
      <AddButton
        isMaxed={roomCount < roomAvailable ? false : true}
        onClick={addRoom}
      >
        Add
      </AddButton>
    ) : (
      <QuantityContainer>
        <MinusButton onClick={removeRoom}>-</MinusButton>
        <Quantity>{sharingCount}</Quantity>
        <PlusButton
          isMaxed={roomCount < roomAvailable ? false : true}
          onClick={addRoom}
        >
          +
        </PlusButton>
      </QuantityContainer>
    )}
  </Container>
);

export default AddToCart;
