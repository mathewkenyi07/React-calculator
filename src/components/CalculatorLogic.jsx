// import {useState} from 'react';
// import Main from './Main';

// export default function CalculatorLogic(){
//     const [display,setDisplay] = useState(0);
//     const [results,setResults] = useState([]);
//     function buttonClick(value){
//           if (value === "AC"){
//             setDisplay(""); 
//             setResults([]);
//             return;
//         }
//         if (value === "="){
//             calculate();
//             return;
//         }

//         if (value === "%"){
//             calculatePercentage();
//             return;
//         }
      
//         console.log(value);
//         if (display === 0){
//             setDisplay(value)
//         }
//         else{
//             setDisplay(display + value)  // contcatenation 

//         }
//         setResults([...results,value])
//         console.log(results);
        
//     }

//     function calculate(){
//         let operator = [];
//         let position;
//         let firstNum;
//         let secondNum;

//         let numbers = [];
//         let operators = [];
//         console.log(results);
//         for (let i = 0; i<results.length; i++){
//             let value = Number(results[i]);
//             if (isNaN(value)){
//                 operators.push(results[i]);
//             }

//             else {
//                 numbers.push(results[i]);
//             }




//             if (results[i] === "+" || results[i] === "-" || results[i] === "÷" || results[i]  === "×" || results[i]=== "%"){
//                 operator.push(results[i]);
//                 position = i;
//             }

//         }

//         console.log("numbers: ", numbers);
//         console.log("operators: ", operators);

//         for (let k = 0; k<results.length; k++){
//             if (results[k] === "+"){
//                 setDisplay(Number(results[k-1]) + Number(results[k+1]));
//             } 

//         }
        
        

//         operator = operator.join("")
//         firstNum = Number(results.slice(0,position).join(""));
//         console.log(firstNum);
            
//         secondNum = Number(results.slice(position+1).join(""));
//         console.log(secondNum);

//         console.log(operator);

//         switch(operator){
//             case "+" : setDisplay(firstNum + secondNum);
//             break;
//             case "-" : setDisplay(firstNum - secondNum);
//             break;
//             case "×" : setDisplay(firstNum * secondNum);
//             break;
//             case "÷" : setDisplay(firstNum / secondNum);
//             break;
//             case "%" : setDisplay(firstNum )
//             default: setDisplay("still in progress");
//         }
//     }

//     function calculatePercentage(){
//         let num = Number(results.join(""));
//         setDisplay(num/100);

//     }


//     return (
//         <Main display = {display} buttonClick = {buttonClick} />
//     )
        

// }

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