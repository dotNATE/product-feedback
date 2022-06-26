import styled from '@emotion/styled';

import NoSuggestionsIcon from './NoSuggestionsIcon';
import AddSuggestionButton from '../UtilityBar/components/AddSuggestionButton';

import { Typography } from '@mui/material';

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

    const TypographyContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 50%;
        text-align: center;
    `;

    return (
        <Container>
            <NoSuggestionsIcon />
                <TypographyContainer>
                    <Typography variant="h1">There are no suggestions yet.</Typography>
                    <Typography variant="body1">Got some feedback? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</Typography>
                </TypographyContainer>
            <AddSuggestionButton />
        </Container>
    );
};

export default NoSuggestion;