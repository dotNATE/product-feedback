import styled from '@emotion/styled';

import NoSuggestionsIcon from './NoSuggestionsIcon';
import AddSuggestionButton from '../UtilityBar/components/AddSuggestionButton';

const NoSuggestion: React.FC = () => {
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
            <NoSuggestionsIcon />
            <Typography>
                <h1>There is no suggestion yet.</h1>
                <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            </Typography>
            <AddSuggestionButton />
        </Container>
    );
};

export default NoSuggestion;