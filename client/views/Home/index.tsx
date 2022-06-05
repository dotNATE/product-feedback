import React, { ReactNode } from 'react';
import Layout from './components/Layout';
import UtilityBar from './components/UtilityBar';

const Home: React.FC = ({}) => {
    const PrimaryColumnContent: ReactNode = <UtilityBar />;

    const SecondaryColumnContent: ReactNode = <div></div>;

    return (
        <Layout primaryColumnContent={PrimaryColumnContent} secondaryColumnContent={SecondaryColumnContent} />
    );
};

export default Home;