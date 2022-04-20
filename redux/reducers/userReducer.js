import * as userTypes from "../ActionTypes/UserActionTypes";

const initialState = {
  user: [],
  loading: false,
  createResponse: null,
  updateResponse: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userTypes.USER_START:
      return { ...state, loading: true };
    case userTypes.USER_SUCCESS:
      return { ...state, loading: false, user: payload };
    case userTypes.USER_FAIL:
      return { ...state, loading: false, error: payload };
    case userTypes.CREATE_USER_START:
      return { ...state, loading: true };
    case userTypes.CREATE_USER_SUCCESS:
      return { ...state, loading: false, createResponse: payload };
    case userTypes.CREATE_USER_FAIL:
      return { ...state, loading: false, error: payload };
    case userTypes.UPDATE_USER_START:
      return { ...state, loading: true };
    case userTypes.UPDATE_USER_SUCCESS:
      return { ...state, loading: false, updateResponse: payload };
    case userTypes.UPDATE_USER_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
