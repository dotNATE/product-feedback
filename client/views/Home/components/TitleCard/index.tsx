import React from 'react';
import styled from '@emotion/styled';

import { Typography } from '@mui/material';

type Props = {
    title: string,
    subtitle: string,
}

const TitleCard: React.FC<Props> = ({ title, subtitle }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.5rem;
        border-radius: 10px;
        background: url(/images/desktop/background-header.png) top center / cover no-repeat;
        padding: 4rem 1.5rem 2rem 1.5rem;
    `;

    return (
        <Container>
            <Typography variant='h2' sx={{ color: 'white' }}>{ title }</Typography>
            <Typography variant='h4' sx={{ color: 'rgb(255, 255, 255, .75)' }}>{ subtitle }</Typography>
        </Container>
    );
};

export default TitleCard;