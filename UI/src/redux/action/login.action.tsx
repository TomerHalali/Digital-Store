import { LOGIN } from "../types/login.types";
import Iuser from "../../Interfaces/Iuser";


export const loginAction = (userLoginDetails: Iuser) => {
    return {
        type: LOGIN,
        payload: userLoginDetails
    };
};