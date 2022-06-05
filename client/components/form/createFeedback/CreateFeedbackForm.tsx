import React from 'react';
import { useMutation } from '@apollo/client';
import { useAppDispatch } from '../../../store/hooks';
import { closeCreateFeedback } from '../../../store/feedback';
import { client } from '../../../pages/_app';

import { createFeedbackMutation } from '../../../graphql/mutations';

import ModalForm from '../FormWrapper';
import CreateFeedbackButtons from './CreateFeedbackButtons';
import CreateFeedbackInputs from './CreateFeedbackInputs';
import getAllFeedback from '../../../graphql/queries/feedback/getAllFeedback';

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

const CreateFeedbackForm: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const [createFeedback, { error }] = useMutation(createFeedbackMutation, {
        onCompleted: (data): void => {
            client.refetchQueries({include: [getAllFeedback]});
            dispatch(closeCreateFeedback());
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

export default CreateFeedbackForm;