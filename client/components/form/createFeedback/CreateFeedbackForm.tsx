import React from 'react';
import { useMutation } from '@apollo/client';

import { createFeedbackMutation } from '../../../graphql/mutations';

import ModalForm from '../FormWrapper';
import CreateFeedbackButtons from './CreateFeedbackButtons';
import CreateFeedbackInputs from './CreateFeedbackInputs';

interface Values {
    title: string;
    category: string;
    detail: string;
};

const initialValues: Values = {
    title: '',
    category: '',
    detail: '',
};

const Login: React.FC = ({}) => {
    const [createFeedback, { error }] = useMutation(createFeedbackMutation, {
        onCompleted: (data): void => {
        },
        onError: (err) => {
            console.error(err);
        },
    });
    
    const handleSubmit = (values: Values): void => {
        createFeedback({
            variables: values,
        });
    };

    return (
        <ModalForm name="Create Feedback" initialValues={initialValues} handleSubmit={handleSubmit} inputs={<CreateFeedbackInputs />} buttons={<CreateFeedbackButtons />} />
    );
};

export default Login;