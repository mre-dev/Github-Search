import { ADD_USERS, CLEAR_USERS, GET_USERS } from 'redux/types';

export const addUsers = (usersData) => {
    return {
        type: ADD_USERS,
        payload: usersData
    };
};

export const getUsers = () => {
    return {
        type: GET_USERS
    };
};

export const clearUsers = () => {
    return {
        type: CLEAR_USERS
    };
};