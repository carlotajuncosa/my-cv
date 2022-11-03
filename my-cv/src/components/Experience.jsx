import React from 'react'

const Experience = ({books, exhibitions, lecturer, design}) => {
  return (
    <div><p>Experience</p>
    <p>Books</p>
    {books.map((book) =>{
        return(
            <div key={JSON.stringify(book)}>
            <p>{book.name}</p>
            <p>{book.description}</p>
            </div>
        );
    })}
    <p>Exhibitions</p>
    {exhibitions.map((exhibit) => {
    return(
        <div key={JSON.stringify(exhibit)}>
           <p>{exhibit.date}</p> 
           <p>{exhibit.where}</p> 
           <p>{exhibit.description}</p> 
        </div>
    );
    })}
    <p>Lecturer</p>
    {lecturer.map((item)=>{
        return(
            <div key={JSON.stringify(item)}>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
            </div>
        );
    })}
    <p>Design</p>
    {design.map((item)=>{
        return(
            <div key={JSON.stringify(item)}>
                <p>{item.name}</p>
                <p>{item.date}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
            </div>
        )
    })} 
    </div>

  )}

export default Experience