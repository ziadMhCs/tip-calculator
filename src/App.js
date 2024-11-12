import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [billInput, setBillInput] = useState(null);
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);

  function handelReset(){
    setBillInput(0);
    setRating1(0);
    setRating2(0);
  }
  return (
    <div className="App">
      <BillInput setBillInput={setBillInput} billInput={billInput} />
      <ServiceRating changeRating={setRating1} rating={rating1}>
        how did you like the service?
      </ServiceRating>
      <ServiceRating changeRating={setRating2} rating={rating2}>
        how did your friend the service?
      </ServiceRating>
      <Output
        rating1={rating1}
        rating2={rating2}
        billInput={billInput}
        setBillInput={setBillInput}
        setRating1={setRating1}
        setRating2={setRating2}
      />
      <Reset handelReset={handelReset} />
    </div>
  );
}

function BillInput({ setBillInput, billInput }) {
  return (
    <div>
      <span>how much was the bill ?</span>
      <input
        type="number"
        value={billInput}
        onChange={(e) => setBillInput(Number(e.target.value))}
      ></input>
    </div>
  );
}
function ServiceRating({ children, rating, changeRating }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={rating}
        onChange={(e) => changeRating(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={0.05}>it was okay(5%)</option>
        <option value={0.1}>it was good(10%)</option>
        <option value={0.2}>Absolutely amazing!(20%)</option>
      </select>
      <div></div>
    </div>
  );
}

function Output({
  rating1,
  rating2,
  billInput,
  setBillInput,
  setRating1,
  setRating2,
}) {
  // console.log(
  // `rating1=${rating1}
  // ,rating2=${rating2}`
  // )
  const tip = parseFloat((((rating1 + rating2) / 2) * billInput).toFixed(2));
  const total = billInput + tip;
  console.log(`tip= ${tip}`);

  console.log(`tot= ${total}`);
  console.log(`input= ${billInput}`);
  return (
    <div>
      {billInput !== null && (
        <div>
          <h3>{`you pay $${total} ($${billInput} + $${tip} tip)`}</h3>


        </div>
      )}
    </div>
  );
}
function Reset({handelReset}) {

  return(
    <div>

<button
            type="reset"
            onClick={handelReset
            }
          >
            reset
          </button>
    </div>
  )
}
export default App;
