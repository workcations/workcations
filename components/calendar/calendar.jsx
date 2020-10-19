import React, { useState } from "react";
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";

import { Container } from "./calendar.style";

const CalendarComponent = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  console.log(selectedDayRange.from);
  console.log(selectedDayRange.to);

  const maximumDate = {
    year: 2021,
    month: 3,
    day: 31,
  };

  const disabledDays = [
    {
      year: 2020,
      month: 11,
      day: 20,
    },
    {
      year: 2020,
      month: 12,
      day: 21,
    },
    {
      year: 2021,
      month: 1,
      day: 7,
    },
  ];

  return (
    <Container>
      <Calendar
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        minimumDate={utils().getToday()}
        maximumDate={maximumDate}
        disabledDays={disabledDays}
        shouldHighlightWeekends
        colorPrimary="#ff6c6b"
        colorPrimaryLight="rgba(255, 108, 107, 0.2)"
        renderFooter={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem 2rem",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedDayRange({
                  from: null,
                  to: null,
                });
              }}
              style={{
                backgroundColor: "#ff6c6b",
                border: "#0fbcf9",
                color: "#fff",
                borderRadius: "0.5rem",
                padding: "1rem 2rem",
                cursor: "pointer",
              }}
            >
              Reset Values!
            </button>
          </div>
        )}
      />
    </Container>
  );
};

export default CalendarComponent;
