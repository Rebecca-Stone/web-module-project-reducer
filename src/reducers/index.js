//not sure why this is creating an error
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from "./../actions";

// will need to fix initialState so that way its neutral
export const initialState = {
  total: 100,
  operation: "*",
  memory: 100,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    //num1 is the number in memory???
    //num2 is the number clicked after operation??

    // will need to update App.js with new operation for display
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
