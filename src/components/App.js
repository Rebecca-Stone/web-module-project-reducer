//not sure why this is creating an error
import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/index"

import "./App.css";

// these both use onClick but the files will not need to be changed
import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

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
            {/* Replace "0" with a reference to `state.total` when passing a value to our TotalDisplay component
             */}
            <TotalDisplay value={state.total} />
            <div className="row details">
              {/* Replace "X" with a reference to `state.operation` within the operation element */}
              <span id="operation">
                <b>Operation: {state.operation}</b> 
              </span>

              {/* Replace "0" with a reference to `state.memory` within the
              memory element */}
              <span id="memory">
                <b>Memory: {state.memory}</b> 
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
