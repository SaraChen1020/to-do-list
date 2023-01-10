import React from "react";
import NavBar from "./components/navbar";
import Welcome from "./components/welcome";
import "./HomePage.css";

const HomePage = ({ setPage }) => {
  function changeToListPage() {
    setPage(false);
  }

  return (
    <>
      <NavBar />
      <Welcome />
      <button className="go-list-btn" onClick={changeToListPage}>
        點此開始
      </button>
    </>
  );
};

export default HomePage;
