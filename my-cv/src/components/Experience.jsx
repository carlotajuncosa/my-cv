import React from 'react'

const Experience = ({ experience }) => {

  return (
    <div>
    <p>Experience</p>
    {experience.map((exper) => {
      return (
       <div key={JSON.stringify(exper)}> 
       <h3>Books:</h3>
        <p>{exper.books}</p>
        <h3>Exhibitions:</h3>
        <p>{exper.exhibitions}</p>
        <h3>Lecturer:</h3>
        <p>{exper.lecturer}</p>
        <h3>Design:</h3>
        <p>{exper.design}</p>
        </div>)

    })}
    </div>
  )
}

export default Experience