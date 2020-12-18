import { LOGIN_ERROR, LOGIN_SUCCESS,LOGIN_LOADING } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export const login =({password,username,}) => (dispatch) => {

    console.log('login dispatch LOGIN_LOADING');
    dispatch({
        type: LOGIN_LOADING,
    });
    
    axiosInstance()
        .post('/auth/login',{
            username,
            password,
        })
        .then((res) => {
            localStorage.token = res.data.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload:res.data,
            });
        })
        .catch((err) => {
            console.log('could not connect');
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response ? err.response.data : 'COULD NOT CONNECT',
            });
        });
};
