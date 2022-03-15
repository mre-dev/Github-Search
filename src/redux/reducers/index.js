import { combineReducers } from "redux";
import { getUsersState } from "utils/functions.util";
import { userReducer } from "./usersReducers";

export const allReducer = combineReducers({
    userReducer( state = getUsersState(), action ) {
        return userReducer( state, action );
    },
});