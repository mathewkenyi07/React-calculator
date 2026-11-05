

import { useState, useRef } from "react";
import Main from './Main';


export default function CalculatorLogic(){
    const [display,setDisplay] =useState(0);
    const expression = useRef("");
    
    function buttonClick(value){
        expression.current += value;
        setDisplay(expression.current)

          if (value === "AC"){
            setDisplay(""); 
            return;
        }



    }

    console.log(expression);

    return (
        <Main display={display} buttonClick={buttonClick} />
    )
    
}