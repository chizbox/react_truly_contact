import React, { useContext, useEffect} from 'react';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/provider'
import { useHistory } from "react-router-dom";
import ContactsListUI from '../../layout/Contacts/List'


function ContactsContainer() {
    const {contactsDispatch,contactsState} = useContext(GlobalContext)
    const history = useHistory();

    console.log('contactsState',contactsState);
    console.log('history from contacts: ',history)
    
    useEffect(() => {
        getContacts(history)(contactsDispatch);
    },[])

    return <ContactsListUI state={contactsState}/>;
}

export default ContactsContainer;
