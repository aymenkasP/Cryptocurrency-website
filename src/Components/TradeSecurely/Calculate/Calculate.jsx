import React from 'react'
import "./Calculate.css"

export default function Calculate() {
    return (
        <div data-aos="flip-up">

        <div className="Calculate" >

          <div className = "calculate-input">

            <input type="text" value="Enter your hash rate" /> 
            <select id="demo-list">
                <option value="TH/s" title="TH/s">TH/s</option>
                <option value="TH/s" title="TH/s">TH/s</option>
                <option value="TH/s" title="TH/s">TH/s</option>
            </select>

            <button className="Calculate-btn" >
                    Calculate
            </button>

            </div>

            <div className="Calculate-output" >
                <p className="calculate-small-text">ESTIMATED 24 HOUR REVENUE:</p>
                <h2>0.055 130 59 ETH <span>($1275)</span></h2>
                <p className="calculate-subtitle">Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>

        </div>
        </div>
    )
}
