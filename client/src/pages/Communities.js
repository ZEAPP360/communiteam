import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_COMMUNITIES } from "../utils/queries";
import Img4 from "../img/brisbane.jpg";

const Communities = () => {
  const { loading, data } = useQuery(QUERY_COMMUNITIES);
  
  if (loading) {
    return <>Loading...</>;
  }

  console.log(data);
  const communities = data.communities || [];

  return (
    <>
    <div className="d-flex justify-content-between">
    <h2 className="p-4 ">Communities </h2>
     <a href='AddCommunities' className="me-4 mt-3 fs-3">Add Communities</a>
    </div>
   <div className="d-flex ms-4 gap-2">
     {communities.map((el,index) => {
       return (
     <div key={index} className="card m-0 mt-2 " style={{width: "18rem"}}>
       <div style={{ backgroundImage:`url(${Img4})`}} className="card-body">
         <h5 className="card-title">{el.name}</h5>
         <p className="card-text">
         {el.location}
         </p>
         <a href="#" className="btn btn-primary">
         Add
         </a>
        
       </div>
     </div>
     );
     })}
    
   </div>
   </>
  );

};

export default Communities;
