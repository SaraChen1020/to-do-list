import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddForm = ({ add, user }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  async function addItem() {
    const data = { user_uid: user.uid, id: v4(), note: note };

    try {
      const docRef = await addDoc(collection(db, "toDoList"), data);
      console.log("test", docRef);
    } catch (error) {
      console.error("error", error);
    }

    add(function (prevData) {
      return [...prevData, { id: data.id, note: data.note }];
    });
  }

  return (
    <div>
      <div className="add-form">
        <input
          className="add-list"
          type="text"
          value={note}
          onChange={noteChange}
        />
        <button className="addbtn" onClick={addItem}>
          新增紀錄
        </button>
      </div>
    </div>
  );
};

export default AddForm;
