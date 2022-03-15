import { BASE_API, USER_DETAILS_API } from "configs/variables.config";
import httpService from "services/http.service";

export async function GetUsers(userName) {
    try {
        const response = await httpService.get(BASE_API + userName);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function GetUserDetails(userName) {
    try {
        const response = await httpService.get(USER_DETAILS_API + userName);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function GetUserRepos(userName) {
    try {
        const response = await httpService.get(USER_DETAILS_API + userName + "/repos");
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}