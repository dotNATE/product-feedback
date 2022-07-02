import React, { useState } from 'react';
import AddSuggestionButton from './components/AddSuggestionButton';

import { useAppSelector } from '../../../../store/hooks';
import { selectSuggestionSortLabel } from '../../../../store/suggestion';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import SortByDropdown from './components/SortByDropdown';
import LightBulbIcon from './components/LightBulbIcon';
import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';

type Props = {
    count: number;
};

const UtilityBar: React.FC<Props> = ({ count }) => {
    const sortLabel = useAppSelector(selectSuggestionSortLabel);

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

    const SortByWidget: React.FC = () => {
        const [selectSortOpen, setSelectSortOpen] = useState(false);

        const FlexRow2 = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
            position: relative;
        `;

        const FlexRow3 = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
            cursor: pointer;
        `;

        return (
            <FlexRow2>
                <Typography variant='subtitle2' sx={{ color: 'white' }}>Sort by :</Typography>
                <FlexRow3 onClick={() => setSelectSortOpen(true)}>
                    <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: '600' }}>{ sortLabel }</Typography>
                    <ChevronDownIcon color='white' />
                </FlexRow3>
                <SortByDropdown show={selectSortOpen} />
            </FlexRow2>
        );
    };

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