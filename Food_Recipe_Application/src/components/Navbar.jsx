import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Favorites from "./Favorites";
import Home from "./Home";
import Search from "./Search";
import Details from "./Details";
import "./search.css"

const Navbar = ({search ,setSearch , handle}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#eee",
        }}
      >
        <h3
          style={{
            fontFamily: "monospace",
            fontWeight: "bold",
            marginTop: "15px",
            fontSize: "1.2rem",
          }}
        >
          FoodRecipe😋
        </h3>
        <Search search={search} SetSearch={setSearch} handle={handle}/>
        <nav
          style={{
            fontFamily: "monospace",
            fontSize: "1.1rem",
            marginTop: "10px",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "20px",
            }}
            className="nav1"
          >
            Home
          </Link>
          <Link
            to="/Favorites"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "20px",
            }}
            className="nav2"
          >
            Favorites
          </Link>
  
        </nav>
      </div>

      
    </div>
  );
};

export default Navbar;
