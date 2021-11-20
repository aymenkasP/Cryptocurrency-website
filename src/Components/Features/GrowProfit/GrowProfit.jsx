import React from 'react'
import Grow from './svg/Grow.svg'
import "./GrowProfit.css"
import Btn from '../btn/Btn'
export default function GrowProfit() {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">

        <div className="GrowProfit" >
        
        <div className ="GrowProfit-text">
            <h2>Grow your profit and track your investments</h2>
            <p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <Btn />
        </div>

        <div className="GrowProfit-img">
            <img src={Grow} />
        </div>
        </div>
    </div>
    )
}
