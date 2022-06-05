import React from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login as reduxLogin, selectAuthenticated } from '../../store/auth';

import { loginWithEmailMutation } from '../../graphql/mutations';

import Modal from '../../components/Modal';
import InputField from '../../components/inputs/InputField';
import Button from '../../components/buttons/Button';
import ButtonContainer from '../../components/buttons/ButtonContainer';

interface Values {
    email: string;
    password: string;
};

const initialValues: Values = {
    email: 'nathielpayne+5@test.com',
    password: 'password',
};

const Login: React.FC = ({}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const authenticated = useAppSelector(selectAuthenticated);

    if (authenticated) router.push('/');

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

    const handleGoToRegister = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log('event: ', event);
    };

    const InputContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
    `;

    const FormErrorMessage = styled.p`
        color: rgb(215, 55, 55);
    `;

    return (
        <Modal>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    {error && <FormErrorMessage>{error.message}.</FormErrorMessage>}

                    <InputContainer>
                        <InputField label='Email' name='email' type='email' description='The email address you used to sign up.' />
                        <InputField label='Password' name='password' type='password' description='Keep it secret!' />
                    </InputContainer>

                    <ButtonContainer>
                        <Button label='Go to register' onClick={handleGoToRegister} />
                        <Button label='Login' style='submit' />
                    </ButtonContainer>
                </Form>
            </Formik>
        </Modal>
    );
};

export default Login;