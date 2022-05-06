import ApiService from "../../services/api";
import * as orgTypes from "../ActionTypes/organizationActionTypes";
import { handleType } from "./handleTypes";

export const getOrganizations = (payload, token) => (dispatch) => {
  dispatch(handleType(orgTypes.ORGANIZATION_START));
  const { limit, level } = payload;
  return ApiService.getResources(
    `/v1/organization/?limit=${limit}&level=${level}`,
    token
  )
    .then((value) => {
      dispatch(handleType(orgTypes.ORGANIZATION_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(orgTypes.ORGANIZATION_FAIL, error)));
};

export const searchOrganizations = (payload, token) => (dispatch) => {
  dispatch(handleType(orgTypes.SEARCH_ORGANIZATION_START));
  const { limit, offset, search, ordering } = payload;
  return ApiService.getResources(
    `/v1/organization/?search=${search}&ordering=${ordering}&limit=${limit}&offset=${offset}`,
    token
  )
    .then((value) => {
      dispatch(handleType(orgTypes.SEARCH_ORGANIZATION_SUCCESS, value));
    })
    .catch((error) =>
      dispatch(handleType(orgTypes.SEARCH_ORGANIZATION_FAIL, error))
    );
};

export const getOrganizationById = (id, token) => (dispatch) => {
  dispatch(handleType(orgTypes.ORGANIZATION_START_BY_ID));
  return ApiService.getResources(`/v1/organization/${id}/`, token)
    .then((value) => {
      dispatch(handleType(orgTypes.ORGANIZATION_SUCCESS_BY_ID, value));
    })
    .catch((error) =>
      dispatch(handleType(orgTypes.ORGANIZATION_FAIL_BY_ID, error))
    );
};
