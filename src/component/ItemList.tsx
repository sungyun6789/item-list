import React from "react";
import "../styles/ItemList.scss";
import data from "../dummy.json";

const ItemList = () => {
  const removeClick = (e: any) => {
    console.log(e);
  };

  return (
    <div className="item">
      <h4>안녕하세요! 관리자님!</h4>
      <div className="item-container">
        {data.map((item) => (
          <div key={item._id} className="box">
            <img src={item.imageUrl} className="img-box" alt="고양이" />
            {/* <span className="img-text">{e.gender}</span> */}
            <h3 className="name">{item.name}</h3>
            <span className="age">{item.age}살 입니다</span>
            <div className="button-box">
              <button onClick={removeClick}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
