

export default function UserInput({setInputData, userInput}) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initialInvestment" >Initial Investment</label>
                <input id="initialInvestment" type="number" required value={userInput.initialInvestment} onChange={(event) => setInputData('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label htmlFor="annualInvestment" >Annual Investment</label>
                <input id="annualInvestment" type="number" required value={userInput.annualInvestment} onChange={(event) => setInputData('annualInvestment', event.target.value)}/>
            </p>
        </div>
          <div className="numbert-group">
            <p>
                <label htmlFor="expectedReturn" >Expected Return</label>
                <input id="expectedReturn" type="number" required value={userInput.expectedReturn} onChange={(event) => setInputData('expectedReturn', event.target.value)}/>
            </p>
            <p>
                <label htmlFor="duration" >Duration</label>
                <input id="duration" type="number" required value={userInput.duration} onChange={(event) => setInputData('duration', event.target.value)}/>
            </p>
        </div>

    </section>
}