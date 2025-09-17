import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './body.css';

const Body = ({show,setShow}) => {
  const fetchData = async ()=>{
 const res = await fetch("https://api.tvmaze.com/shows?page=1")
 const json = await res.json();
         console.log(json)
         setShow(json || [])
  }
useEffect(()=>{

  fetchData()
},[])
  return (
    <div className='body'>
        {show.map((e)=>{
return <div key={e.id}className='card'>
  <Link to={`/show/${e.id}`}>
  <img src={e.image?.medium} alt={e.name} />
     <h3>{e.name}</h3>
     <p>{e.genres.join(',')}</p>
     </Link>
</div>
        })}
      
    </div>
  )
}

export default Body
