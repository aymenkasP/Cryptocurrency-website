import React from 'react'
import  './Info.css';

export default function Info({icon,number,description}) {
    return (
       <div data-aos="zoom-in-right">
        <div className="flex-between info" >
            <div>
              <img src={icon} /> 
            </div>
            <div className="info-text" >
                <h2>{number}</h2>
                <p>{description}</p>
            </div>
        </div>
        </div>
    )
}
