import { combineReducers } from "redux";
import nutritionReducer from "./reducer";

const rootReducer = combineReducers({
    nutrition: nutritionReducer,
});

export default rootReducer;