import React, { useEffect, useState, useCallback } from 'react';
import '../styles/ItemList.scss';
import data from '../data.json';

interface ItemTypes {
  _id: string;
  imageUrl: string;
  age: number;
  name: string;
  gender: string;
}

const ItemList = () => {
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [result, setResult] = useState<ItemTypes[] | any>(data.slice(0, 20));
  const [index, setIndex] = useState(Math.floor(Math.random() * 15 + 5));

  const randomIndex = () => {
    setIndex(index + Math.floor(Math.random() * 15 + 5));
  };

  const infiniteScroll = useCallback(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    Math.max(scrollHeight, document.body.scrollHeight);
    Math.max(scrollTop, document.body.scrollTop);
    Math.max(clientHeight);

    if (scrollTop + clientHeight === scrollHeight) {
      setItemIndex(itemIndex + 20);
      setResult([...result, ...data.slice(itemIndex + 20, itemIndex + 40)]);
    }
  }, [itemIndex, result]);

  const RandomBox = () => result.splice(index, 0, <React.Fragment></React.Fragment>);

  useEffect(() => {
    randomIndex();
    RandomBox();
    window.addEventListener('scroll', infiniteScroll, true);
    return () => window.removeEventListener('scroll', infiniteScroll, true);
  }, [infiniteScroll, result]);

  const removeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(result.filter((data: ItemTypes) => data._id !== e.currentTarget.value));
  };

  return (
    <div className="item">
      <header>
        <h4>안녕하세요! 관리자님!</h4>
      </header>
      <div className="item-container">
        {result.map((item: ItemTypes) => (
          <div key={item._id} className="box">
            {item.name === undefined ? (
              <div className="randomBox">
                <p>사지 말고 입양하세요!</p>
              </div>
            ) : (
              <React.Fragment>
                <img src={item.imageUrl} alt="고양이" />
                <h3 className="name">{item.name}</h3>
                {item.gender === 'female' ? (
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
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
