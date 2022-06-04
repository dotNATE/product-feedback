import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
    children: ReactNode | ReactNode[],
}

const ModalBackground = styled.div({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
});

const Modal = styled.div({
    width: '540px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3.5rem 4rem',
    backgroundColor: 'white',
    borderRadius: '10px',
});

const Login: React.FC<Props> = ({ children }) => {
    return (
        <ModalBackground>
            <Modal>
                { children }
            </Modal>
        </ModalBackground>
    );
};

export default Login;