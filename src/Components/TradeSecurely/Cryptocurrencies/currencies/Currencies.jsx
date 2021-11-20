import React, { useState ,useEffect } from 'react'
import CurrenciesCard from './CurrenciesCard/CurrenciesCard'
import Btc from './CurrenciesCard/svg/Btc.svg'
import Eth from './CurrenciesCard/svg/Eth.svg'
import Ltc from './CurrenciesCard/svg/Ltc.svg'
import "./Currencies.css"



export default function Currencies() {
    const [Selected, setSelected] = useState("BTC")

    
    return (
        <div className="Currencies" >
       
        <CurrenciesCard 
           icon={Btc}
           title={"Bitcoin"}titleSb="BTC"  
           subtitle="Digital currency in which a record of transactions is maintained." 
           selected={Selected === "BTC" && true} 
               setSelected={setSelected}
           />  
   
          
          <CurrenciesCard 
           icon={Eth}
           title={"Ethereum"}titleSb="ETH"  
           subtitle="Blockchain technology to create and run decentralized digital applications." 
           
           selected={Selected === "ETH" && true}
           
           setSelected={setSelected}
            />  
          <CurrenciesCard 
           icon={Ltc}
           title={"Litecoin"}titleSb="LTC"  
           subtitle="Cryptocurrency that enables instant payments to anyone in the world." 
           
           selected={Selected === "LTC" && true}
           setSelected={setSelected}
           />  
        </div>
    )
}
