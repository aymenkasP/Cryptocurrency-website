import React from 'react'
import Calculate from './Calculate/Calculate'
import Cryptocurrencies from './Cryptocurrencies/Cryptocurrencies'
import "./TradeSecurely.css"
export default function TradeSecurely() {
    return (
        <section className="TradeSecurely">
            <div className="TradeSecurely-"> 
                <h1 className="TradeSecurely-title">Check how much you can earn</h1>
                <p className="TradeSecurely-subtitle">Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <div className="Calculate-container">
                <Calculate />
            </div>
            
            <Cryptocurrencies />
        </section>
    )
}
