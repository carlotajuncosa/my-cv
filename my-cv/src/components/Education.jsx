import React from 'react'

const Education = ({ education }) => {
  return (
    <div>
    <p>Education</p>
    <p>{education[0].name}</p>
    <p>{education[0].date}</p>
    <p>{education[0].where}</p>
    <p>{education[1].name}</p>
    <p>{education[1].date}</p>
    <p>{education[1].where}</p>
    <p>{education[2].name}</p>
    <p>{education[2].date}</p>
    <p>{education[2].where}</p>
    <p>{education[3].name}</p>
    <p>{education[3].date}</p>
    <p>{education[3].where}</p>
    <p>{education[4].name}</p>
    <p>{education[4].date}</p>
    <p>{education[4].where}</p>
    <p>{education[5].name}</p>
    <p>{education[5].date}</p>
    <p>{education[5].where}</p>
    </div>
  )
}

export default Education