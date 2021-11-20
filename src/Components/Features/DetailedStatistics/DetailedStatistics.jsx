import React from 'react'
import Btn from '../btn/Btn'
import Detailed from "./svg/Detailed.svg"
import "./DetailedStatistics.css"
export default function DetailedStatistics() {
    return (
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">

        <div className="DetailedStatistics" >
            <div className="DetailedStatistics-img">
                <img src={Detailed} />
            </div>

            <div className ="DetailedStatistics-text">
                <h2>Detailed Statistics</h2>
                <p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                <Btn />
            </div>
</div>
        </div>
    )
}
