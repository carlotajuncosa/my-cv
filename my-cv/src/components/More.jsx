import React, { useContext } from "react";
import { MyContext } from "../Shared/Context";
import "./More.scss"

const More = () => {
  const { languages, habilities, awards, volunteer } = useContext(MyContext);
  return (
    <div>
    <h3>More</h3>
    <h4>Languages</h4>
    {languages.map((language)=>{
      return(
        <div key={JSON.stringify(language)}>
          <p>{language.language}</p>
          <p>Writing: {language.wrlevel} | Speaking:{language.splevel}</p>
        </div>
      )
    })}
    <h4>Habilities</h4>
      {habilities.map((hability)=>{
        return(
          <div key={JSON.stringify(hability)}>
          <p>{hability.tools}</p>
          <p>{hability.values}</p>
          <p>{hability.professionals}</p>            
          </div>
        )
      })}
      <h4>Awards</h4>
      {awards.map((award)=>{
        return(
          <div key={JSON.stringify(award)}>
            <p>{award.name}</p>
            <p>{award.date}</p>
            <p>{award.description}</p>
          </div>
        )
      })}
      <h4>Volunteer</h4>
      {volunteer.map((vol)=>{
        return(
          <div key={JSON.stringify(vol)}>
            <p>{vol.name}</p>
            <p>{vol.date}, {vol.where}</p>
            <p>{vol.description}</p>
          </div>
        )
      })}
    </div>
  )
};

export default More;