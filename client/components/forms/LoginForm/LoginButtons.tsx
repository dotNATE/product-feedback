import { useRouter } from "next/router";

import { Button } from '@mui/material';
import ButtonContainer from "../../buttons/ButtonContainer";

const LoginButtons: React.FC = ({}) => {
    const router = useRouter();

    const handleGoToRegister = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        router.push('/register');
    };

    return (
        <ButtonContainer>
            <Button variant="contained" color="secondary" onClick={handleGoToRegister}>Go to register</Button>
            <Button variant="contained" color="primary" type="submit">Login</Button>
        </ButtonContainer>
    );
};

export default LoginButtons;