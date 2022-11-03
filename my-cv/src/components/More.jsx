import React from 'react'

const More = ({ languages, habilities, awards, volunteer }) => {
  return (
    <div>
    <p>More</p>
    <p>Languages</p>
    {languages.map((language)=>{
      return(
        <div key={JSON.stringify(language)}>
          <p>Language: {language.language}</p>
          <p>Writing: {language.wrlevel}</p>
          <p>Speaking:{language.splevel}</p>
        </div>
      )
    })}
    <p>Habilities</p>
      {habilities.map((hability)=>{
        return(
          <div key={JSON.stringify(hability)}>
          <p>{hability.tools}</p>
          <p>{hability.values}</p>
          <p>{hability.professionals}</p>            
          </div>
        )
      })}
      <p>Awards</p>
      {awards.map((award)=>{
        return(
          <div key={JSON.stringify(award)}>
            <p>{award.name}</p>
            <p>{award.date}</p>
            <p>{award.description}</p>
          </div>
        )
      })}
    </div>
  )
};

export default More;