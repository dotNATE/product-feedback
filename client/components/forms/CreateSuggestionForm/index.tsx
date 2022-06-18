import React from 'react';
import { useMutation } from '@apollo/client';
import { createSuggestionsMutation } from '../../../graphql/mutations';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { closeCreateSuggestion } from '../../../store/suggestion';
import { client } from '../../../pages/_app';

import ModalForm from '../FormWrapper';
import CreateSuggestionButtons from './CreateSuggestionButtons';
import CreateSuggestionInputs from './CreateSuggestionInputs';
import getAllSuggestionsWithUpvotes from '../../../graphql/queries/suggestions/getAllSuggestionsWithUpvotes';
import { selectId } from '../../../store/auth';

interface Values {
    title: string;
    category: string;
    detail: string;
    createdBy: string;
};

const CreateSuggestionForm: React.FC = ({}) => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(selectId);

    const [createSuggestion, { error }] = useMutation(createSuggestionsMutation, {
        onCompleted: (data): void => {
            client.refetchQueries({ include: [getAllSuggestionsWithUpvotes] });
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

    const initialValues: Values = {
        title: '',
        category: '',
        detail: '',
        createdBy: userId,
    };

    return (
        <ModalForm name="Create Suggestion" initialValues={initialValues} handleSubmit={handleSubmit} inputs={<CreateSuggestionInputs />} buttons={<CreateSuggestionButtons />} />
    );
};

export default CreateSuggestionForm;