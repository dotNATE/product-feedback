import React from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { useAppDispatch } from '../../../store/hooks';

import { createFeedbackMutation } from '../../../graphql/mutations';

import Modal from '../../../components/Modal';
import InputField from '../../../components/inputs/InputField';
import Button from '../../../components/buttons/Button';
import ButtonContainer from '../../../components/buttons/ButtonContainer';
import FormErrorMessage from '../../../components/form/FormErrorMessage';

interface Values {
    content: string;
    category: string;
    detail: string;
};

const initialValues: Values = {
    content: '',
    category: '',
    detail: '',
};

const Login: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const [createFeedback, { error }] = useMutation(createFeedbackMutation, {
        onCompleted: (data): void => {
        },
        onError: (err) => {
            console.error(err);
        },
    });
    
    const handleSubmit = (values: Values): void => {
    };

    const InputContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
    `;

    return (
        <Modal>
            <h1>Create Feedback</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    { error && <FormErrorMessage message={error.message} />}

                    <InputContainer>
                        <InputField label='Feedback Title' name='title' type='text' description='Add a short, descriptive headline.' />
                    </InputContainer>

                    <ButtonContainer>
                        <Button label='Cancel' />
                        <Button label='Add Feedback' style='submit' />
                    </ButtonContainer>
                </Form>
            </Formik>
        </Modal>
    );
};

export default Login;