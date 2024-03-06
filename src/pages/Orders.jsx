import React from "react";
import "./Orders.css";
import { useSelector } from "react-redux";
import { del } from "../features/CartSlice";
import { useDispatch } from "react-redux";
const Orders = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const DeleteFromOrders = (index) => {
    dispatch(del(index));
  };
  return (
    <div className="mainOrders">
      {data.length == 0 ? (
        <center>
          <h1 className="noOrders" style={{ backgroundColor: "transparent" }}>
            No Orders
          </h1>
        </center>
      ) : (
        <div className="ordersList">
          <center>
            <h1 className="noOrders">Your Orders</h1>
          </center>
          <div className="orders">
            {data.map((item, index) => (
              <div key={item.id} className="foodCard">
                <div className="foodImage">
                  <img src={item.url}></img>
                </div>
                <div className="details">
                  <h4>{item.name}</h4>
                  <h3>{item.price}</h3>
                  <button onClick={() => DeleteFromOrders(index)}>
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
