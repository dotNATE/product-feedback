import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';

import { loginWithEmailMutation } from '../../graphql/mutations';

import Modal from './components/Modal';

interface Values {
    email: string;
    password: string;
}

const initialValues: Values = {
    email: 'nathielpayne+5@test.com',
    password: 'password',
};
  
const Login: React.FC = ({}) => {
    const [login, { error, loading }] = useMutation(loginWithEmailMutation, {
        onCompleted: (data): void => {
            alert(JSON.stringify(data, null, 2));
        },
    });
    
    const handleSubmit = (values: Values): void => {
        login({ 
            variables: values,
        });
    };

    return loading ? (
        <Modal>
            <div>Loading...</div>
        </Modal>
    ) : (
        <Modal>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    {error && <p>{error.message}</p>}

                    <label htmlFor='email'>Email</label>
                    <Field id='email' name='email'/>

                    <label htmlFor='password'>Password</label>
                    <Field id='password' name='password' type='password'/>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default Login;