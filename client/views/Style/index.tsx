import React from 'react';

import styled from '@emotion/styled';

import { Button } from '@mui/material';

import PlusIcon from '@components/icons/PlusIcon';
import ChevronUpIcon from '@components/icons/ChevronUpIcon';
import SortByDropdown from '../Home/components/UtilityBar/components/SortByWidget/SortByDropdown';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    padding: 2rem;
`

const RowContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .75rem;
    width: 100%;
    position: relative;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`;

const Style: React.FC = ({}) => {
    return (
        <Container>
            <h1>Style</h1>
            <RowContainer>
                <div>
                    <h3>Mui Buttons</h3>
                    <ButtonContainer>
                        <Button>Text</Button>
                        <Button variant='contained'>Contained</Button>
                        <Button variant='outlined'>Outlined</Button>
                    </ButtonContainer>
                </div>
            </RowContainer>
            <RowContainer>
                <div>
                    <h3>Mui Buttons - Disabled</h3>
                    <ButtonContainer>
                        <Button disabled>Text</Button>
                        <Button disabled variant='contained'>Contained</Button>
                        <Button disabled variant='outlined'>Outlined</Button>
                    </ButtonContainer>
                </div>
            </RowContainer>
            <RowContainer>
                <div>
                    <h3>Mui Buttons - Colors Contained</h3>
                    <ButtonContainer>
                        <Button color='primary' variant='contained'>Primary</Button>
                        <Button color='secondary' variant='contained'>Secondary</Button>
                        <Button color='success' variant='contained'>Success</Button>
                        <Button color='error' variant='contained'>Error</Button>
                        <Button color='warning' variant='contained'>Warning</Button>
                        <Button color='info' variant='contained'>Info</Button>
                    </ButtonContainer>
                </div>
            </RowContainer>
            <RowContainer>
                <div>
                    <h3>Mui Buttons - Colors Outlined</h3>
                    <ButtonContainer>
                        <Button color='primary' variant='outlined'>Primary</Button>
                        <Button color='secondary' variant='outlined'>Secondary</Button>
                        <Button color='success' variant='outlined'>Success</Button>
                        <Button color='error' variant='outlined'>Error</Button>
                        <Button color='warning' variant='outlined'>Warning</Button>
                        <Button color='info' variant='outlined'>Info</Button>
                    </ButtonContainer>
                </div>
            </RowContainer>
            <RowContainer>
                <div>
                    <h3>Mui Buttons - Icons</h3>
                    <ButtonContainer>
                        <Button color='primary' variant='contained' startIcon={<PlusIcon />}>Primary</Button>
                        <Button color='secondary' variant='contained' startIcon={<ChevronUpIcon />}>Secondary</Button>
                        <Button color='success' variant='contained' endIcon={<PlusIcon />}>Success</Button>
                        <Button color='error' variant='contained' endIcon={<ChevronUpIcon />}>Error</Button>
                        <Button color='warning' variant='outlined' startIcon={<ChevronUpIcon color='#ed6c02' />}>Warning</Button>
                        <Button color='info' variant='outlined' endIcon={<ChevronUpIcon color='#0288D1' />}>Info</Button>
                    </ButtonContainer>
                </div>
            </RowContainer>
            <RowContainer>
                <SortByDropdown show={true} />
            </RowContainer>
        </Container>
    );
};

export default Style;