import {searchReducer} from './searchReducer';
import {combineReducers} from 'redux';

//root reducer combines all the reducers
const combineReducerObject = combineReducers({
    searchData:searchReducer,    //searchData is used in Home container
});

const rootReducer = (state,action) => {
    return combineReducerObject(state,action);
};

export default rootReducer;