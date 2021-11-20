import React from 'react'
import BtnIcon from './BtnIcon'
import "./Hero.css"
export default function Hero() {
    return (

        <section className="hero">
            <div className="hero-container" >
            <p className ="hero-promo"><span className="hero-promo-span" >75% SAVE</span><span className="promo-text">For the Black Friday weekend</span></p>
            <h1 className ="hero-title">
            Fastest & secure platform to invest in crypto
            </h1>
            <p className="subtitle">Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>

            <div>
                <button className="hero-btn" >
                <span>Try for FREE</span> <BtnIcon />
                </button>
            </div>
            </div>
        </section>
    )
}
