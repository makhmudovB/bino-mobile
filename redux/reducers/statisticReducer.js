import * as statTypes from "../ActionTypes/statisticActionTypes";

const initialState = {
  statistic: {},
  statisticDiagram: {},
  statLoading: false,
  statError: null,
};

export const statisticReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case statTypes.STATISTIC_START:
      return { ...state, statLoading: true };
    case statTypes.STATISTIC_SUCCESS:
      return { ...state, statLoading: false, statistic: payload };
    case statTypes.STATISTIC_DIAGRAM_SUCCESS:
      return { ...state, statLoading: false, statisticDiagram: payload };
    case statTypes.STATISTIC_FAIL:
      return { ...state, statLoading: false, statError: payload };
    default:
      return state;
  }
};
