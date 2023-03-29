// Creates Storage of the data made by the Reducer, to be referred and displayed by react-redux. [3]

import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

export const store = createStore( // First parameter is the reducers, second is the middleware.
    reducers, // refers `index.js`
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)