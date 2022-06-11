import React from 'react';
import styled from '@emotion/styled';

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

    const WhiteH2 = styled.h2`
        color: white;
    `;

    const GreyH4 = styled.h4`
        color: rgb(255, 255, 255, .75);
    `;
    return (
        <Container>
            <WhiteH2>{ title }</WhiteH2>
            <GreyH4>{ subtitle }</GreyH4>
        </Container>
    );
};

export default TitleCard;