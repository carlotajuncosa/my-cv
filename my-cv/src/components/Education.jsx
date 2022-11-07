import React, {useContext} from "react";
import { MyContext } from "../Shared/Context";

const Education = ({ education }) => {
  return (
    <div>
      <h3>Education</h3>
      {/* {education.map((edu) => {
        return (
          <div key={JSON.stringify(edu)}>
            <h4>{edu.name}</h4>
            <p>{edu.date} | {edu.where}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default Education;
