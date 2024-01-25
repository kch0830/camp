import React, { useState } from "react";
import Calendar from "react-calendar";
import "./css/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
