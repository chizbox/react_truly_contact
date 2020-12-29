import React, { useContext, useEffect } from 'react';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/provider'
import { useHistory } from "react-router-dom";
import ContactsListUI from '../../layout/Contacts/List'
import deleteContact from '../../context/actions/contacts/deleteContacts'
import starUnstar from '../../context/actions/contacts/starUnstar';

function ContactsContainer() {
    const { contactsDispatch, contactsState } = useContext(GlobalContext)

    const history = useHistory();

    const {
        contacts: { data },
    } = contactsState;

    const handleDeleteContact = (id) => {
        deleteContact(id)(contactsDispatch);
    }

    const handleUnstarContact=(id, is_favorite)=>{
        starUnstar(id, !is_favorite) (contactsDispatch);
    }

    useEffect(() => {
        if (data.length === 0) {
            getContacts(history)(contactsDispatch);
        }
    }, []);

    return <ContactsListUI 
        state={contactsState} 
        deleteContact={handleDeleteContact} 
        starUnstarContact={handleUnstarContact}
        />;
}

export default ContactsContainer;
