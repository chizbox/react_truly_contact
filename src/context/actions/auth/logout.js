import { LOGOUT_USER } from "../../../constants/actionTypes";

export default (history)=>(contactsDispatch)=>(authDispatch)=>{
    localStorage.removeItem('token');
  
    //calls to the reducer to restore default values
    authDispatch({
        type: LOGOUT_USER, 
    });

    //calls to the reducer to restore default values
    contactsDispatch({
        type: LOGOUT_USER, 
    });
    
    console.log('history of logout.js: ', history);
    //redirects to login page
    history.push('/auth/login');
}