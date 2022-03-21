import React from "react";

// * Note that the `CalcButton` component takes in an `onClick` method and a value, displays that value and attaches the passed `onClick` method to the button ui.

// YOU WILL NOT NEED TO MODIFY THIS COMPONENT.

const CalcButton = (props) => {
  const { value, onClick = (e) => {}, size = 4 } = props;

  return (
    <div className={`col-xs-${size}`}>
      <button
        value={value}
        type="button"
        onClick={(e) => {
          onClick(e);
        }}
        className="btn"
      >
        {value}
      </button>
    </div>
  );
};

export default CalcButton;
