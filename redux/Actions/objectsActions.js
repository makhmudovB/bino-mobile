import ApiService from "../../services/api";
import { handleType } from "./handleTypes";
import * as objectsTypes from "../ActionTypes/ObjectActionTypes";

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
