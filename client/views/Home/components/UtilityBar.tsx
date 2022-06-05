import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '../../../components/buttons/Button';
import PlusIcon from './PlusIcon';

const UtilityBar: React.FC = ({}) => {
    const Container = styled.div`
        display: flex;
        justify-content: space-between;
        height: 4.5rem;
        border-radius: 10px;
        background-color: rgb(55, 63, 104);
        padding: 0.875rem;
    `;

    return (
        <Container>
            <div></div>
            <BaseButton label='Add Feedback' style='submit' icon={<PlusIcon />} />
        </Container>
    );
};

export default UtilityBar;