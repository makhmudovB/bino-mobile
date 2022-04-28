import ApiService from "../../services/api";
import * as userTypes from "../ActionTypes/userActionTypes";
import { handleType } from "./handleTypes";

export const getUsers = (payload, token) => (dispatch) => {
  dispatch(handleType(userTypes.USER_START));
  const { search, limit, offset, organization } = payload;
  return ApiService.getResources(
    `/v1/users/?organization=${organization}&search=${search}&limit=${limit}&offset=${offset}`,
    token
  )
    .then((value) => {
      dispatch(handleType(userTypes.USER_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(userTypes.USER_FAIL, error)));
};

export const createUser = (payload, token) => (dispatch) => {
  dispatch(handleType(userTypes.CREATE_USER_START));
  const { login_name, password, role, organization } = payload;
  const body = {
    login_name,
    password,
    role,
    organization,
  };
  return ApiService.fetchPostEvent("/v1/users/", token, body)
    .then((value) => {
      dispatch(handleType(userTypes.CREATE_USER_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(userTypes.CREATE_USER_FAIL, error)));
};

export const updateUser = (id, payload, token) => (dispatch) => {
  dispatch(handleType(userTypes.UPDATE_USER_START));
  const { login_name, password } = payload;
  const body = {
    login_name,
    password,
  };
  return ApiService.patchEvent(`/v1/users/${id}/`, token, body)
    .then((value) => {
      dispatch(handleType(userTypes.UPDATE_USER_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(userTypes.UPDATE_USER_FAIL, error)));
};
