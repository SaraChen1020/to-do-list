import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import NavBar from "./pages/components/navbar";
import { auth } from "./utils/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/list" element={<ListPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
