import { BASE_API } from "configs/variables.config";
import httpService from "services/http.service";

export async function GetUsers(userName) {
    try {
        const response = await httpService.get(BASE_API + userName);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}