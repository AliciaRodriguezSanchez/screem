import {
    GET_LIST_DATA_TV_SUCCESS,
} from '../constants';

const initialState = [];

const ObjectState = (state = initialState, {type, payload=[]}) => { 
    switch (type) {
      case GET_LIST_DATA_TV_SUCCESS:   
        return  payload;
        
      default:
        return state;
    }
};
export default ObjectState;