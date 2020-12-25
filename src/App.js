import React from "react";
import "./styles.css";
import { useState } from "react";

const FoodMenu = {
  Indian: [
    { name: "DAL BATTI", rating: "4/5" },
    { name: "INDIAN THALI", rating: "4.5/5" }
  ],

  Mexican: [
    {
      name: "Tacos",
      rating: "5/5"
    },
    {
      name: "Tomato Salsa",
      rating: "4.5/5"
    }
  ],
  Thai: [
    {
      name: "Pasta",
      rating: ".5/5"
    },
    {
      name: "Pad Thai",
      rating: "5/5"
    }
  ],
  Chinese: [
    {
      name: "Manchurian",
      rating: ".5/5"
    },
    {
      name: "Paneer Chilly",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedMenu, setMenu] = useState("Chinese");

  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="title-bar" style={{ height: "15vh" }}>
        <h1 className="heading-main">Food Recommendation App</h1>
        <h3>Get Best Rated Dishes according to your taste </h3>
      </div>
      <div className="subContainer" style={{ height: "85vh" }}>
        {Object.keys(FoodMenu).map((menu) => (
          <button
            onClick={() => setMenu(menu)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "2rem",
              padding: "0.7rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {menu}
          </button>
        ))}
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {FoodMenu[selectedMenu].map((menu) => (
              <li
                key={menu.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "30%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "30%"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {menu.name} </div>
                <div style={{ fontSize: "smaller" }}> {menu.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
