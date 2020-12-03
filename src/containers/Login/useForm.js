import {useState, useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { login } from '../../context/actions/auth/login';
import {GlobalContext} from '../../context/provider'

export default ()=>{
    const [form,setForm] = useState({});

    const history = useHistory();

    const {authDispatch, 
            authState:{
                auth:{loading,error,data},
           },
    } = useContext(GlobalContext);

    const onChange=(e,{name,value}) =>{
        setForm({...form,[name]:value});
    }

    console.log('Login userForm Error:', error)
    const loginFormValid = !form.username?.length || !form.password?.length;

    const onSubmit = () => {
       console.log('onSubmitClicked')
       login(form)(authDispatch);
    };

    useEffect(()=>{
        console.log('useForm Use Effect data: ',data)
        if(data){
            if(data.user){
              history.push("/")  
            }              
        }                
    },[data])

    return {form,onChange,loading,error,loginFormValid, onSubmit};
}