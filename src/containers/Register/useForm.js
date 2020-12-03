import {useState, useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { register } from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/provider'

// this is a form hook
export default ()=>{
    const [form,setForm] = useState({});
    const [fieldErrors,setFieldErrors] = useState({});
    const history = useHistory();

    const {authDispatch, 
            authState:{
                auth:{loading,error,data},
           },
    } = useContext(GlobalContext);

    useEffect(()=>{
        if(error){
            for(const item in error){
                setFieldErrors({...fieldErrors,[item]:error[item][0]});
            }
        }
    },[error]);

    useEffect(()=>{
        if(data){
            history.push('/auth/login');
        }
    },[data]);

    const onChange=(e,{name,value}) =>{
        setForm({...form,[name]:value});
    }

    console.log('UserForm Form: ', form)
    console.log('UseForm Loading: ', loading)
    console.log('UseForm Error: ', error)
    console.log('UseForm Data: ', data)
    
    const registerFormValid = 
        !form.username?.length || 
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.password?.length ||
        !form.email?.length;

    console.log('UserForm is registerFormValid: ', registerFormValid)
    
    const onSubmit = () => {
        setFieldErrors({});
        register(form)(authDispatch);
    };

    const sub  = () => register(form)(authDispatch);
    return {form,onChange,loading,fieldErrors,registerFormValid,onSubmit};
}