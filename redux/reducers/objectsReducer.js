import * as objectsTypes from "../ActionTypes/objectActionTypes";

const initialState = {
  objects: [],
  objectById: {},
  objectsByOrg: {},
  objLoading: false,
  error: null,
};

export const objectsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case objectsTypes.OBJECTS_START:
    case objectsTypes.OBJECTS_START_BY_ID:
    case objectsTypes.OBJECTS_START_BY_ORG: {
      return { ...state, objLoading: true };
    }
    case objectsTypes.OBJECTS_SUCCESS:
      return { ...state, objLoading: false, objects: payload };
    case objectsTypes.OBJECTS_SUCCESS_BY_ID:
      return { ...state, objLoading: false, objectById: payload };
    case objectsTypes.OBJECTS_SUCCESS_BY_ORG:
      return { ...state, objLoading: false, objectsByOrg: payload };
    case objectsTypes.OBJECTS_FAIL:
    case objectsTypes.OBJECTS_FAIL_BY_ID:
    case objectsTypes.OBJECTS_FAIL_BY_ORG: {
      return { ...state, objLoading: false, error: payload };
    }
    default:
      return state;
  }
};
