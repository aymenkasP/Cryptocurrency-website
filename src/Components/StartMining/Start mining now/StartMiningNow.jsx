import React from 'react'
import "./StartMiningNow.css"
export default function StartMiningNow() {
    return (
        <div className="StartMiningNow" >
        <div data-aos="zoom-in-up">
            <div className="StartMiningNow-container">
        <div className="StartMiningNow-text" >
        
               <h3>Start Mining Now</h3>
                <p>
                Join now with CRAPPO to get the latest news and start mining now
                </p>
        </div>
            <div className="StartMiningNow-input">
                <input type="text" value="Enter your email" />
                <button>
                  Subscribe
                </button>
            </div>
            </div>
        </div>
        </div>
    )
}
