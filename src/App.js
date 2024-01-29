import React, { useState } from "react";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import './style.css';

function App() {
  const [calculation, setCalculation] = useState("0");

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        try {
          setCalculation(eval(calculation).toString());
        } catch (error) {
          setCalculation("Error");
        }
        break;
      case "C":
        setCalculation("0");
        break;
      default:
        setCalculation((prevCalculation) => {
          if (prevCalculation === "0" || prevCalculation === "Error") {
            return value.toString();
          } else {
            return prevCalculation + value.toString();
          }
        });
        break;
    }
  };

  return (
    <>
      <Input calculation={calculation} />
      <div className="row mb-2">
        <Button value={1} onClick={() => handleButtonClick(1)} />
        <Button value={2} onClick={() => handleButtonClick(2)} />
        <Button value={3} onClick={() => handleButtonClick(3)} />
        <Button value={"+"} onClick={() => handleButtonClick("+")} />
      </div>
      <div className="row mb-2">
        <Button value={4} onClick={() => handleButtonClick(4)} />
        <Button value={5} onClick={() => handleButtonClick(5)} />
        <Button value={6} onClick={() => handleButtonClick(6)} />
        <Button value={"-"} onClick={() => handleButtonClick("-")} />
      </div>
      <div className="row mb-2">
        <Button value={7} onClick={() => handleButtonClick(7)} />
        <Button value={8} onClick={() => handleButtonClick(8)} />
        <Button value={9} onClick={() => handleButtonClick(9)} />
        <Button value={"*"} onClick={() => handleButtonClick("*")} />
      </div>
      <div className="row">
        <Button value={0} onClick={() => handleButtonClick(0)} />
        <Button value={"C"} onClick={() => handleButtonClick("C")} />
        <Button value={"="} onClick={() => handleButtonClick("=")} />
        <Button value={"/"} onClick={() => handleButtonClick("/")} />
      </div>
    </>
  );
}

export default App;
