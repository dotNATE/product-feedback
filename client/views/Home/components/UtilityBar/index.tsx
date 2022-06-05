import React from 'react';
import styled from '@emotion/styled';
import AddFeedbackButton from './components/AddFeedbackButton';

type Props = {
    count: number;
};

const UtilityBar: React.FC<Props> = ({ count }) => {
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        height: 4.5rem;
        border-radius: 10px;
        background-color: rgb(55, 63, 104);
        padding: 0.875rem;
    `;

    const StyledH3 = styled.h3`
        color: white;
        height: auto;
        margin: auto 0;
    `;

    return (
        <Container>
            <StyledH3>{ count } Suggestions</StyledH3>
            <AddFeedbackButton />
        </Container>
    );
};

export default UtilityBar;