import {
    CONTACTS_LOADING,
    CONTACTS_LOAD_SUCCESS,
    CONTACTS_LOAD_ERROR,
    LOGOUT_USER,
    ADD_CONTACT_LOAD,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_ERROR,
    CLEAR_ADD_CONTACT,
    SEARCH_CONTACTS,
} from '../../constants/actionTypes'

import contactsInitialState from '../initialstates/contactsInitialState';


const contacts = (state, { payload, type }) => {
    switch (type) {
        case CONTACTS_LOADING: {
            console.log(CONTACTS_LOADING);
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true,
                }
            };
        }
        case CONTACTS_LOAD_SUCCESS: {
            console.log('CONTACTS_LOAD_SUCCESS');
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: payload
                }
            };
        }
        case CONTACTS_LOAD_ERROR: {
            console.log('CONTACTS_LOAD_ERROR')
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload,
                }
            };
        }
        case LOGOUT_USER: {
            console.log('Contacts Reducer Logging Out User')
            return {
                ...state,
                contactsInitialState,
            };
        }
        case ADD_CONTACT_LOAD: {
            console.log('Contacts Reducer Add Contact Load')
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    loading: true,
                },
            };
        }
        case ADD_CONTACT_SUCCESS: {
            console.log('Contacts Reducer Add Contact Success')
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    data: payload,
                },

                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: [payload, ...state.contacts.data],
                },
            };
        }
        case ADD_CONTACT_ERROR: {
            console.log('Contacts Reducer ADD Contact Error')
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                },


            };
        }
        case CLEAR_ADD_CONTACT: {
            console.log('Contacts Reducer Clear Add Contact')
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    loading: false,
                    data: null,
                },
            };
        }
        case SEARCH_CONTACTS: {
            console.log('Contacts Reducer SEARCH_CONTACTS')
            return {
                contacts: {
                    ...state.contacts,
                    loading: false,
                    isSearchActive: !!payload.length > 0 || false,
                    // foundContacts:state.contacts.data.filter((item)=>{
                    //     return {
                    //         item.first_name.toLowerCase().search(payload.toLowerCase()) !==-1 ||
                            
                    //         ;
                    // };
                },
            };
        }
        default:
            return state;
    }
};

export default contacts;