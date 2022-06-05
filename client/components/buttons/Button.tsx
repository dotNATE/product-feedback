import React, { ReactNode } from 'react';
import styled, { StyledComponent } from '@emotion/styled';

type Props = {
    label: string,
    style?: 'submit' | 'cancel' | 'warning' | undefined,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    icon?: ReactNode,
};

const Button: React.FC<Props> = ({ label, style, type, onClick, icon }) => {
    const BaseButton = styled.button`
        display: flex;
        background-color: rgb(58, 67, 116);
        border-radius: 10px;
        border: none;
        padding: .75rem 2rem;
        gap: .5rem;
        &:hover {
            background-color: rgb(101, 110, 163);
            cursor: pointer;
        }
    `;

    const SubmitButton = styled(BaseButton)`
        background-color: rgb(173, 31, 234);
        &:hover {
            background-color: rgb(199, 90, 246);
        }
    `;

    const WarningButton = styled(BaseButton)`
        background-color: rgb(215, 55, 55);
        &:hover {
            background-color: rgb(233, 136, 136);
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
                { icon }
                <Label>{ label }</Label>
        </RenderButton>
    );
};

export default Button;