import { useState } from "react"

export default function UserInput() {

    const [userInput, saveUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputID, newValue) {
        saveUserInput(prevValues => {
            return {
                ...prevValues,
                [inputID]: newValue
            }
        });
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label for="initialInvestment" >Initial Investment</label>
                <input id="initialInvestment" type="number" required value={userInput} onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label for="annualInvestment" >Annual Investment</label>
                <input id="annualInvestment" type="number" required value={userInput} onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
            </p>
        </div>
          <div className="numbert-group">
            <p>
                <label for="expectedReturn" >Expected Return</label>
                <input id="expectedReturn" type="number" required value={userInput} onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label for="duration" >Duration</label>
                <input id="duration" type="number" required value={userInput} onChange={(event) => handleChange('duration', event.target.value)}/>
            </p>
        </div>

    </section>
}