import styled from '@emotion/styled';

const CheckIcon: React.FC = () => {
    const Container = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
    `;

    return (
        <Container>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11"><path fill="none" stroke="#AD1FEA" strokeWidth="2" d="M1 5.233L4.522 9 12 1"/></svg>
        </Container>
    );
};

export default CheckIcon;