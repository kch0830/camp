import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
};

export default Calendar;
