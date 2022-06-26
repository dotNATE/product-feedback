import React from 'react';
import AddSuggestionButton from './components/AddSuggestionButton';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { selectSuggestionSortLabel, setSuggestionSort } from '../../../../store/suggestion';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import LightBulbIcon from './components/LightBulbIcon';
import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';
import { SuggestionType } from '../SuggestionList/Suggestion';

type Props = {
    count: number;
};

const UtilityBar: React.FC<Props> = ({ count }) => {
    const dispatch = useAppDispatch();
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
        const handleClick: React.MouseEventHandler<HTMLSpanElement> = () => {
            const leastUpvotes = setSuggestionSort({
                sort: (a: SuggestionType, b: SuggestionType) => a.upvotes - b.upvotes,
                label: "Least Upvotes",
            });

            const mostUpvotes = setSuggestionSort({
                sort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
                label: "Most Upvotes",
            });

            let action = leastUpvotes;
            if (sortLabel === "Least Upvotes") action = mostUpvotes;

            dispatch(action);
        };

        const FlexRow2 = styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5rem;
        `; 

        return (
            <FlexRow2>
                <Typography variant='subtitle2' sx={{ color: 'white' }}>Sort by :</Typography>
                <FlexRow2 onClick={ handleClick }>
                    <Typography variant='subtitle2' sx={{ color: 'white', fontWeight: '600' }}>{ sortLabel }</Typography>
                    <ChevronDownIcon color='white' />
                </FlexRow2>
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