import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, saveUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputID, newValue) {
    saveUserInput((prevValues) => {
      return {
        ...prevValues,
        [inputID]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput setInputData={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than "0".</p>}
      {inputIsValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
