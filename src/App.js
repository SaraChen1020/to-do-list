import React from "react";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  const [page, setPage] = useState(true);

  return (
    <div className="app">
      {page && <HomePage setPage={setPage} />}
      {!page && <ListPage setPage={setPage} />}
    </div>
  );
}

export default App;
