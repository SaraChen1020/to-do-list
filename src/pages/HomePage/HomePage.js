import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./components/signin";
import "./HomePage.css";

const HomePage = ({ user }) => {
  return (
    <>
      {!user && <SignIn />}
      {user && (
        <Link to="/list">
          <button className="go-list-btn">點此開始</button>
        </Link>
      )}
    </>
  );
};

export default HomePage;
