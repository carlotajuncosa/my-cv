import React from "react";
import "./Heroine.css";

const Heroine = ({ heroine }) => {
  return (
    <div className="heroine">
    <div className="left">
      <img src={heroine.image} alt="" />
      </div>
      <div className="card">
        <h2> "Random goal: work in tracksuit" </h2>
        <p><a href="https://carlotajuncosa.ninja">{heroine.name}</a> {heroine.city}</p>
        <h2> "Random goal: write a book" </h2>
        <p>{heroine.birthDate}  <a href={"mailto:" + heroine.email}>carlota.juncosa@gmail.com</a></p>
        <h2> "Random goal: jump out of an airplane" </h2>
        <p>{heroine.phone}   <a href={heroine.gitHub}>GitHub</a></p>
        <h2> "Random goal: learn to make an omelette" </h2>
      </div>
    </div>
  );
};

export default Heroine;
