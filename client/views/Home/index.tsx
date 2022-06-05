import React, { ReactNode, useState } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectCreateSuggestion } from '../../store/suggestion';
import { useQuery } from '@apollo/client';
import { getAllSuggestionsQuery } from '../../graphql/queries';

import Layout from './components/Layout';
import UtilityBar from './components/UtilityBar';
import NoSuggestions from './components/NoSuggestions';
import SuggestionList from './components/SuggestionList';
import CreateSuggestionForm from '../../components/form/CreateSuggestionForm';
import Modal from '../../components/Modal';

const Home: React.FC = ({}) => {
    const [suggestions, setSuggestions] = useState([]);

    const { loading } = useQuery(getAllSuggestionsQuery, {
        onCompleted: (data) => {
            setSuggestions(data.getAllSuggestions);
        },
    });

    const createSuggestionOpen = useAppSelector(selectCreateSuggestion);

    const Suggestions: React.FC = () => {
        return suggestions && suggestions.length > 0 ? <SuggestionList suggestion={suggestions} /> : <NoSuggestions />;
    };

    const PrimaryColumnContent: ReactNode = <>
        <UtilityBar count={suggestions.length} />
        <Suggestions />
    </>;
    const SecondaryColumnContent: ReactNode = <div></div>;
    const Form: ReactNode = createSuggestionOpen ? <Modal><CreateSuggestionForm /></Modal> : null;

    return (
        <Layout primaryColumnContent={PrimaryColumnContent} secondaryColumnContent={SecondaryColumnContent} modal={Form} />
    );
};

export default Home;