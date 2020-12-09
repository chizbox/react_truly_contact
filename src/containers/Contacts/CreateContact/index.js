import React, {
    useContext,
    useState,
    useEffect
} from 'react';
import CreateContactUI from '../../../layout/Create'
import createContact from '../../../context/actions/contacts/createContact'
import clearCreateContact from '../../../context/actions/contacts/clearCreateContact'
import { GlobalContext } from '../../../context/provider'
import { useHistory } from 'react-router-dom';

function CreateContactContainer() {
    const [form, setForm] = useState({});
    const history = useHistory();
    const {
        contactsDispatch,
        contactsState: { addContact: { loading, error, data } } }
        = useContext(GlobalContext);

    useEffect(() => {
        if (data) {
            history.push('/');
        }

        return () => {
            clearCreateContact()(contactsDispatch)
        }
    }, [data]);

    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }

    const formInvalid =
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.countryCode?.length ||
        !form.phoneNumber?.length;
    console.log('formInvalid: ', formInvalid);

    const formIsHalfFilled =
        Object.values(form)
            .filter((item) => item !== '')
            ?.length > 0 && formInvalid ;

    console.log('formIsHalfFilled: ', formIsHalfFilled);

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    };

    console.log('form', form);


    return <CreateContactUI
        onSubmit={onSubmit}
        formInvalid={formInvalid}
        onChange={onChange}
        form={form}
        loading={loading}
        formIshalfField={formIsHalfFilled}
    />;
};
export default CreateContactContainer;
