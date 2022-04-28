import ApiService from "../../services/api";
import * as regionsTypes from "../ActionTypes/regionsActionTypes";
import { handleType } from "./handleTypes";

export const getRegions = (regionId, token) => (dispatch) => {
  dispatch(handleType(regionsTypes.REGIONS_START));
  return ApiService.getResources(
    `/v1/dictionary/district/?region__shared_id=${regionId}`,
    token
  )
    .then((value) => {
      dispatch(handleType(regionsTypes.REGIONS_SUCCESS, value));
      //   console.log(value);
    })
    .catch((error) => dispatch(handleType(regionsTypes.REGIONS_FAIL, error)));
};
