import React from 'react'


const About = ({ aboutMe }) => {
  return (
    <div>
    <p>About</p>
<p>{aboutMe[0].info}</p>
<p>{aboutMe[1].info}</p>
<p>{aboutMe[2].info}</p>
  </div>
  )
}



export default About