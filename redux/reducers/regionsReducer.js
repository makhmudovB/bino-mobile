import * as regionsTypes from "../ActionTypes/regionsActionTypes";

const initialState = {
  regions: [],
  regionLoading: false,
  error: null,
};

export const regionsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case regionsTypes.REGIONS_START:
      return { ...state, regionLoading: true };
    case regionsTypes.REGIONS_SUCCESS:
      return { ...state, regionLoading: false, regions: payload };
    case regionsTypes.REGIONS_FAIL:
      return { ...state, regionLoading: false, error: payload };
    default:
      return state;
  }
};
