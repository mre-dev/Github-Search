import {
    ADD_USERS,
    GET_USERS,
    CLEAR_USERS
} from "redux/types";

const initialUserState = {
    users: []
};

export const userReducer = (state = initialUserState, action) => {    
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_USERS:
            return { users: action.payload };

        case GET_USERS:
            return state.users;

        case CLEAR_USERS:
            return { users: [] };

        default:
            return state;
    }
}