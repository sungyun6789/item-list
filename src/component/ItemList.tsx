import React from "react";
import "../styles/ItemList.scss";
import data from "../data.json";

// const Item = () => data.map((e) => <div>{e.name}</div>);

const ItemList = () => {
  const list = data.map((e) => (
    <div key={e._id} className="box">
      <img src={e.imageUrl} />
      <div>{e.name}</div>
      <span>{e.age}살 입니다</span>
      <button>삭제</button>
    </div>
  ));

  return (
    <div className="item">
      <div className="item-container">
        <div>{list}</div>
      </div>
    </div>
  );
};

export default ItemList;
