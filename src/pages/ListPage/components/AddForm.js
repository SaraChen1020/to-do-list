import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

const AddForm = ({ add }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [...prevData, { id: v4(), note }];
    });
  }

  return (
    <div>
      <div className="title">To-Do List</div>
      <div className="add-form">
        <input type="text" value={note} onChange={noteChange} />
        <button className="addbtn" onClick={addItem}>
          新增紀錄
        </button>
      </div>
    </div>
  );
};

export default AddForm;
