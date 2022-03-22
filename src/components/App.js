import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

import reducer, { initialState } from "../reducers/index";
import { applyNumber, changeOperation, clear } from "../actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNumberClick = (number) => {
    dispatch(applyNumber(number));
  };

  const operationClick = (newOperation) => {
    dispatch(changeOperation(newOperation));
  };

  const clearClick = () => {
    dispatch(clear())
  }

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
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation: {state.operation}</b>
              </span>

              <span id="memory">
                <b>Memory: {state.memory}</b>
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={() => {
                  applyNumberClick(1);
                }}
              />
              <CalcButton
                value={2}
                onClick={() => {
                  applyNumberClick(2);
                }}
              />
              <CalcButton
                value={3}
                onClick={() => {
                  applyNumberClick(3);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={() => {
                  applyNumberClick(4);
                }}
              />
              <CalcButton
                value={5}
                onClick={() => {
                  applyNumberClick(5);
                }}
              />
              <CalcButton
                value={6}
                onClick={() => {
                  applyNumberClick(6);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={() => {
                  applyNumberClick(7);
                }}
              />
              <CalcButton
                value={8}
                onClick={() => {
                  applyNumberClick(8);
                }}
              />
              <CalcButton
                value={9}
                onClick={() => {
                  applyNumberClick(9);
                }}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => {
                  operationClick("+");
                }}
              />
              <CalcButton
                value={"*"}
                onClick={() => {
                  operationClick("*");
                }}
              />
              <CalcButton
                value={"-"}
                onClick={() => {
                  operationClick("-");
                }}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {
                clearClick();
              }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
