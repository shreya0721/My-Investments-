import axios from 'axios';
import {TABLE_ACTIONS} from '../utils/actionType';
import {TABLE_DATA} from '../utils/constants';

export const fetchTableData = () => {               
    return (dispatch) => {
     
  
    //  axios.post( "https://getCustomerData",{ headers: { 'Content-Type': 'application/json' }})
    //  .then((response)=>{            
      
        dispatch(setTableData(TABLE_DATA.data)) 
        
    //  })
}
}

export const setTableData = (data) => {
    return{
        type:TABLE_ACTIONS.TABLE_DATA_VALUES,
        payload:{
            data
        }
    }
}