import React from 'react';
import styled from '@emotion/styled';
import BaseButton from '../../../components/buttons/Button';

const UtilityBar: React.FC = ({}) => {
    const Container = styled.div`
        display: flex;
        height: 4.5rem;
        border-radius: 10px;
        background-color: rgb(55, 63, 104);
        padding: 0.875rem;
    `;

    const Button = styled(BaseButton)`
        align-self: flex-end;
    `;

    return (
        <Container>
            <Button label='Add Feedback' />
            <Button label='Add Color' style='submit' />
        </Container>
    );
};

export default UtilityBar;