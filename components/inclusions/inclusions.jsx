import React from "react";

import { Inclusion } from "./inclusions.style";

const Inclusions = ({ inclusions, features, breakfast, lunch, dinner }) => {
  let inclusionsAll = ["Stay for the duration"];

  if (breakfast + lunch + dinner === 0) {
    inclusionsAll.push(
      "Daily Homely Meals:\n- Breakfast: 1 item + Bread Toast + Tea/Coffee\n- Lunch: 1 Veg Curry + 1 Seasonal Veg + Rice/Chapati + Salad/Pickle\n- Evening Tea/Coffee\n- Dinner: 1 Dal + 1 Seasonal Veg + Rice/Chapati + Salad/Pickle"
    );
  } else if (breakfast === 0) {
    inclusionsAll.push("Daily Breakfast");
  }

  if (features.indexOf("wifi") > -1) {
    inclusionsAll.push("WiFi Connection");
  }

  if (features.indexOf("power backup") > -1) {
    inclusionsAll.push("Electricity Charges & Power Backup");
  } else {
    inclusionsAll.push("Electricity Charges");
  }

  if (features.indexOf("housekeeping service") > -1) {
    inclusionsAll.push("Regular Housekeeping");
  }

  return (
    <div>
      {inclusionsAll.concat(inclusions).map((inclusion, i) => (
        <Inclusion key={i}>
          <img src="/inclusions/tick.svg" alt="Included" />
          <div>
            {inclusion.split("\n").map((item, j) => (
              <div key={"inclusion" + (i + 1) + "-" + j}>{item}</div>
            ))}
          </div>
        </Inclusion>
      ))}
    </div>
  );
};

export default Inclusions;
