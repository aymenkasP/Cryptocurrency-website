import React from 'react'
import svg from "../svg/content.svg"
import "./Content.css"
export default function Content() {
    return (
        <div className="content">
            <div className="flex-between align-center content-container">
        <div data-aos="zoom-out-up">
             <div>
            <img src={svg}  />
            </div>
        </div>    
            
            
            <div className="content-text">
            <div data-aos="zoom-out-up">
                <h2>Why you should choose CRAPPO</h2>
                <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <button>
                    Learn More 
                </button>
                </div>
            </div>    
            </div>
       
        </div>
    )
}
