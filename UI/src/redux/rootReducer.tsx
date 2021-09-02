import { combineReducers } from 'redux';

import loginReducer from './reducer/login.reducer';

const rootReducer = combineReducers({

    loginUser: loginReducer,

});

export default rootReducer;