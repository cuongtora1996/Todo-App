import {combineReducers} from 'redux';
import todo from './todo/index';

const reducers = combineReducers({
    todo,
});

export default reducers;
