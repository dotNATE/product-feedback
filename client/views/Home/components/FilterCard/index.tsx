import React from 'react';
import styled from '@emotion/styled';
import FilterPill from './FilterPill';

type Props = {
}

const Card = styled.div`
    border-radius: 10px;
    padding: 1.5rem;
    width: 100%;
`;

const WhiteCard = styled(Card)`
    background-color: white;
`;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: .5rem;
    width: 100%;
`;

const FilterCard: React.FC<Props> = ({  }) => {
    return (
        <WhiteCard>
            <Container>
                <FilterPill label='All' />
                <FilterPill label='Enhancement' />
                <FilterPill label='Bug' />
                <FilterPill label='Feature' />
            </Container>
        </WhiteCard>
    );
};

export default FilterCard;