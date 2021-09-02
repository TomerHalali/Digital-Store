import { LOGIN } from "../types/login.types";


export const loginAction = (userLoginDetails: any) => {
    return {
        type: LOGIN,
        payload: userLoginDetails
    };
};