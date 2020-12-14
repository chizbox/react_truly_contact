import React, { useContext, useEffect} from 'react';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/provider'
import { useHistory } from "react-router-dom";
import ContactsListUI from '../../layout/Contacts/List'


function ContactsContainer() {
    const {contactsDispatch,contactsState} = useContext(GlobalContext)
    
    const history = useHistory();

    const{
        contacts:{data},
    } = contactsState; 

    useEffect(() => {
        if(data.length ===0){
            getContacts(history)(contactsDispatch);
        }
    },[]);

    return <ContactsListUI state={contactsState}/>;
}

export default ContactsContainer;
