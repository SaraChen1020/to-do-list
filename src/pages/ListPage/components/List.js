import React from "react";
import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, id } = item;
        return <Item key={id} id={id} note={note} deleteData={deleteData} />;
      })}
    </div>
  );
};

export default List;
