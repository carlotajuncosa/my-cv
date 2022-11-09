import React, {useContext} from "react";
import { MyContext } from "../Shared/Context";
import "./Education.scss"

const Education = () => {
  const { education } = useContext(MyContext);
  //console.log('THIS IS EDUCATION IN EDUCATION JSX:', education);
  return (
    <div>
      <h3>Education</h3>
     {education.map((edu)=>{
        return(
          <div key={JSON.stringify(edu)}>
            <h4>{edu.name}</h4>
            <p>{edu.date} | {edu.where}</p>
          </div>
        )
      })} 
    </div>
  );
};

export default Education;

/* {{education.map((edu) => {
  return (
    <div key={JSON.stringify(edu)}>
      <h4>{edu.name}</h4>
      <p>{edu.date} | {edu.where}</p>
    </div>
  );
})} */