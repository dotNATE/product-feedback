import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { selectSuggestionFilter, setSuggestionFilter } from '../../../../store/suggestion';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';

type Props = {
    label: string,
};

const FilterPill: React.FC<Props> = ({ label }) => {
    const dispatch = useAppDispatch();
    const suggestionFilter = useAppSelector(selectSuggestionFilter);
    const selected = label.toLowerCase() === suggestionFilter;

    const Wrapper = styled.div`
        background-color: ${ selected ? 'rgb(70, 97, 230)' : 'rgb(242, 244, 255)' };
        color: ${ selected ? 'white' : 'rgb(70, 97, 230)'};
        padding: 0.6875rem 1.25rem;
        border-radius: 10px;
        user-select: none;
        cursor: ${ selected ? '' : 'pointer'};
        ${
            selected ? '' : `&:hover {
                background-color: rgb(207, 215, 255);
            }`
        }
    `;

    const handleClick: React.MouseEventHandler<HTMLDivElement> = (): void => {
        dispatch(setSuggestionFilter({
            suggestionFilter: label.toLowerCase()
        }));
    };

    return (
        <Wrapper className='two' onClick={handleClick}>
            <Typography variant='body2' color='inherit'>{ label }</Typography>
        </Wrapper>
    );
};

export default FilterPill;