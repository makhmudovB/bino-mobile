import * as objectsTypes from "../ActionTypes/ObjectActionTypes";

const initialState = {
  objects: [],
  objLoading: false,
  error: null,
};

export const objectsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case objectsTypes.OBJECTS_START:
      return { ...state, objLoading: true };
    case objectsTypes.OBJECTS_SUCCESS:
      return { ...state, objLoading: false, objects: payload };
    case objectsTypes.OBJECTS_FAIL:
      return { ...state, objLoading: false, error: payload };
    default:
      return state;
  }
};
