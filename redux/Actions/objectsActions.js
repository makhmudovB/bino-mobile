import ApiService from "../../services/api";
import { handleType } from "./handleTypes";
import * as objectsTypes from "../ActionTypes/objectActionTypes";

export const getObjects = (payload, token) => (dispatch) => {
  dispatch(handleType(objectsTypes.OBJECTS_START));
  const { region__shared_id, district, search, limit, offset } = payload;
  return ApiService.getResources(
    `/v1/building/generalinformation/?region__shared_id=${region__shared_id}&district=${district}&search=${search}&limit=${limit}&offset=${offset}`,
    token
  )
    .then((value) => {
      dispatch(handleType(objectsTypes.OBJECTS_SUCCESS, value?.results));
    })
    .catch((error) => dispatch(handleType(objectsTypes.OBJECTS_FAIL, error)));
};

export const getObjectsById = (id, token) => (dispatch) => {
  dispatch(handleType(objectsTypes.OBJECTS_START_BY_ID));
  return ApiService.getResources(
    `/v1/building/generalinformation/${id}/`,
    token
  )
    .then((value) => {
      dispatch(handleType(objectsTypes.OBJECTS_SUCCESS_BY_ID, value));
    })
    .catch((error) =>
      dispatch(handleType(objectsTypes.OBJECTS_FAIL_BY_ID, error))
    );
};

export const getObjectsByOrganizations = (payload, token) => (dispatch) => {
  const { organization, limit } = payload;
  dispatch(handleType(objectsTypes.OBJECTS_START_BY_ORG));
  return ApiService.getResources(
    `/v1/building/generalinformation/?organization=${organization}&limit=${limit}`,
    token
  )
    .then((value) => {
      dispatch(handleType(objectsTypes.OBJECTS_SUCCESS_BY_ORG, value));
    })
    .catch((error) =>
      dispatch(handleType(objectsTypes.OBJECTS_FAIL_BY_ORG, error))
    );
};
