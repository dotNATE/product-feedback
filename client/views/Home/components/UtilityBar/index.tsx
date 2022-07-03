import React from 'react';
import AddSuggestionButton from './components/AddSuggestionButton';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import SortByWidget from './components/SortByWidget';
import LightBulbIcon from './components/LightBulbIcon';

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

    const FlexRow = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    `;

    return (
        <Container>
            <FlexRow>
                <div></div>
                <LightBulbIcon />
                <Typography variant='h3' sx={{ color: 'white' }}>{ count } Suggestions</Typography>
                <SortByWidget />
            </FlexRow>
            <AddSuggestionButton />
        </Container>
    );
};

export default UtilityBar;