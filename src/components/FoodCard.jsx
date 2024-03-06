import React from "react";
import "./FoodCard.css";
import { useDispatch } from "react-redux";
import { add } from "../features/CartSlice";
const FoodCard = (item, url, category, name, price, id) => {
  const dispatch = useDispatch();
  const AddToOrder = (item) => {
    dispatch(add(item));
  };
  return (
    <div key={item.id} className="foodCard">
      <div className="foodImage">
        <img src={item.url}></img>
      </div>
      <div className="details">
        <h4>{item.name}</h4>
        <h3>{item.price}</h3>
        <button onClick={() => AddToOrder(item)}>Order</button>
      </div>
    </div>
  );
};

export default FoodCard;
