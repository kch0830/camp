import React from "react";
import "./css/Room.css";

const Room = () => {
  const reservation = () => {
    console.log("예약 확인");
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
      </div>
    </>
  );
};

export default Room;
