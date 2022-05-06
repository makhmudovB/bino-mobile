import * as orgTypes from "../ActionTypes/organizationActionTypes";

const initialState = {
  organizations: null,
  organizationById: null,
  searchResult: null,
  orgLoading: false,
  orgError: null,
};

export const organizationsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case orgTypes.ORGANIZATION_START:
    case orgTypes.ORGANIZATION_START_BY_ID:
    case orgTypes.SEARCH_ORGANIZATION_START: {
      return { ...state, orgLoading: true };
    }
    case orgTypes.ORGANIZATION_SUCCESS:
      return {
        ...state,
        orgLoading: false,
        organizations: payload,
      };
    case orgTypes.ORGANIZATION_SUCCESS_BY_ID:
      return {
        ...state,
        orgLoading: false,
        organizationById: payload,
      };
    case orgTypes.SEARCH_ORGANIZATION_SUCCESS:
      return { ...state, orgLoading: false, searchResult: payload };
    case orgTypes.ORGANIZATION_FAIL:
    case orgTypes.ORGANIZATION_FAIL_BY_ID:
    case orgTypes.SEARCH_ORGANIZATION_FAIL: {
      return {
        ...state,
        orgLoading: false,
        orgError: payload,
      };
    }
    default:
      return state;
  }
};
