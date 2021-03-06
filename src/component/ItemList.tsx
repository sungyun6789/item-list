import React from "react";
import "../styles/ItemList.scss";
import data from "../dummy.json";

const ItemList = () => {
  const onClick = () => console.log("삭제");

  const list = data.map((e) => (
    <div key={e._id} className="box">
      <img src={e.imageUrl} className="img-box" />
      {/* <span className="img-text">{e.gender}</span> */}
      <h3 className="name">{e.name}</h3>
      <span className="age">{e.age}살 입니다</span>
      <div className="button-box">
        <button onClick={onClick}>삭제</button>
      </div>
    </div>
  ));

  return (
    <div className="item">
      <h4>안녕하세요! 관리자님!</h4>
      <div className="item-container">{list}</div>
    </div>
  );
};

export default ItemList;
