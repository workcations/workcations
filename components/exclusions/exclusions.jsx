import React from "react";

import { Exclusion } from "./exclusions.style";

const Exclusions = ({ exclusions, breakfast, lunch, dinner }) => {
  let exclusionsAll = [];
  if (breakfast + lunch + dinner > 0) {
    let mealsString = "Daily Homely Meals:\n";
    if (breakfast > 0) {
      mealsString += "- Breakfast: ₹ " + breakfast + "/- per meal/person\n";
    }
    if (lunch > 0) {
      mealsString += "- Lunch: ₹ " + lunch + "/- per meal/person\n";
    }
    if (dinner > 0) {
      mealsString += "- Dinner: ₹ " + dinner + "/- per meal/person";
    }
    exclusionsAll.push(mealsString);
  }
  return (
    <div>
      {exclusions
        .concat(exclusionsAll)
        .filter((item) => item.toLowerCase().slice(0, 9) !== "any meals")
        .map((exclusion, i) => (
          <Exclusion key={i}>
            <img src="/exclusions/cross.svg" alt="Exclusion" />
            <div>
              {exclusion.split("\n").map((item, j) => (
                <div key={"exclusion" + (i + 1) + "-" + j}>{item}</div>
              ))}
            </div>
          </Exclusion>
        ))}
    </div>
  );
};

export default Exclusions;
