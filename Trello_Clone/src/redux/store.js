import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { isLoginReducer } from "./reducer/isLoginReducer";
import { todoReducer } from "./reducer/todoReducer";
const rootReducer = combineReducers({
  loginState: isLoginReducer,
  todoState: todoReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
