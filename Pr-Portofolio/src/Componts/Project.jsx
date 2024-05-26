import React from 'react'

export default function Project() {
  return (
    <div id='Projects'>
           {/* Add more sections here */}
           <div className="pject">
        <h2>PROJECTS</h2>
          <div className="ProjectorContainer">
          <div className="col">
              <img src="./public/banner-01.jpg" alt="" />
              <p>Facebook Poster</p>
          </div>
          <div className="col">
              <img src="./public/JUST Poster-01.jpg" alt="" />
              <p>Jamhuria Poster</p>
          </div>  
          <div className="col">
            <img src="./public/banner-01.png" alt=""/>
            <p>Business Talk</p>
          </div>
          <div className="col">
            <img src="./public/stampo.png" alt=""/>
            <p> Stampo </p>
          </div>
          </div>
        </div>
      
    </div>
  )
}
