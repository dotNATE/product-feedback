import React from 'react';
import { useMutation } from '@apollo/client';
import { createSuggestionsMutation } from '../../../graphql/mutations';

import { useAppDispatch } from '../../../store/hooks';
import { closeCreateSuggestion } from '../../../store/suggestion';
import { client } from '../../../pages/_app';

import ModalForm from '../FormWrapper';
import CreateSuggestionButtons from './CreateSuggestionButtons';
import CreateSuggestionInputs from './CreateSuggestionInputs';
import getAllSuggestions from '../../../graphql/queries/suggestions/getAllSuggestions';

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

const CreateSuggestionForm: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const [createSuggestion, { error }] = useMutation(createSuggestionsMutation, {
        onCompleted: (data): void => {
            client.refetchQueries({ include: [getAllSuggestions] });
            dispatch(closeCreateSuggestion());
        },
        onError: (err) => {
            console.error(err);
        },
    });
    
    const handleSubmit = (values: Values): void => {
        createSuggestion({
            variables: values,
        });
    };

    return (
        <ModalForm name="Create Suggestion" initialValues={initialValues} handleSubmit={handleSubmit} inputs={<CreateSuggestionInputs />} buttons={<CreateSuggestionButtons />} />
    );
};

export default CreateSuggestionForm;