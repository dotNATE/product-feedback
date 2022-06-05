import styled from '@emotion/styled';

import NoFeedbackIcon from './NoFeedbackIcon';
import AddFeedbackButton from '../UtilityBar/components/AddFeedbackButton';

const NoFeedback: React.FC = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 37.5rem;
        background-color: white;
        border-radius: 10px;
    `;

    const Typography = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 50%;
        text-align: center;
    `;

    return (
        <Container>
            <NoFeedbackIcon />
            <Typography>
                <h1>There is no feedback yet.</h1>
                <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            </Typography>
            <AddFeedbackButton />
        </Container>
    );
};

export default NoFeedback;