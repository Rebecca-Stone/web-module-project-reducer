//not sure why this is creating an error
import React from "react";
// import the useReducer hook, our application's reducer and initialState object.

//Use useReducer hook to get access to the application state and the dispatch function.

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            {/* make the '0' not hard coded and display clicked number */}
            <TotalDisplay value={0} />
            <div className="row details">
              {/* make the 'X' not hard coded and display clicked operation */}
              <span id="operation">
                <b>Operation:</b> X
              </span>
              {/* make the '0' not hard coded and display what is in memory */}
              <span id="memory">
                <b>Memory:</b> 0
              </span>
            </div>

            <div className="row">
              {/* look up what these buttons are used for */}
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              {/* these will need a onClick */}
              <CalcButton value={1} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              {/* these will need a onClick */}
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              {/* these will need a onClick */}
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>

            <div className="row">
              {/* these will need a onClick */}
              <CalcButton value={"+"} />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              {/* this will clear the value but keep memory? */}
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
