import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import asyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "system",
  storage: asyncStorage,
  whitelist: ["auth", "language"],
};
const persistReduce = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistReduce, applyMiddleware(thunk));
export const persistor = persistStore(store);
