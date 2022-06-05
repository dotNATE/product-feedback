import React, { ReactNode, useState } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectCreateFeedback } from '../../store/feedback';
import { useQuery } from '@apollo/client';
import { getAllFeedbackQuery } from '../../graphql/queries';

import Layout from './components/Layout';
import UtilityBar from './components/UtilityBar';
import NoFeedback from './components/NoFeedback';
import FeedbackList from './components/FeedbackList';
import CreateFeedbackForm from '../../components/form/createFeedback/CreateFeedbackForm';
import Modal from '../../components/Modal';

const Home: React.FC = ({}) => {
    const [feedback, setFeedback] = useState([]);

    const { loading } = useQuery(getAllFeedbackQuery, {
        onCompleted: (data) => {
            setFeedback(data.getAllFeedback);
        },
    });

    const createFeedbackOpen = useAppSelector(selectCreateFeedback);

    const Feedback: React.FC = () => {
        return feedback && feedback.length > 0 ? <FeedbackList feedback={feedback} /> : <NoFeedback />;
    };

    const PrimaryColumnContent: ReactNode = <>
        <UtilityBar />
        <Feedback />
    </>;
    const SecondaryColumnContent: ReactNode = <div></div>;
    const Form: ReactNode = createFeedbackOpen ? <Modal><CreateFeedbackForm /></Modal> : null;

    return (
        <Layout primaryColumnContent={PrimaryColumnContent} secondaryColumnContent={SecondaryColumnContent} modal={Form} />
    );
};

export default Home;