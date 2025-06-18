import React from "react";

const Favorites = ({ favoritesList , setFavoritesList }) => {

  function handleDelete(id){
    const items=favoritesList.filter((item)=>item.id!=id)
    setFavoritesList(items);
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Favorites</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          justifyContent: "space-between",
          paddingTop:"30px",
          padding:"20px"
        }}
      >
        {favoritesList.length > 0 ? (
          favoritesList.map((item) => (
            <div
              key={item.id}
              style={{
                margin: "10px",
                backgroundColor: "#eee",
                borderRadius: "20px",
                padding:"10px",
                height:"430px",
                width:"400px",
              }}
            >
              <h2>{item.title}</h2>
              <img
                src={item.image_url}
                alt=""
                style={{ height: "330px", width: "300px",paddingBottom:"20px",paddingTop:"20px" }}
              />
              <button style={{display:"block",marginLeft:"50%",fontSize:"1.3rem",backgroundColor:"whitesmoke",cursor:"pointer"}} onClick={()=>handleDelete(item.id)}>❌</button>
            </div>
          ))
        ) : (
          <h2>No Item In Favorites</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
