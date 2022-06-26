import React, { ReactNode } from 'react';
import { Formik, Form } from 'formik';

import { Typography } from '@mui/material';

type Props = {
    name: string;
    initialValues: any;
    handleSubmit: (values: any) => void;
    inputs: ReactNode;
    buttons: ReactNode;
};

const ModalForm: React.FC<Props> = ({ name, initialValues, handleSubmit, inputs, buttons }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <>
                <Typography variant='h1'>{ name }</Typography>
                <Form>
                    { inputs }
                    { buttons }
                </Form>
            </>
        </Formik>
    );
};

export default ModalForm;