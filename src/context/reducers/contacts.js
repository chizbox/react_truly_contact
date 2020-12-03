import {CONTACTS_LOADING, 
    CONTACTS_LOAD_SUCCESS,
    CONTACTS_LOAD_ERROR,
    LOGOUT_USER,}  from '../../constants/actionTypes'
    
import contactsInitialState from '../initialstates/contactsInitialState';


const contacts=(state,{payload,type}) => {
    switch(type){
        case CONTACTS_LOADING:{
            console.log(CONTACTS_LOADING);
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:true,
                }
            };
        }
        case CONTACTS_LOAD_SUCCESS:{
            console.log('CONTACTS_LOAD_SUCCESS');
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    data:payload
                }
            };
        }
        case CONTACTS_LOAD_ERROR:{
            console.log('CONTACTS_LOAD_ERROR')
            return{
                ...state,
                contacts:{
                    ...state.contacts,
                    loading:false,
                    error:payload,
                }
            };
        }
        case LOGOUT_USER:{
            console.log('Contacts Reducer Logging Out User')
            return {
                ...state,
                contactsInitialState,
            };
        }
        default : 
            return state;
    }
};

export default contacts;