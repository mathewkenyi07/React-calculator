export default function Main({display, buttonClick}) {
    return (
    <>
    {/* <div className="heading">
         <h1>Calculator</h1>
        <input type='type' value = {display}  />
    </div>
   
  <div className="inputs">
    
                <button onClick={()=> buttonClick("+")}>+</button>
                <button onClick={()=> buttonClick("-")}>-</button>
                <button onClick={()=>buttonClick("×")}>×</button>
                <button onClick={()=>buttonClick("÷")}>÷</button>
                <button onClick={() => buttonClick("7")}>7</button>
                <button onClick={() => buttonClick("8")}>8</button>
                <button onClick={() => buttonClick("9")}>9</button>
                <button onClick={() => buttonClick("6")}>6</button>
                <button onClick={() => buttonClick("5")}>5</button>
                <button onClick={() => buttonClick("2")}>2</button>
                <button onClick={() => buttonClick("3")}>3</button>
                <button onClick={() => buttonClick("4")}>4</button>
                <button onClick={() => buttonClick("1")}>1</button>
                <button onClick={() => buttonClick("0")}>0</button>
                <button id="equals">=</button>
                <button id="clear">C</button>
</div> */}




<div className="flex flex-col items-center justify-center h-screen ">

  <input type="text" value = {display} className=" inputs bg-gray-500 w-[400px] h-16  text-right text-white text-bold text-3xl"/>

  <div className=" second grid grid-cols-4 w-[400px]">
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("AC")}>AC</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("+/-")}>+/-</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("%")}>%</div>
    <div className="border border-gray-400 bg-[#e9803a] p-4 text-center text-white" onClick={()=>buttonClick("÷")}>÷</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("7")}>7</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("8")}>8</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("9")}>9</div>
    <div className="border border-gray-400 bg-[#e9803a] p-4 text-center text-white" onClick={()=>buttonClick("×")}>×</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("4")}>4</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("5")}>5</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("6")}>6</div>
    <div className="border border-gray-400 bg-[#e9803a] p-4 text-center text-white"  onClick={()=> buttonClick("-")}>-</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("1")}>1</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("2")}>2</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("3")}>3</div>
    <div className="border border-gray-400 bg-[#e9803a] p-4 text-center text-white"  onClick={()=> buttonClick("+")}>+</div>
    <div className="col-span-2 flex justify-center border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick("0")}>0</div>
    <div className="border border-gray-400 bg-[#dbdbdb] p-4 text-center" onClick={() => buttonClick(".")}>.</div>
    <div className="border border-gray-400 bg-[#e9803a] p-4 text-center text-white" onClick={() => buttonClick("=")}>=</div>
  </div>

</div>



    </>
    )
}

