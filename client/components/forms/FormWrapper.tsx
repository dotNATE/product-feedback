import React, { ReactNode } from 'react';
import { Formik, Form } from 'formik';

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
                <h1>{ name }</h1>
                <Form>
                    { inputs }

                    { buttons }
                </Form>
            </>
        </Formik>
    );
};

export default ModalForm;