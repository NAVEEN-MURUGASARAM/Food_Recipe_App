import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./search.css";
import { useState } from "react";
import ItemList from "./ItemList";
import { FaSearch } from "react-icons/fa";

const Search = ({search,SetSearch , handle}) => {
  const [dish, setDish] = useState("pizza");

  let handleChange = (event) => {
    setDish(event.target.value);
  };

  
  let handleSubmit = () => {
    SetSearch(dish);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Dish"
        className="search-input"
        value={dish}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        onDragEnterCapture={handleSubmit}
        className="submit-btn"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
