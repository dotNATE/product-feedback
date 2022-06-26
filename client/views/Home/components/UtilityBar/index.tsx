import React from 'react';
import AddSuggestionButton from './components/AddSuggestionButton';
import LightBulbIcon from './components/LightBulbIcon';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

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
        & h3 {
            height: auto;
            margin: auto 0;
        }
    `;

    const FlexRow = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return (
        <Container>
            <FlexRow>
                <LightBulbIcon />
                <Typography variant='h3' sx={{ color: 'white' }}>{ count } Suggestions</Typography>
            </FlexRow>
            <AddSuggestionButton />
        </Container>
    );
};

export default UtilityBar;