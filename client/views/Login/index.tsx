import React from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';
import styled from '@emotion/styled';

import { loginWithEmailMutation } from '../../graphql/mutations';

import Modal from '../../components/Modal';
import InputField from '../../components/inputs/InputField';
import Button from '../../components/buttons/Button';
import ButtonContainer from '../../components/buttons/ButtonContainer';

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

    const handleGoToRegister = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        console.log('event: ', event);
    };

    const StyledForm = styled(Form)`
        display: flex;
        flex-direction: column;
    `;

    const FormErrorMessage = styled.p`
        color: rgb(215, 55, 55);
    `

    return (
        <Modal>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    {error && <FormErrorMessage>{error.message}.</FormErrorMessage>}

                    <InputField label='Email' name='email' type='email' description='The email address you used to sign up.' />
                    <InputField label='Password' name='password' type='password' description='Keep it secret!' />

                    <ButtonContainer>
                        <Button label='Go to register' onClick={handleGoToRegister} />
                        <Button label='Login' style='submit' />
                    </ButtonContainer>
                </StyledForm>
            </Formik>
        </Modal>
    );
};

export default Login;