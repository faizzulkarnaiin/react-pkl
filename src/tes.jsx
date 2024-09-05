import React, { useState } from 'react';

function Tes() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Kalkulator Sederhana</h1>
      
      <div className="w-80 p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4 p-2 bg-gray-200 rounded-lg text-right">
          <div className="text-lg text-gray-700">{input || "0"}</div>
          <div className="text-2xl font-bold text-gray-900">{result || "0"}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button className="btn" onClick={handleClear}>C</button>
          <button className="btn" onClick={handleDelete}>DEL</button>
          <button className="btn" onClick={() => handleClick("(")}>(</button>
          <button className="btn" onClick={() => handleClick(")")}>)</button>
          
          <button className="btn" onClick={() => handleClick("7")}>7</button>
          <button className="btn" onClick={() => handleClick("8")}>8</button>
          <button className="btn" onClick={() => handleClick("9")}>9</button>
          <button className="btn" onClick={() => handleClick("/")}>/</button>
          
          <button className="btn" onClick={() => handleClick("4")}>4</button>
          <button className="btn" onClick={() => handleClick("5")}>5</button>
          <button className="btn" onClick={() => handleClick("6")}>6</button>
          <button className="btn" onClick={() => handleClick("*")}>*</button>
          
          <button className="btn" onClick={() => handleClick("1")}>1</button>
          <button className="btn" onClick={() => handleClick("2")}>2</button>
          <button className="btn" onClick={() => handleClick("3")}>3</button>
          <button className="btn" onClick={() => handleClick("-")}>-</button>
          
          <button className="btn" onClick={() => handleClick("0")}>0</button>
          <button className="btn" onClick={() => handleClick(".")}>.</button>
          <button className="btn col-span-2" onClick={calculate}>=</button>
          <button className="btn" onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Tes;
