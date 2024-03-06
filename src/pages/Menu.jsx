import React, { useEffect, useState } from "react";
import "./Menu.css";
import axios from "axios";
import FoodCard from "../components/FoodCard";
const Menu = () => {
  const FoodItems = [
    "All",
    "Snacks",
    "Biryani",
    "Curries",
    "Desserts",
    "Drinks",
  ];
  const [filter, setFilter] = useState("All");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://saiprakash-voldemort.github.io/RestaurantWebAppApi/restaurantMenu.json"
      )
      .then((response) => setData(response.data));
  }, []);
  return (
    <div className="menuDiv">
      <div className="menu">
        <div className="filterFood">
          <h1>Filter:</h1>
          <select
            name="filter"
            id="foodItems"
            onChange={(e) => setFilter(e.target.value)}
          >
            {FoodItems.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {filter == "All" && (
          <>
            {" "}
            <div className="snacks">
              <h1>Snacks</h1>
              <hr></hr>
              <div className="snackItems">
                {data.map((item) => {
                  if (item.category == "snacks")
                    return (
                      <FoodCard
                        item={item}
                        url={item.url}
                        category={item.category}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                      />
                    );
                })}
              </div>
            </div>
            <div className="biryani">
              <h1>Biryani's</h1>
              <hr></hr>
              <div className="biryaniItems">
                {data.map((item) => {
                  if (item.category == "biryani")
                    return (
                      <FoodCard
                        item={item}
                        url={item.url}
                        category={item.category}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                      />
                    );
                })}
              </div>
            </div>
            <div className="curries">
              <h1>Curries</h1>
              <hr></hr>
              <div className="curryItems">
                {data.map((item) => {
                  if (item.category == "curries")
                    return (
                      <FoodCard
                        item={item}
                        url={item.url}
                        category={item.category}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                      />
                    );
                })}
              </div>
            </div>
            <div className="drinks">
              <h1>Drinks</h1>
              <hr></hr>
              <div className="drinkItems">
                {data.map((item) => {
                  if (item.category == "drinks")
                    return (
                      <FoodCard
                        item={item}
                        url={item.url}
                        category={item.category}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                      />
                    );
                })}
              </div>
            </div>
            <div className="desserts">
              <h1>Desserts</h1>
              <hr></hr>
              <div className="dessertItems">
                {data.map((item) => {
                  if (item.category == "desserts")
                    return (
                      <FoodCard
                        item={item}
                        url={item.url}
                        category={item.category}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                      />
                    );
                })}
              </div>
            </div>
          </>
        )}
        {filter == "Snacks" && (
          <div className="snacks">
            <h1>Snacks</h1>
            <hr></hr>
            <div className="snackItems">
              {data.map((item) => {
                if (item.category == "snacks")
                  return (
                    <FoodCard
                      item={item}
                      url={item.url}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  );
              })}
            </div>
          </div>
        )}
        {filter == "Biryani" && (
          <div className="biryani">
            <h1>Biryani's</h1>
            <hr></hr>
            <div className="biryaniItems">
              {data.map((item) => {
                if (item.category == "biryani")
                  return (
                    <FoodCard
                      item={item}
                      url={item.url}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  );
              })}
            </div>
          </div>
        )}
        {filter == "Curries" && (
          <div className="curries">
            <h1>Curries</h1>
            <hr></hr>
            <div className="curryItems">
              {data.map((item) => {
                if (item.category == "curries")
                  return (
                    <FoodCard
                      item={item}
                      url={item.url}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  );
              })}
            </div>
          </div>
        )}
        {filter == "Desserts" && (
          <div className="desserts">
            <h1>Desserts</h1>
            <hr></hr>
            <div className="dessertItems">
              {data.map((item) => {
                if (item.category == "desserts")
                  return (
                    <FoodCard
                      item={item}
                      url={item.url}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  );
              })}
            </div>
          </div>
        )}
        {filter == "Drinks" && (
          <div className="drinks">
            <h1>Drinks</h1>
            <hr></hr>
            <div className="drinkItems">
              {data.map((item) => {
                if (item.category == "drinks")
                  return (
                    <FoodCard
                      item={item}
                      url={item.url}
                      category={item.category}
                      name={item.name}
                      price={item.price}
                      id={item.id}
                    />
                  );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
