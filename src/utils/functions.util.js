export const getAppTitle = () => {
    return process.env.REACT_APP_WEBSITE_NAME;
};

export const getAppDescription = () => {
    return process.env.REACT_APP_WEBSITE_DESCRIPTION;
};

export const saveUsersState = (state) => {
    localStorage.setItem('users', JSON.stringify(state));
}

export const saveUserState = (state) => {
    localStorage.setItem('user', JSON.stringify(state));
}

export const getUsersState = () => {
    return JSON.parse(localStorage.getItem('users'));
}

export const getUserState = () => {
    return JSON.parse(localStorage.getItem('user'));
}