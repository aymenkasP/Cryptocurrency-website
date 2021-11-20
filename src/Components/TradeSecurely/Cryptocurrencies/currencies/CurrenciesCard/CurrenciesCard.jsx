import React from 'react'
import Btn from './btn/Btn'
import SelectedBtn from './btn/SelectedBtn'
import "./CurrenciesCard.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function CurrenciesCard({icon ,title,titleSb , subtitle , selected , setSelected}) {
    return (
        <div data-aos="flip-left">

        
        <div
         className={`CurrenciesCard ${ selected ? "selected" : "noSelected"} `} 
         onClick={()=> setSelected(titleSb) } 
         >
            <div className="CurrenciesCard-icon">
               <img src={icon} alt={title} />
            </div>
            <div className="CurrenciesCard-title" >
              <h2>{title}<span>{titleSb}</span></h2>  
            </div>
            <div className="CurrenciesCard-subtitle" >
               <p>{subtitle}</p> 
            </div>
            <div className="CurrenciesCard-btn-section">
                  {
                selected ? <SelectedBtn /> : <Btn />
            }
            </div>
          
        </div>
        </div>
        
    )
}
