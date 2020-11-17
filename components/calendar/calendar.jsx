import React, { useState } from "react";
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";

import {
  Container,
  CheckInCheckOutContainer,
  CheckInDate,
} from "./calendar.style";

const CalendarComponent = ({
  selectedDayRange,
  setSelectedDayRange,
  disabledDays,
  maximumDate,
  pickerPos,
}) => {
  const CheckInCheckOut = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={""}
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
        colorPrimary="#ff6c6b"
        colorPrimaryLight="rgba(255, 108, 107, 0.2)"
        calendarPopperPosition={pickerPos}
      />
    </Container>
  );
};

export default CalendarComponent;

/*

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

        */
