import {useState} from 'react';
import Main from './Main';

export default function CalculatorLogic(){
    const [display,setDisplay] = useState(0);
    const [results,setResults] = useState([]);
    function buttonClick(value){
          if (value === "AC"){
            setDisplay("");
            setResults([]);
            return;
        }
        if (value === "="){
            calculate();
            return;
        }

        if (value === "%"){
            calculatePercentage();
            return;
        }
      
        console.log(value);
        if (display === 0){
            setDisplay(value)
        }
        else{
            setDisplay(display + value)

        }
        setResults([...results,value])
        console.log(results);
        
    }

    function calculate(){
        let operator = [];
        let position;
        let firstNum;
        let secondNum;
        console.log(results);
        for (let i = 0; i<results.length; i++){
            if (results[i] === "+" || results[i] === "-" || results[i] === "÷" || results[i]  === "×" || results[i]=== "%"){
                operator.push(results[i]);
                position = i;
            }

        }

        operator = operator.join("")
        firstNum = Number(results.slice(0,position).join(""));
        console.log(firstNum);
            
        secondNum = Number(results.slice(position+1).join(""));
        console.log(secondNum);

        console.log(operator);

        switch(operator){
            case "+" : setDisplay(firstNum + secondNum);
            break;
            case "-" : setDisplay(firstNum - secondNum);
            break;
            case "×" : setDisplay(firstNum * secondNum);
            break;
            case "÷" : setDisplay(firstNum / secondNum);
            break;
            case "%" : setDisplay(firstNum )
            default: setDisplay("still in progress");
        }
    }

    function calculatePercentage(){
        let num = Number(results.join(""));
        setDisplay(num/100);

    }


    return (
        <Main display = {display} buttonClick = {buttonClick} />
    )
        

}