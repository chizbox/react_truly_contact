import { createContext, useReducer } from 'react';
import authinitialState from './initialstates/authinitialState';
import auth from './reducers/auth';
import contactsInitialState from './initialstates/contactsInitialState';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    console.log('Global Provider Children: ', children)
    const [authState, authDispatch] = useReducer(
        auth,
        authinitialState
    );

    const [contactsState, contactsDispatch] = useReducer(
        contacts,
        contactsInitialState
    );

    return <GlobalContext.Provider value={
        {
            authState,
            authDispatch,
            contactsState,
            contactsDispatch,
        }
    }
    >{children}
    </GlobalContext.Provider>;
};

