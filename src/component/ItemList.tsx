import React, { useEffect, useState, useCallback } from "react";
import "../styles/ItemList.scss";
import data from "../data.json";

const ItemList = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(data.slice(0, 20));

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = Math.max(document.documentElement.clientHeight);

    if (scrollTop + clientHeight === scrollHeight) {
      setItemIndex(itemIndex + 20);
      setResult(result.concat(data.slice(itemIndex + 20, itemIndex + 40)));
    }
  }, [itemIndex, result]);

  const removeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(result.filter((data) => data._id !== e.currentTarget.value));
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, true);
  }, [result, infiniteScroll]);

  return (
    <>
      <div className="item">
        <header>
          <h4>안녕하세요! 관리자님!</h4>
        </header>
        <div className="item-container">
          {result.map((item) => (
            <div key={item._id} className="box">
              <img src={item.imageUrl} alt="고양이" />
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
