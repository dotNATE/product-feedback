import React from 'react';
import { Field } from 'formik';

import styled from '@emotion/styled';
import { Typography } from '@mui/material';

type Props = {
    name: string;
    description?: string;
    label?: string;
    error?: string;
    type?: 'text' | 'email' | 'password' | 'select' | undefined;
    textarea?: boolean;
};

const InputField: React.FC<Props> = ({ name, description, label, error, type, textarea }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `;
    
    const StyledField = styled(Field)`
        background-color: rgb(247, 248, 253);
        border: 1px solid ${error ? 'rgb(215, 55, 55)' : 'transparent'};
        border-radius: 5px;
        padding: 1rem 1.25rem;
        margin-top: .5rem;
        max-width: 100%;
        &:focus-visible {
            outline: none;
            border-color: ${error ? 'rgb(215, 55, 55)' : 'rgb(70, 97, 230)'};
        }
    `;
    
    const ErrorMessage = styled.p`
        color: rgb(215, 55, 55);
        font-size: 14px;
        margin-top: .25rem;
    `;

    return (
        <Container>
            {label && 
                <label htmlFor={name}>
                    <Typography variant='h4'>{ label }</Typography>
                </label>
            }
            {description && <Typography variant='subtitle2'>{ description }</Typography>}
            <StyledField
                id={name} 
                name={name} 
                type={type}
                as={ textarea ? 'textarea' : null }
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};
export default InputField;