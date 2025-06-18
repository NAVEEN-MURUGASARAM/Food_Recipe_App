import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  async function handleDetails(event) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();

      setDetails(data.data.recipe || []); // Assuming the API returns an array of meals
    } catch (e) {
      console.log(e);
    } finally {
      // Set loading to false when the request ends
    }
  }
  useEffect(() => {
    handleDetails();
  }, [id]);
  return (
    <div className="text-8xl" style={{marginLeft:"20%",marginRight:"20%"}} >
      <div>
        
      </div>
      {details && (
        <div style={{paddingLeft:"2%",paddingBottom:"30px",paddingTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <div>
          <h1 style={{paddingBottom:"30px"}}>{details.title}</h1>
          <img src={details.image_url} alt=""  style={{height:'400px',width:"400px"}}/>
          <h3 >Cooking Time:{details.cooking_time} Minutes</h3>
          <h3 style={{paddingBottom:"30px"}}>Servings:{details.servings}</h3>
          </div>

          <div>
          <h2>Description:</h2>
          {details.ingredients?.map((item, index) => (
            <p style={{padding:"10px"}} key={index}>
              {index+1 +")"} {item.description}
            </p>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
