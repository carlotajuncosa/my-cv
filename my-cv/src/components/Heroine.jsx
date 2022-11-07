import React from "react";
import "./Heroine.css";
import Navbar from "./Navbar";


const Heroine = ({ heroine }) => {
  console.log('HEROINE EN Herone es', heroine)
  return (
    <div className="heroine">
    <div className="nameTitle">
    <h4>CARLOTA JUNCOSA</h4>
    <h4>/ FULL STACK DEVELOPER JR & GRAPHIC ESSAY</h4>
    </div>
    
    <Navbar/>
    </div>
  );
};

export default Heroine;


 /* FOTO: <div className="left">
      <img src={heroine.image} alt="" />
      </div> 
       RANDOM GOALS +INFO <div className="card">
        <h2> "Random goal: work in tracksuit" </h2>
        <p><a href="https://carlotajuncosa.ninja">{heroine.name}</a> {heroine.city}</p>
        <h2> "Random goal: write a book" </h2>
        <p>{heroine.birthDate}  <a href={"mailto:" + heroine.email}>carlota.juncosa@gmail.com</a></p>
        <h2> "Random goal: jump out of an airplane" </h2>
        <p>{heroine.phone}   <a href={heroine.gitHub}>GitHub</a></p>
        <h2> "Random goal: learn to make an omelette" </h2>
      </div> */