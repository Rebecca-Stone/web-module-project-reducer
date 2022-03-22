import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR,
  M_PLUS,
  M_APPLY,
  M_CLEAR,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
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

    case CLEAR:
      return {
        ...state,
        total: initialState.total,
        operation: initialState.operation,
      };

    case M_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case M_APPLY:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };

    case M_CLEAR:
      return {
        ...state,
        memory: initialState.memory,
      };

    default:
      return state;
  }
};

export default reducer;
