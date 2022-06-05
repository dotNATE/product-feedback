import { useMutation } from '@apollo/client';
import { useAppDispatch } from '../../../store/hooks';
import { login as reduxLogin } from '../../../store/auth';
import { loginWithEmailMutation } from '../../../graphql/mutations';

import ModalForm from "../FormWrapper";
import LoginButtons from './LoginButtons';
import LoginInputs from './LoginInputs';

interface Values {
    email: string;
    password: string;
};

const initialValues: Values = {
    email: 'nathielpayne+5@test.com',
    password: 'password',
};

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const [login, { error }] = useMutation(loginWithEmailMutation, {
        onCompleted: (data): void => {
            const token = data.loginWithEmail.token;
            const id = data.loginWithEmail.id;
            dispatch(reduxLogin({ token, id }));
        },
        onError: (err) => {
            console.error(err);
        },
    });
    
    const handleSubmit = (values: Values): void => {
        login({ 
            variables: values,
        });
    };

    return (
        <ModalForm name="Login" initialValues={initialValues} handleSubmit={handleSubmit} inputs={<LoginInputs />} buttons={<LoginButtons />} />
    );
};

export default LoginForm;