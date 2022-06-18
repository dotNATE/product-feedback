import React, { ReactNode } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { selectCreateSuggestion, addSuggestionsToState, selectSuggestions, selectSuggestionFilter, selectSuggestionSort } from '../../store/suggestion';
import { selectId } from '../../store/auth';
import { useQuery } from '@apollo/client';
import { getAllSuggestionsWithUpvotesQuery } from '../../graphql/queries';

import Layout from './components/Layout';
import UtilityBar from './components/UtilityBar';
import NoSuggestions from './components/NoSuggestions';
import SuggestionList from './components/SuggestionList';
import CreateSuggestionForm from '../../components/forms/CreateSuggestionForm';
import Modal from '../../components/Modal';
import TitleCard from './components/TitleCard';
import FilterCard from './components/FilterCard';

const Home: React.FC = ({}) => {
    const dispatch = useAppDispatch();
    const suggestions = useAppSelector(selectSuggestions);
    const userId = useAppSelector(selectId);
    const sortFunc = useAppSelector(selectSuggestionSort);
    const suggestionFilter = useAppSelector(selectSuggestionFilter);

    const { loading } = useQuery(getAllSuggestionsWithUpvotesQuery, {
        variables: {
            userId,
        },
        onCompleted: (data) => {
            dispatch(addSuggestionsToState({ suggestions: data.getAllSuggestionsWithUpvotes }));
        },
    });

    let filteredSuggestions = suggestionFilter !== 'all' ? suggestions.filter((el) => el.category === suggestionFilter) : suggestions.map(el => el);
    filteredSuggestions.sort(sortFunc);

    const createSuggestionOpen = useAppSelector(selectCreateSuggestion);

    const Suggestions: React.FC = () => {
        if (loading || !filteredSuggestions || filteredSuggestions.length < 1) return <NoSuggestions />

        return <SuggestionList suggestion={filteredSuggestions} />;
    };

    const PrimaryColumnContent: ReactNode = <>
        <UtilityBar count={suggestions.length} />
        <Suggestions />
    </>;

    const SecondaryColumnContent: ReactNode = <>
        <TitleCard title='Product Feedback' subtitle='Feedback Board' />
        <FilterCard />
    </>;

    const Form: ReactNode = createSuggestionOpen ? <Modal><CreateSuggestionForm /></Modal> : null;

    return (
        <Layout primaryColumnContent={PrimaryColumnContent} secondaryColumnContent={SecondaryColumnContent} modal={Form} />
    );
};

export default Home;