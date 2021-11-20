import React from 'react'
import "./footer.css"
import visa from "./svg/visa.svg"
import mstc from "./svg/mstc.svg"
import btc from "./svg/btc.svg"
import logo from './svg/logo.svg'

import fac from "./socialMediasvg/fac.svg"
import insta from "./socialMediasvg/insta.svg"
import ytb from "./socialMediasvg/ytb.svg"
import twt from "./socialMediasvg/twt.svg"
import link from "./socialMediasvg/link.svg"


export default function Footer() {
    return (
        <>
             <footer className="footer">
                <div className="footer-container">
                    <div className="logo">
                        <img src={logo} />
                     </div>
                    <div className="Quick-Link" >
                        <h3>Home</h3>
                        <p>Products</p>
                        <p>About</p>
                        <p>Features</p>
                        <p>Contact</p>
                    </div>

                    <div className="Resources" >
                        <h3>Resources</h3>
                        <p>Download Whitepapper</p>
                        <p>Smart Token</p>
                        <p>Blockchain Explorer</p>
                        <p>Crypto API</p>
                        <p>Interest</p>
                    </div>

                    <div className="accept-payment" >
                        <h2>We accept following payment systems</h2>
                        <div className="payment" >
                            <img src={visa} />
                            <img src={mstc} />
                            <img src={btc} />
                        </div>
                    </div>

                </div>

                <div className="footer-footer" >

                    <h6>©2021 CRAPPO. All rights reserved</h6>

                  
                   <div className="social-media">
                        <img src={fac} />
                        <img src={insta} />
                        <img src={ytb} />
                        <img src={twt} />
                        <img src={link} />
                    </div> 
                </div>
             </footer>
        </>
    )
}
