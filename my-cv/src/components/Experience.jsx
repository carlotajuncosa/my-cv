import React from 'react'

const Experience = ({ experience }) => {
  console.log(experience);
  return (
    <div>
    <p>Experience</p>
    <h3>Books</h3>
    <p>'In Progress: '</p> 
    {/* <div>{characters.map((character) => {
      return 
    })}</div> */}
    <p>{experience[0].books[0].inProgress[0].openUp}</p>
    <p>{experience[0].books[0].inProgress[1].creativeBlocks}</p>
    <p>{experience[0].books[0].inProgress[2].inTheCity}</p>
    <p>'Soon: '</p>
    <p>{experience[0].books[1].soon}</p>
    <p>'Published: '</p>
    <p>{experience[0].books[2].published}</p>
    <p>'Self-published: '</p>
    <p>{experience[0].books[3].selfPublished}</p>
    <p>'Collaborations: '</p>
    <p>{experience[0].books[4].collaborations}</p>
    <h3>Exhibitions:</h3>
    <p>{experience[1].exhibitions[0].soloShows[0].date} {experience[1].exhibitions[0].soloShows[0].where}</p>
    <p>{experience[1].exhibitions[0].soloShows[0].description}</p>
    <p>{experience[1].exhibitions[0].soloShows[1].date} {experience[1].exhibitions[0].soloShows[1].where}</p>
    <p>{experience[1].exhibitions[0].soloShows[1].description}</p>


    </div>
  )
}

export default Experience