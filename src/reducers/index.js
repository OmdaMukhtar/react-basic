
import {combineReducers} from 'redux';

import task from './taskReducer';
import user from './userReducer';

export default combineReducers({
    task,
    user
});

