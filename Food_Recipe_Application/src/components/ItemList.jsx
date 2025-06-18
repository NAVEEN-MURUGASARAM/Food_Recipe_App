import axios from "axios";
import React, { useEffect, useState } from "react";
import "./itemlist.css";
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

const ItemList = ({ search, loading, items,setFavoritesList,favoritesList }) => {
  
  

  function handleFavorite(item) {
    let timerInterval;
      Swal.fire({
        html: "Adding to Favorites!",
        timer: 700,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      setFavoritesList([...(favoritesList || []),item]);
  }
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      {loading && <h1>LOADING...</h1>}

      {items && items.length > 0 && (
        <div
          className="item-list"
          style={{
            display: "flex",
            flexWrap: "wrap",
            textAlign: "center",
            justifyContent: "space-evenly",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="item-container"
              style={{ height: "380px", width: "400px" }}
            >
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "#eee",
                  borderRadius: "10px",
                }}
                className="item"
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.title}
                </p>
                <img
                  src={item.image_url}
                  alt=""
                  style={{
                    height: "250px",
                    width: "300px",
                    padding: "10px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                    justifyContent: "space-between",
                    marginLeft: "40px",
                    marginRight: "40px",
                  }}
                >
                  <Link to={`recipe-item/${item?.id}`} className="view-recipe-btn">View Recipes</Link>
                  <button className="Favorites-btn" onClick={()=>handleFavorite(item)}>
                    💟
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
