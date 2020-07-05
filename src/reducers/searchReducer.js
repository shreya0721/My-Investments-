import {TABLE_ACTIONS} from '../utils/actionType';

const initialState = {
    tableData:null
}
export const searchReducer = (state=initialState,action) => {
    switch(action.type) {
        case TABLE_ACTIONS.TABLE_DATA_VALUES:             
             return {
                 ...state, //spread operator 
                 tableData:action.payload.data
             }
        
        default:
            return state;
    }
}