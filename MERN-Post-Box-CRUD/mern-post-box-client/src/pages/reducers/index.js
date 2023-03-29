// referred by `store.js` for the reducers [6]

import { combineReducers } from "redux";
import { postMessage } from "./postMessage";

export const reducers = combineReducers({
    postMessage
})