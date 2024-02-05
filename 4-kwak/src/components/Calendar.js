import React, { useState } from "react";
import Calendar from "react-calendar";
import "./css/Calendar.css";

const Chan = () => {
  const [value, onChange] = useState(new Date());

  const reservation = () => {
    console.log("예약하기 만들기!");
  };
  return (
    <>
      <div>
        <Calendar onChange={reservation} value={value} />
      </div>

      <form>찬혁</form>
    </>
  );
};

export default Chan;
