import React from 'react'
import { useParams } from 'react-router-dom'
import './showdetails.css';

const Showdetails = ({show}) => {
  const {id} = useParams()

  const selectedOne = show.find((e)=>{
    return e.id.toString()===id
  })
  return (
    <div className='show-details'>
        
        <h1>{selectedOne.name}</h1>
        <img src={selectedOne.image?.original} alt={selectedOne.name}/>
        <p dangerouslySetInnerHTML={{ __html: selectedOne.summary }} /> <p><strong>Genres:</strong> {selectedOne.genres.join(", ")}</p> <p><strong>Language:</strong> {selectedOne.language}</p> <p><strong>Premiered:</strong> {selectedOne.premiered}</p> <p><strong>Rating:</strong> {selectedOne.rating?.average || "N/A"}</p>
      
    </div>
  )
}

export default Showdetails
