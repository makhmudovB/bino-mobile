import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { objectsReducer } from "./objectsReducer";
import { regionsReducer } from "./regionsReducer";
import { userReducer } from "./userReducer";
import { languageReducer } from "./languageReducer";
import { organizationsReducer } from "./organizationsReducer";
import { statisticReducer } from "./statisticReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  objects: objectsReducer,
  regions: regionsReducer,
  language: languageReducer,
  organizations: organizationsReducer,
  statistic: statisticReducer,
});
