import React from 'react';
import styled from '@emotion/styled';
import AddFeedbackButton from '../components/AddFeedbackButton';

const UtilityBar: React.FC = ({}) => {
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        height: 4.5rem;
        border-radius: 10px;
        background-color: rgb(55, 63, 104);
        padding: 0.875rem;
    `;

    return (
        <Container>
            <div></div>
            <AddFeedbackButton />
        </Container>
    );
};

export default UtilityBar;