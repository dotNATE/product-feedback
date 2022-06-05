import styled from '@emotion/styled';

const FormErrorStyle = styled.p`
    color: rgb(215, 55, 55);
`;

type Props = {
    message: string;
}

const FormErrorMessage: React.FC<Props> = ({ message }) => {
    return (
        <FormErrorStyle>{ message }</FormErrorStyle>
    );
};

export default FormErrorMessage;