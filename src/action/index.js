import { 
    GET_LIST_DATA_TV,
    GET_LIST_DATA_TV_SUCCESS,
    GET_LIST_DATA_TV_FAILED,
} from '../constants';

import { getlLoadListDataTVPromise } from '../services';

export const getlLoadListDataTVAction = () => ({
    type: GET_LIST_DATA_TV,    
});

export const getlLoadListDataTVSuccess = data => ({
    type: GET_LIST_DATA_TV_SUCCESS,
    payload: data,
});

export const getlLoadListDataTVFailed = err => ({
    type: GET_LIST_DATA_TV_FAILED,
    payload: err,
});
export const getlLoadListDataTV = () => (dispatch) => {
 
    dispatch(getlLoadListDataTVAction());
    return getlLoadListDataTVPromise()
      .then((data) => {
        dispatch(getlLoadListDataTVSuccess(data));
        return Promise.resolve(data);
    })
    .catch((error) => {
        dispatch(getlLoadListDataTVSuccess(error));
        return Promise.resolve(error);
    });
};


  