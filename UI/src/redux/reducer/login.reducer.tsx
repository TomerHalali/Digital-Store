import { LOGIN } from "../types/login.types";

const INITIAL_STATE = {
    userLoginInformation:
    {
        userName: "",
        password: ""
    }
};

const reducer = (state = INITIAL_STATE, action: any) => {
    
    switch (action.type) {

        case LOGIN:
           return {
             ...state, userInfo: {userName: action.payload.userName , password:action.payload.password}
           };
        
         default: return state;

    }

};

export default reducer;