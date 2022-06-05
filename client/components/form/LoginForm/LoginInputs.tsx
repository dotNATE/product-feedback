import React from "react";

import InputContainer from "../../inputs/InputContainer";
import InputField from "../../inputs/InputField";

const LoginInputs: React.FC = () => {
    return (
        <InputContainer>
            <InputField label='Email' name='email' type='email' description='The email address you used to sign up.' />
            <InputField label='Password' name='password' type='password' description='Keep it secret!' />
        </InputContainer>
    );
};

export default LoginInputs;