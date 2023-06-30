import React from 'react'
import "./Movie.css"
import "../App.css"
function Movie(props) {
  return (
    <div className='Movie fade-in '>
        <div className='imgdiv'>
            <img className="img" src={props.img}/>
        </div>
        <p>{props.name}</p>
        <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie