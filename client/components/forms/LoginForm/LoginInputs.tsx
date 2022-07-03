import React from "react";

import InputContainer from "@components/inputs/InputContainer";
import InputField from "@components/inputs/InputField";

const LoginInputs: React.FC = () => {
    return (
        <InputContainer>
            <InputField label='Email' name='email' type='email' description='The email address you used to sign up.' />
            <InputField label='Password' name='password' type='password' description='Keep it secret!' />
        </InputContainer>
    );
};

export default LoginInputs;