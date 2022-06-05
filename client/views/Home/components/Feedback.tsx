import styled from '@emotion/styled';

export type FeedbackType = {
    id: string;
    title: string;
    category: string;
    detail: string;
};

type Props = {
    feedback: FeedbackType;
};

const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 1.75rem;
`;

const Feedback: React.FC<Props> = ({ feedback }) => {
    return (
        <Container>
            <h3>{ feedback.title }</h3>
            <p>{ feedback.detail }</p>
            <p>{ feedback.category }</p>
        </Container>
    );
};

export default Feedback;