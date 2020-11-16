import { combineReducers } from "redux";
import menuOpenState from "./menuOpenState";
import company from "./company"
import currentMenu from "./currentMenu"
export default combineReducers({ menuOpenState, company, currentMenu });