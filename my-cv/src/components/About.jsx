import React from "react";
import "./About.css";

const About = ({ aboutMe, heroine }) => {
  console.log('HEROINE', aboutMe)
  return (
    <div >
      
      <div className="cardAbout">
        <div className="cardPhoto">
        <h3>About</h3>
        Container izquierdo + foto
        <div>
          contact info + iconos
        </div>
        </div>

        <div>
        Continer derecho + texto
        </div>
      </div>
      {/*  */}
      {/* <p>{aboutMe[0].info}</p>
      <p>{aboutMe[1].info}</p>
      <p>{aboutMe[2].info}</p> */}
    </div>
  );
};

export default About;
