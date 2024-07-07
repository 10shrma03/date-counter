import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepMinus() {
    setStep((s) => s - 1);
  }
  function handleStepPlus() {
    setStep((s) => s + 1);
  }
  function handleCountMinus() {
    setCount((s) => s - step);
  }
  function handleCountPlus() {
    setCount((s) => s + step);
  }
  return (
    <>
      <div className="step">
        <button onClick={handleStepMinus}>-</button>
        <span> Step - {step} </span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div className="count">
        <button onClick={handleCountMinus}>-</button>
        <span> Count - {count} </span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div className="message">
        <p>
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </>
  );
}
