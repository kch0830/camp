import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/Form">SignUp</Link>
          </li>
          <li>
            <Link to="/LoginForm">Login</Link>
          </li>
          <li>
            <Link to="/Room">Room</Link>
          </li>
          <li>
            <Link to="/Calendar">Calendar</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
