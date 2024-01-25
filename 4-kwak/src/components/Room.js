import React from "react";
import "./css/Room.css";
import Calendar from "react-calendar";

const Room = () => {
  const reservation = () => {
    // 우측에 달력이 나오게
  };
  return (
    <>
      <div className="box-site-form">
        <button className="box-site-list" onClick={reservation}>
          1번사이트
        </button>
        <button className="box-site-list" onClick={reservation}>
          2번사이트
        </button>
        <button className="box-site-list" onClick={reservation}>
          3번사이트
        </button>
        <button className="box-site-list" onClick={reservation}>
          4번사이트
        </button>

        <div>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Room;
