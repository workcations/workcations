import React, { useState, Fragment } from "react";

import Inclusions from "../inclusions/inclusions";
import Exclusions from "../exclusions/exclusions";

import { Flex, FlexItem, Ques, Ans } from "./inclusions-exclusions.style";

const InclusionsExclusions = ({
  inclusions,
  exclusions,
  features,
  breakfast,
  lunch,
  dinner,
}) => {
  const [open, setOpen] = useState([false, false]);

  const expandItem = (i) => {
    let openState = [false, false];
    openState[i] = true;
    setOpen(openState);
  };

  const collapseItem = () => {
    setOpen([false, false]);
  };

  return (
    <Fragment>
      <h2>What do you get?</h2>
      <Flex>
        <FlexItem>
          <Ques
            onClick={() => {
              open[0] ? collapseItem() : expandItem(0);
            }}
          >
            <span>Inclusions</span>
            {open[0] ? (
              <img src="/minus.svg" alt="Collapse Answer" />
            ) : (
              <img src="/plus.svg" alt="Expand Answer" />
            )}
          </Ques>
          <Ans isOpen={open[0]}>
            <Inclusions
              inclusions={inclusions}
              features={features}
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
            />
          </Ans>
        </FlexItem>
        <FlexItem>
          <Ques
            onClick={() => {
              open[1] ? collapseItem() : expandItem(1);
            }}
          >
            <span>Exclusions</span>
            {open[1] ? (
              <img src="/minus.svg" alt="Collapse Answer" />
            ) : (
              <img src="/plus.svg" alt="Expand Answer" />
            )}
          </Ques>
          <Ans isOpen={open[1]}>
            <Exclusions
              exclusions={exclusions}
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
            />
          </Ans>
        </FlexItem>
      </Flex>
    </Fragment>
  );
};

export default InclusionsExclusions;
