import { combineReducers, createStore } from "redux";
import { BTDatVeXemPhimReducer } from "./reducers/BTDatVeXemPhimReducer";
const rootReducer = combineReducers({
  BTDatVeXemPhimReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
