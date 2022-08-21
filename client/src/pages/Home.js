import React from "react";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import Logo from "../img/imglogo.png";
import "../styles/home.css";

const Home = () => {
  return (
    <main>
      <div className="">
        <div className="" style={{ position: "relative" }}>
          <div className="" style={{ position: "relative" }}>
            <img src={Img2} className="w-100" alt="" />
          </div>
          <div
            className=""
            style={{
              position: "absolute",
              width: "100%",
              top: "10rem",
              textAlign: "center",
              background: "#201919c4",
              color: "white",
            }}
          >
            <h1>
              Everthing you need local is{" "}
              <span style={{ color: "#a7a376" }}>a click away</span>
            </h1>
            <h1>
              Everthing you need local is{" "}
              <span style={{ color: "#a7a376" }}>CommuniTeam</span>
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">About</h1>
      <div  style={{display:'flex',margin:'2rem'}}>
      <img src={Img3} style={{borderRadius:"20px"}} className="w-50" alt="" />
      <p className="home-right-fr" style={{ boxShadow: 'rgb(0 0 0) -6px 3px 50px -34px',padding:'2rem',marginLeft:'1rem',borderRadius:'20px',marginBottom:'0px' }}>
        CommuniTeam exists to help new members to settle down, 
      access the services they need, 
      meet new people and feel welcome. We want to build bridges and create connections to give 
      everyone a chance to take an active role in their community</p>
      </div>
    </main>
  );
};

export default Home;


