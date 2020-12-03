import LoginUI from '../../layout/Login'
import useForm from './useForm';

function LoginContainer() {
    return <LoginUI form={useForm()}/>;
}

export default LoginContainer;
