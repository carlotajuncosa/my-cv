import React, { useContext } from "react";
import { MyContext } from "../Shared/Context";
import "./About.css";
import {FaGithubAlt, BsLinkedin, TfiEmails } from 'react-icons/fa';




const About = () => {
  const { heroine } = useContext(MyContext);
/*   class Icons extends React.Component{}
 */

  return (
    <div>
      <div className="cardAbout">
        <div className="cardPhoto">
          <div className="imageContainer">
            <img src={heroine.image} alt="" />

            <h2 className="h2Bold">CARLOTA JUNCOSA</h2>
            <hr />
            <h3>FULL STACK DEVELOPER JR</h3>
            <h3>& CARTOONIST</h3>
          </div>
          <div className="containerIcons">
          {/* <a href="https://carlotajuncosa.ninja">{<BsLinkedin/>}
</a>
          <a href={"mailto:" + heroine.email}>{<TfiEmails/>}</a>
          <a href={heroine.gitHub}>{<FaGithubAlt/>}</a> */}

          </div>
        </div>

        <div className="socialMedia">
          <div className="card">
            <h2> "Random goal: work in tracksuit" </h2>
            
            <h2> "Random goal: write a book" </h2>
            
            <h2> "Random goal: jump out of an airplane" </h2>
            
            <h2> "Random goal: learn to make an omelette" </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
