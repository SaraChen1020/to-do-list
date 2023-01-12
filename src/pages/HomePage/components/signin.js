import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (activeItem === "signup") {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/list");
      });
    } else if (activeItem === "signin") {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/list");
      });
    }
  }

  return (
    <>
      <div className="signin-signup">
        <div
          className={`signup ${activeItem === "signup" ? "active" : ""}`}
          onClick={() => setActiveItem("signup")}
        >
          註冊
        </div>
        <div
          className={`signin ${activeItem === "signin" ? "active" : ""}`}
          onClick={() => setActiveItem("signin")}
        >
          登入
        </div>
      </div>
      <form onSubmit={onSubmit}>
        信箱
        <br />
        <input
          className="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="信箱"
          placeholder="請輸入信箱"
          type="email"
        />
        <br />
        密碼
        <br />
        <input
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="密碼"
          placeholder="請輸入密碼"
          type="password"
        />
        <br />
        <input
          type="submit"
          className="submit-btn"
          value={`${activeItem === "signup" ? "註冊" : "登入"}`}
        />
      </form>
    </>
  );
};

export default SignIn;
