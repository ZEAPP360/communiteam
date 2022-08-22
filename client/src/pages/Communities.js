import { useQuery } from "@apollo/client";
import React,{useState} from "react";
import { QUERY_COMMUNITIES } from "../utils/queries";
import { useMutation } from "@apollo/client";
import Img4 from "../img/brisbane.jpg";
import { UPDATE_USER } from "../utils/mutations";

const Communities = () => {
  const [select ,setSelected] = useState()
  const { loading, data } = useQuery(QUERY_COMMUNITIES);
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  if (loading) {
    return <>Loading...</>;
  }
  
  const communities = data.communities || [];
  const handlerSubmit=async(e)=>{
    e.preventDefault()
    const {_id,location,name} = select
  let items = {
    _id,
    location,
    community:name
  }
    try {
      const { data } = await updateUser({
        variables: { ...items },
      });
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
    <div className="d-flex justify-content-between">
    <h2 className="p-4 ">Communities </h2>
     <a href='AddCommunities' className="me-4 mt-3 fs-3">Add Communities</a>
    </div>
   <div className="d-flex ms-4 gap-2">
     {communities.map((el,index) => {
       return (
         <div key={index}  className="card m-0 mt-2 " style={{width: "18rem"}}>
          <form onSubmit={handlerSubmit}  >
       <div style={{ backgroundImage:`url(${Img4})`}} className="card-body">
         <h5 className="card-title">{el.name}</h5>
         <p className="card-text">
         {el.location}
         </p>
         <button href="#" type="submit" onClick={()=>setSelected(el)} className="btn btn-primary">
         Add
         </button>
        
       </div>
        </form>
     </div>
     );
     })}
    
   </div>
   </>
  );

};

export default Communities;
