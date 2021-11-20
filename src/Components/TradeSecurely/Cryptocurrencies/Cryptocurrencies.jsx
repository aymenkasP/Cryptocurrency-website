import React from 'react'
import Currencies from './currencies/Currencies'
import "./Cryptocurrencies.css"
export default function Cryptocurrencies() {
    return (
        <div className="Cryptocurrencies" >
            <h2 className="Cryptocurrencies-title">Trade securely and market the high growth cryptocurrencies.</h2>
            <Currencies />
        </div>
    )
}
