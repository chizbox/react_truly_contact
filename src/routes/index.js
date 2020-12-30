import {lazy} from 'react';

import RegisterComponent from '../containers/Register'
import LoginComponent from '../containers/Login'
import ContactsComponent from '../containers/Contacts'
// import CreateContactComponent from '../containers/Contacts/CreateContact'
const CreateContactComponent = lazy(() => 
    import('../containers/Contacts/CreateContact')
);

const routes = [
    {
        path: '/auth/login',
        component: LoginComponent,
        title: 'Login',
        needsAuth: false
    },
    {
        path: '/auth/register',
        component: RegisterComponent,
        title: 'Register',
        needsAuth: false
    },
    {
        path: '/contacts/create',
        component: CreateContactComponent,
        title: 'Create Contact',
        needsAuth: true
    },
    {
        path: '/',
        component: ContactsComponent,
        title: 'Contacts',
        needsAuth: true
    },

]

export default routes;

