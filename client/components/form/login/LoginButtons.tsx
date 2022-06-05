import React from "react";

import ButtonContainer from "../../buttons/ButtonContainer";
import Button from "../../buttons/Button";

type Props = {
    handleGoToRegister?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const LoginButtons: React.FC<Props> = ({ handleGoToRegister }) => {
    return (
        <ButtonContainer>
            <Button label='Go to register' onClick={handleGoToRegister} />
            <Button label='Login' style='submit' />
        </ButtonContainer>
    );
};

export default LoginButtons;