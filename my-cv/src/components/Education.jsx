import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      <p>Education</p>
      {education.map((edu) => {
        return (
          <div key={JSON.stringify(edu)}>
            {/* guia a react para que tome este objeto */}
            <p>{edu.name}</p>
            <p>{edu.date}</p>
            <p>{edu.where}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
