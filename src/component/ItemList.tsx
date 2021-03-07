import React, { useEffect, useState } from "react";
import "../styles/ItemList.scss";
import data from "../dummy.json";

const ItemList = () => {
  const [list, setList] = useState(data);

  const removeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setList(list.filter((data) => data._id !== e.currentTarget.value));
  };

  useEffect(() => console.log(list), [list]);

  return (
    <>
      <div className="item">
        <h4>안녕하세요! 관리자님!</h4>
        <div className="item-container">
          {list.map((item) => (
            <div key={item._id} className="box">
              <img src={item.imageUrl} className="img-box" alt="고양이" />
              <h3 className="name">{item.name}</h3>
              {item.gender === "female" ? (
                <span className="img-text">암컷이다냥</span>
              ) : (
                <span className="img-text">수컷이다냥</span>
              )}
              <span className="age">{item.age}살 입니다</span>
              <div className="button-box">
                <button onClick={removeClick} value={item._id}>
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemList;
