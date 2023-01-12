import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const NavBar = ({ user }) => {
  const navigate = useNavigate();

  function logOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <nav className="header">
      <div className="navbar">
        <div className="title">
          <Link to="/">My To-Do List</Link>
        </div>
        {user && (
          <div className="section">
            <div onClick={logOut}>logout</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
