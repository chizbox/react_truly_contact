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

    console.log('Contact State: ', loading)

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value })
    };
    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }

    console.log('form', form);
    const formInvalid =
        !form.firstName?.length ||
        !form.lastName?.length ||
        !form.countryCode?.length ||
        !form.phoneNumber?.length;


    return <CreateContactUI
        onSubmit={onSubmit}
        formInvalild
        onChange={onChange}
        form={form}
        loading={loading}
    />;
};
export default CreateContactContainer;
