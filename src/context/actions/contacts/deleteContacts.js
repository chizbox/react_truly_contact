import {
    DELETE_CONTACT_ERROR,
    DELETE_CONTACT_LOADING,
    DELETE_CONTACT_SUCCESS
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => {
    dispatch({
        type: DELETE_CONTACT_LOADING,
    });

    axiosInstance()
        .delete(`/contacts/${id}`)
        .then((res) => {
             dispatch({
                type: DELETE_CONTACT_SUCCESS,
                payload: id,
            });
        })
        .catch((err) => {
            dispatch({
                type: DELETE_CONTACT_ERROR,
                payload: err.response ? err.res.data : 'could not connect',
            });
        });
}; 