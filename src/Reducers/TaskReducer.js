import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE, 
    FETCHING_DATA_KECAMATAN,FETCHING_DATA_KECAMATAN_SUCCESS,FETCHING_DATA_KECAMATAN_FAILURE
}  
from '../constants'

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
  }


  export default function TaskReducer(state=initialState,action) {

    console.log('dari reducers ',action.type)
    switch (action.type) {
        case FETCHING_DATA:

            return {...state,data:[],isFetching:true }
            
            break;
        case FETCHING_DATA_SUCCESS:

            return {
                ...state,data:action.data,isFetching:false
            }
            break;
        case FETCHING_DATA_FAILURE:
            return {
                ...state,data:[],isFetching:false,error:true
            }
             break;
        default:
            
        return state
    }

  }
