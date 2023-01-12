import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddForm from "./components/AddForm";
import List from "./components/List";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./ListPage.css";

const ListPage = ({ user }) => {
  const [data, setData] = useState([]);

  async function getData() {
    const q = query(
      collection(db, "toDoList"),
      where("user_uid", "==", user.uid)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const list = doc.data();

      setData(function (prevData) {
        return [...prevData, { id: list.id, note: list.note }];
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list-page">
      <AddForm add={setData} user={user} />
      <List listData={data} deleteData={setData} />
      <Link to="/">
        <button className="back-home-btn">返回首頁</button>
      </Link>
    </div>
  );
};

export default ListPage;
