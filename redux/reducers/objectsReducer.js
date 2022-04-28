import * as objectsTypes from "../ActionTypes/objectActionTypes";

const initialState = {
  objects: [],
  objectById: {},
  objLoading: false,
  error: null,
};

export const objectsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case objectsTypes.OBJECTS_START:
      return { ...state, objLoading: true };
    case objectsTypes.OBJECTS_START_BY_ID:
      return { ...state, objLoading: true };
    case objectsTypes.OBJECTS_SUCCESS:
      return { ...state, objLoading: false, objects: payload };
    case objectsTypes.OBJECTS_FAIL:
      return { ...state, objLoading: false, error: payload };
    case objectsTypes.OBJECTS_SUCCESS_BY_ID:
      return { ...state, objLoading: false, objectById: payload };
    case objectsTypes.OBJECTS_FAIL_BY_ID:
      return { ...state, objLoading: false, error: payload };
    default:
      return state;
  }
};
