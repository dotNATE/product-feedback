import React from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';

import Modal from '../Modal';
import InputField from '../inputs/InputField';
import Button from '../buttons/Button';
import ButtonContainer from '../buttons/ButtonContainer';

type Props = {
    name: string;
    initialValues: any;
    handleSubmit: (values: any) => void;
};

const ModalForm: React.FC<Props> = ({ name, initialValues, handleSubmit }) => {
    const InputContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
        margin-bottom: 3rem;
    `;

    return (
        <Modal>
            <h1>{ name }</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <InputContainer>
                        <InputField label='Feedback Title' name='title' type='text' description='Add a short, descriptive headline.' />
                    </InputContainer>

                    <ButtonContainer>
                        <Button label='Cancel' />
                        <Button label='Add Feedback' style='submit' />
                    </ButtonContainer>
                </Form>
            </Formik>
        </Modal>
    );
};

export default ModalForm;