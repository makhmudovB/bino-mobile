import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { objectsReducer } from "./objectsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  objects: objectsReducer,
});
