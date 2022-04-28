import ApiService from "../../services/api";
import * as authTypes from "../ActionTypes/authActionTypes";
import { handleType } from "./handleTypes";

export const getAuth = (payload, callback) => (dispatch) => {
  dispatch(handleType(authTypes.AUTH_START));
  const { login_name, password } = payload;
  const body = {
    login_name,
    password,
  };
  return ApiService.postEvent("/v1/token/", body, null)
    .then((value) => {
      if (value?.status) {
        dispatch(handleType(authTypes.AUTH_SUCCESS, value.data));
        if (callback) callback();
      } else {
        throw value;
      }
    })
    .catch((error) => dispatch(handleType(authTypes.AUTH_FAIL, error)));
};

export const refreshToken = (token) => (dispatch) => {
  return ApiService.postEvent("/v1/token/refresh/", token, null).then(
    (value) => {
      dispatch(handleType(authTypes.SET_REFRESH, value));
    }
  );
};

export const logout = (body, token) => (dispatch) => {
  dispatch(handleType(authTypes.LOG_OUT_STARTING));
  return ApiService.postEvent("/v1/logout", body, token)
    .then((value) => {
      dispatch(handleType(authTypes.LOG_OUT_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(authTypes.LOGOUT_FAIL, error)));
};
