import React from 'react';
import styled from '@emotion/styled';
import AddSuggestionButton from './components/AddSuggestionButton';
import LightBulbIcon from './components/LightBulbIcon';
import ChevronDownIcon from '../../../../components/icons/ChevronDownIcon';

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
    `;

    const StyledH3 = styled.h3`
        color: white;
        height: auto;
        margin: auto 0;
    `;

    const FilterContainer = styled.div`
        display: flex;
        flex-direction: flex-row;
        gap: 0.375rem;
        padding-left: 1.5rem;
        cursor: pointer;
    `;

    const LightH4 = styled.h4`
        color: white;
        height: auto;
        margin: auto 0;
        font-weight: 400;
        color: rgba(242, 244, 254, 0.8);
    `;

    const BoldH4 = styled.h4`
        color: white;
        height: auto;
        margin: auto 0;
        font-weight: 600;
        color: rgb(242, 244, 254);
    `;

    return (
        <Container>
            <FlexRow>
                <LightBulbIcon />
                <StyledH3>{ count } Suggestions</StyledH3>
                <FilterContainer>
                    <LightH4>Sort by :</LightH4>
                    <BoldH4>Most Upvotes</BoldH4>
                    <ChevronDownIcon color='white' />
                </FilterContainer>
            </FlexRow>
            <AddSuggestionButton />
        </Container>
    );
};

export default UtilityBar;