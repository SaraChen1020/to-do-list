import React from "react";
import { useState } from "react";

import AddForm from "./components/AddForm";
import List from "./components/List";
import "./ListPage.css";

const ListPage = ({ setPage }) => {
  const [data, setData] = useState([]);

  function changeToHomePage() {
    setPage(true);
  }

  return (
    <div className="list-page">
      <AddForm add={setData} />
      <List listData={data} deleteData={setData} />
      <button className="back-home-btn" onClick={changeToHomePage}>
        返回首頁
      </button>
    </div>
  );
};

export default ListPage;
