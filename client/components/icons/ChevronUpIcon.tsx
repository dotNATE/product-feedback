import styled from '@emotion/styled';

type Props = {
    color?: string;
};

const ChevronUpIcon: React.FC<Props> = ({ color }) => {
    const Container = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
    `;

    return (
        <Container>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke={color || 'white'} strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        </Container>
    );
};

export default ChevronUpIcon;