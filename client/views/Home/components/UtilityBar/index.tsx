import React, { useState } from 'react';
import AddSuggestionButton from './components/AddSuggestionButton';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { selectSuggestionSortLabel, setSuggestionSort } from '../../../../store/suggestion';

import { Typography, ButtonGroup, Button, Collapse, ClickAwayListener } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

import LightBulbIcon from './components/LightBulbIcon';
import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';
import CheckIcon from '../../../../components/icons/Check';
import { SuggestionType } from '../SuggestionList/Suggestion';

type Props = {
    count: number;
};

type DropdownProps = {
    show: boolean,
};

export const Dropdown: React.FC<DropdownProps> = ({ show }) => {
    const dispatch = useAppDispatch();
    const sortLabel = useAppSelector(selectSuggestionSortLabel);
    const theme = useTheme();

    console.log('theme: ', theme);
    console.log('theme.palette.primary.main: ', theme.palette.primary.main);

    const leastUpvotes = setSuggestionSort({
        sort: (a: SuggestionType, b: SuggestionType) => a.upvotes - b.upvotes,
        label: "Least Upvotes",
    });

    const mostUpvotes = setSuggestionSort({
        sort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
        label: "Most Upvotes",
    });

    const actions = [
        mostUpvotes,
        leastUpvotes,
    ];

    const handleClick: React.MouseEventHandler<HTMLSpanElement> = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // @ts-ignore 
        const selectedFilter: string = e.target.innerText;

        const action = actions.find(el => el.payload.label === selectedFilter);
        if (!action) {
            return;
        }

        dispatch(action);
    };

    const buttonStyles = {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
            '& p': {
                color: theme.palette.primary.main,
            },
        },
    };

    return (
        <Collapse in={show} sx={{ position: 'absolute', top: '2.325rem', left: '4rem' }}>
            <ButtonGroup orientation='vertical'>
                {
                    actions.map((action, index) => {
                        const { label } = action.payload
                        const selected = label === sortLabel;

                        return (
                            <Button variant='outlined' endIcon={ selected ? <CheckIcon /> : null } onClick={ handleClick } key={ `sort_button_${index}` } sx={buttonStyles}>
                                <Typography variant='body1' sx={{ whiteSpace: 'nowrap' }}>{ label }</Typography>
                            </Button>
                        );
                    })
                }
            </ButtonGroup>
        </Collapse>
    );
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
                <Dropdown show={selectSortOpen} />
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