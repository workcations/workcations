import React, { useState } from "react";
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";

import {
  Container,
  CheckInCheckOutContainer,
  CheckInDate,
} from "./calendar.style";

const CalendarComponent = ({ selectedDayRange, setSelectedDayRange }) => {
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

  const CheckInCheckOut = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={
        selectedDayRange.from
          ? `${selectedDayRange.from.day} -
              ${selectedDayRange.from.month} -
              ${selectedDayRange.from.year}
            }`
          : ""
      }
      className="calendarInputCustom"
    />
  );

  return (
    <Container>
      <CheckInCheckOutContainer>
        <CheckInDate>
          <span>Check In</span>
          {selectedDayRange.from
            ? `${selectedDayRange.from.day} -
                ${selectedDayRange.from.month} -
                ${selectedDayRange.from.year}
              `
            : ""}
        </CheckInDate>
        <CheckInDate>
          <span>Check Out</span>
          {selectedDayRange.to
            ? `${selectedDayRange.to.day} -
                ${selectedDayRange.to.month} -
                ${selectedDayRange.to.year}
              `
            : ""}
        </CheckInDate>
      </CheckInCheckOutContainer>
      <DatePicker
        renderInput={CheckInCheckOut}
        value={selectedDayRange}
        onChange={setSelectedDayRange}
        minimumDate={utils().getToday()}
        maximumDate={maximumDate}
        disabledDays={disabledDays}
        shouldHighlightWeekends
        colorPrimary="#000000"
        colorPrimaryLight="rgba(0, 0, 0, 0.2)"
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
                borderRadius: "5px",
                padding: "1rem 2rem",
                cursor: "pointer",
              }}
            >
              Reset Dates
            </button>
          </div>
        )}
      />
    </Container>
  );
};

export default CalendarComponent;
