import React, { ReactNode } from 'react';

import { Dialog, Grid } from '@mui/material';

import { useAppDispatch } from '@store/hooks';
import { closeCreateSuggestion } from '@store/suggestion';

interface Props {
    primaryColumnContent: ReactNode,
    secondaryColumnContent: ReactNode,
    modal?: ReactNode,
}

const styles = {
    grid: {
        padding: '5.875rem 10.3125rem 0 10.3125rem',
    },
    dialog: {
        padding: '3.5rem 4rem',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
    },
};

const Layout: React.FC<Props> = ({ primaryColumnContent , secondaryColumnContent, modal }) => {  
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(closeCreateSuggestion())
    };

    return (
        <Grid container columns={{ xs: 4 }} spacing={{ xs: 4 }} sx={ styles.grid }>
            <Grid item xs={1} sx={ styles.column }>
                { secondaryColumnContent }
            </Grid>
            <Grid item xs={3} sx={ styles.column }>
                { primaryColumnContent }
            </Grid>
            <Dialog open={ !!modal } sx={ styles.dialog } onClose={ handleCloseModal }>
                { modal }
            </Dialog>
        </Grid>
    );
};

export default Layout;