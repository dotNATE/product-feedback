import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { selectSuggestionFilter, setSuggestionFilter } from '../../../../store/suggestion';

type Props = {
    label: string,
};

const FilterPill: React.FC<Props> = ({ label }) => {
    const dispatch = useAppDispatch();
    const suggestionFilter = useAppSelector(selectSuggestionFilter);
    const selected = label.toLowerCase() === suggestionFilter;

    const StyledP = styled.p`
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

    const handleClick = (): void => {
        dispatch(setSuggestionFilter({
            suggestionFilter: label.toLowerCase()
        }));
    };

    return (
        <StyledP className='two' onClick={handleClick}>{ label }</StyledP>
    );
};

export default FilterPill;