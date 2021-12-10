import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDatabase = {
  Street_Foods: [
    {
      name: "Pani Poori",
      rating: "Shev Puri Dahi Puri"
    },
    {
      name: "Pav Bhaji",
      rating: "Kathiyawadi Pav Bhaji"
    },
    {
      name: "Vada Pav",
      rating: "Mumbai"
    },
    {
      name: "Misal",
      rating: "Katakir"
    },
    { name: "Franky", rating: "Shawarma" }
  ],
  Fastfoods: [
    { name: "Pizza", rating: "Dominos : ExtravaganZZa Feast Pizza." },
    { name: "Burger", rating: "Burger King's : Whooper with Cheese" }
  ],

  NonVeg: [
    {
      name: "Chicken Tikka",
      rating: "Punjabi Tadka"
    },
    {
      name: "Chicken Soup",
      rating: "Mamagoto"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Street_Foods");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Most Loved Foods in New Delhi </h1>
      <p style={{ fontSize: "1rem" }}>
        {" "}
        Sort some of the most loved foods by tapping on below types{" "}
      </p>

      <div>
        {Object.keys(foodDatabase).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "red",
              borderRadius: "50px",
              fontSize: "1rem",
              padding: "0.5rem  1.3rem",
              boxShadow: "0 0 20px -5px black",
              margin: "1rem 0.6rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDatabase[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                backgroundColor: "lightgrey",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "40%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
