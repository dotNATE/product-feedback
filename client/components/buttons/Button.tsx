import React from 'react';
import styled, { StyledComponent } from '@emotion/styled';

type ButtonProps = {
    label: string,
    style?: 'submit' | 'cancel' | 'warning' | undefined,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
};

const BaseButton: React.FC<ButtonProps> = ({ label, style, type, onClick }) => {
    const BaseButton = styled.button`
        background-color: rgb(58, 67, 116);
        border-radius: 10px;
        border: none;
        padding: .75rem 2rem;
        margin-left: 1rem;
        &:hover {
            background-color: rgb(101, 110, 163);
            cursor: pointer;
        }
    `;

    const SubmitButton = styled.button`
        background-color: rgb(173, 31, 234);
        border-radius: 10px;
        border: none;
        padding: .75rem 2rem;
        margin-left: 1rem;
        &:hover {
            background-color: rgb(199, 90, 246);
            cursor: pointer;
        }
    `;

    const WarningButton = styled.button`
    background-color: rgb(215, 55, 55);
    border-radius: 10px;
    border: none;
    padding: .75rem 2rem;
    margin-left: 1rem;
    &:hover {
        background-color: rgb(233, 136, 136);
        cursor: pointer;
    }
    `;

    const Label = styled.h4`
        color: rgb(242, 244, 255);
    `;

    const getButtonStyle = (): StyledComponent<{}, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}> => {
        switch (style) {
            case 'submit':
                return SubmitButton;
            case 'warning':
                return WarningButton;
            default:
                return BaseButton;
        };
    };

    const RenderButton = getButtonStyle();

    return (
        <RenderButton
            type={type}
            onClick={onClick}
        >
            <Label>{ label }</Label>
        </RenderButton>
    );
};

export default BaseButton;