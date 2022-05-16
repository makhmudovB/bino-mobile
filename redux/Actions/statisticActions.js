import ApiSerice from "../../services/api";
import * as statTypes from "../ActionTypes/statisticActionTypes";
import { handleType } from "./handleTypes";

export const getStatistic = (token) => (dispatch) => {
  dispatch(handleType(statTypes.STATISTIC_START));
  return ApiSerice.getResources("/v1/building/statistic/", token)
    .then((value) => {
      dispatch(handleType(statTypes.STATISTIC_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(statTypes.STATISTIC_FAIL, error)));
};

export const getStatisticDiagram = (token) => (dispatch) => {
  dispatch(handleType(statTypes.STATISTIC_START));
  return ApiSerice.getResources("/v1/building/statisticdiagram/", token)
    .then((value) => {
      dispatch(handleType(statTypes.STATISTIC_DIAGRAM_SUCCESS, value));
    })
    .catch((error) => dispatch(handleType(statTypes.STATISTIC_FAIL, error)));
};
