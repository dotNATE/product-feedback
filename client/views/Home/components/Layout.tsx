import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
    primaryColumnContent: ReactNode,
    secondaryColumnContent: ReactNode,
    modal?: ReactNode,
}

const Layout: React.FC<Props> = ({ primaryColumnContent , secondaryColumnContent, modal }) => {
    const SecondaryColumn = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
    `;

    const PrimaryColumn = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        grid-column: 2 / span 3;
    `;

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 2rem;
        padding: 5.875rem 10.3125rem 0 10.3125rem;
    `;

    return (
        <Grid>
            <SecondaryColumn>
                { secondaryColumnContent }
            </SecondaryColumn>
            <PrimaryColumn>
                { primaryColumnContent }
            </PrimaryColumn>
            { modal }
        </Grid>
    );
};

export default Layout;