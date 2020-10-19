import React, { useState, Fragment } from "react";

import { Flex, FlexItem, Ques, Ans } from "./important-information.style";

const Info = [
  {
    Q: "Guidelines for Travellers",
    A:
      "1. Carry a valid Govt Id along with your address proof( Passport, Aadhar card, Driving License, Voter ID or any other valid ID). \n2. Download Aarogya Setu application on your mobile device. \n3. Carry hand sanitizer, N-95 mask and hand gloves.",
  },
  {
    Q: "Practices By WanderOn",
    A:
      "1. All the properties would be following the SOPs and guidelines as dictated by WHO to ensure a safe and hygienic stay.\n2. Contactless Check-In.\n3. Regular sanitization of the property covering all the touch-points and common areas.\n4. Your room/dorm would be sanitized twice a week.",
  },
  {
    Q: "Terms & Conditions",
    A:
      "1. We expect you to strictly adhere to the above guidelines for your own safety and for the safety of others.",
  },
];

const ImportantInformation = () => {
  const [open, setOpen] = useState(new Array(Info.length).fill(false));

  const expandFaq = (i) => {
    let openState = new Array(Info.length).fill(false);
    openState[i] = true;
    setOpen(openState);
  };

  const collapseFaq = () => {
    setOpen(new Array(Info.length).fill(false));
  };

  return (
    <Fragment>
      <Flex>
        {Info.map((item, i) => (
          <FlexItem key={i}>
            <Ques
              onClick={() => {
                open[i] ? collapseFaq() : expandFaq(i);
              }}
            >
              <span>{item.Q}</span>
              {open[i] ? (
                <img src="/minus.svg" alt="Collapse Answer" />
              ) : (
                <img src="/plus.svg" alt="Expand Answer" />
              )}
            </Ques>
            <Ans isOpen={open[i]}>
              {item.A.split("\n").map((ans, j) => (
                <p key={"fi" + (i + j + 1)}>{ans}</p>
              ))}
            </Ans>
          </FlexItem>
        ))}
      </Flex>
    </Fragment>
  );
};

export default ImportantInformation;
