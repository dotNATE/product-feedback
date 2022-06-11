import React from 'react';
import styled from '@emotion/styled';

type Props = {
    label: string,
    selected: boolean,
};

const FilterPill: React.FC<Props> = ({ label, selected }) => {
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

    return (
        <StyledP className='two'>{ label }</StyledP>
    );
};

export default FilterPill;