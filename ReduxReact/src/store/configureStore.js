import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contador from "./contador";
import modal from "./modal";
import login from "./login";
import localStorage from "../middleware/localStorage";
// import logger from "../middleware/logger";

const middleware = [...getDefaultMiddleware(), localStorage];

// quando tiver mais de slice, usar o CombineReducers
const reducer = combineReducers({ contador, modal, login });

const store = configureStore({ reducer, middleware });

export default store;
