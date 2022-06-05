import React, { ReactNode } from 'react';

import { useAppSelector } from '../../store/hooks';
import { selectFeedback, selectCreateFeedback } from '../../store/feedback';

import Layout from './components/Layout';
import UtilityBar from './components/UtilityBar';
import NoFeedback from './components/NoFeedback';
import CreateFeedbackForm from './components/CreateFeedbackForm';

const Home: React.FC = ({}) => {
    const feedback = useAppSelector(selectFeedback);
    const createFeedbackOpen = useAppSelector(selectCreateFeedback);

    const Feedback: React.FC = () => {
        return feedback.length > 0 ? <div></div> : <NoFeedback />;
    };

    const PrimaryColumnContent: ReactNode = <>
        <UtilityBar />
        <Feedback />
    </>;

    const SecondaryColumnContent: ReactNode = <div></div>;

    const Modal: ReactNode = createFeedbackOpen ? <CreateFeedbackForm /> : null;

    return (
        <Layout primaryColumnContent={PrimaryColumnContent} secondaryColumnContent={SecondaryColumnContent} modal={Modal} />
    );
};

export default Home;