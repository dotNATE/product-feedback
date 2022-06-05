import styled from '@emotion/styled';

const PlusIcon: React.FC = () => {
    const Container = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
    `;

    return (
        <Container>
            <svg width="9" height="9" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fill-rule="evenodd" font-family="Jost-Bold, Jost" font-size="14" font-weight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
        </Container>
    );
};

export default PlusIcon;