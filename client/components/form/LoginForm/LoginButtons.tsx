import { useRouter } from "next/router";

import ButtonContainer from "../../buttons/ButtonContainer";
import Button from "../../buttons/Button";

const LoginButtons: React.FC = ({}) => {
    const router = useRouter();

    const handleGoToRegister = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        router.push('/register');
    };

    return (
        <ButtonContainer>
            <Button label='Go to register' onClick={handleGoToRegister} />
            <Button label='Login' style='submit' type="submit" />
        </ButtonContainer>
    );
};

export default LoginButtons;