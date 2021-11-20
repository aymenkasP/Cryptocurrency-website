import React from 'react'
import invSmart from "./svg/invSmart.svg"
import "./InvestSmart.css"
export default function InvestSmart() {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">

        <div className = "InvestSmart">
            <div className="InvestSmart-text" >
                    <h2>Invest Smart</h2>
                    <p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                    <button>
                        Learn More
                    </button>
            </div>
            <div className="InvestSmart-svg" >
                <img src={invSmart}  />
            </div>

            </div>
        </div>
    )
}
