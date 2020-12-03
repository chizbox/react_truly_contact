import React, {useEffect,useContext} from 'react';
import RegisterUI from '../../layout/Register';
import useForm from './useForm';
import {GlobalContext} from '../../context/provider'

function RegisterContainer() {

    const context = useContext(GlobalContext)
    console.log('RegisterContaner Context:',context);
    useEffect( () => {

    }, [])

    return <RegisterUI form={useForm()}/>;
    
    // <RegisterUI/>;
}

export default RegisterContainer;
