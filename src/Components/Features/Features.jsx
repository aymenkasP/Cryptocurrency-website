import React from 'react'
import DetailedStatistics from './DetailedStatistics/DetailedStatistics'
import "./Features.css"
import GrowProfit from './GrowProfit/GrowProfit'
import InvestSmart from './InvestSmart/InvestSmart'
export default function Features() {
    return (
        <section className="Features">
            <h2 className="Features-title" >Market sentiments, portfolio, and run the infrastructure of your choice</h2>
            <InvestSmart />
            <DetailedStatistics />
            <GrowProfit />
        </section>
    )
}
