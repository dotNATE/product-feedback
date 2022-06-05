import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../store/hooks';
import { selectAuthenticated } from '../../store/auth';


import Modal from '../../components/Modal';

import LoginForm from '../../components/forms/LoginForm';

const Login: React.FC = ({}) => {
    const router = useRouter();
    const authenticated = useAppSelector(selectAuthenticated);

    if (authenticated) router.push('/');

    return (
        <Modal>
            <LoginForm />
        </Modal>
    );
};

export default Login;