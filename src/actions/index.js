export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const M_PLUS = "M_PLUS";
export const M_APPLY = "M_APPLY";
export const M_CLEAR = "M_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (newOperation) => {
  return { type: CHANGE_OPERATION, payload: newOperation };
};

export const clear = () => {
  return { type: CLEAR };
};

export const mPlus = () => {
  return { type: M_PLUS };
};

export const mApply = () => {
    return { type: M_APPLY }
}

export const mClear = () => {
  return { type: M_CLEAR };
};
