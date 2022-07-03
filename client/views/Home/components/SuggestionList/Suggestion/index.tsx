import styled from '@emotion/styled';
import Upvote from "./components/Upvote";

import { client } from '@pages/_app';
import { useMutation } from '@apollo/client';
import addUpvote from '@graphql/mutations/upvotes/addUpvote';
import removeUpvote from '@graphql/mutations/upvotes/removeUpvote';
import { getAllSuggestionsWithUpvotesQuery } from '@graphql/queries';

import { useAppSelector } from '@store/hooks';
import { selectId } from '@store/auth';

import { Typography } from '@mui/material';

export type SuggestionType = {
    id: string;
    title: string;
    category: string;
    detail: string;
    upvotes: number;
    upvotedByUser: boolean;
};

type Props = {
    suggestion: SuggestionType;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 10px;
    padding: 1.75rem;
    align-items: flex-start;
    gap: .275rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.75rem;
    align-items: flex-start;
    gap: .275rem;
`;

const CategoryPill = styled.p`
    background-color: rgb(242, 244, 255);
    color: rgb(70, 97, 230);
    padding: 0.6875rem 1.25rem;
    border-radius: 10px;
`;

const toSentenceCase = (string: string): string => {
    let result: string = '';

    const stringArray = string.split('');
    stringArray[0] = stringArray[0].toUpperCase();
    result = stringArray.join('');

    return result;
};

const Suggestion: React.FC<Props> = ({ suggestion }) => {
    const userId = useAppSelector(selectId);

    const [addUpvoteClickHandler, { loading: loadingAdd }] = useMutation(addUpvote, {
        variables: {
            userId,
            suggestionId: suggestion.id,
        },
        onCompleted: () => {
            client.refetchQueries({ include: [getAllSuggestionsWithUpvotesQuery] });
        }
    });

    const [removeUpvoteClickHandler, { loading: loadingRemove }] = useMutation(removeUpvote, {
        variables: {
            userId,
            suggestionId: suggestion.id,
        },
        onCompleted: () => {
            client.refetchQueries({ include: [getAllSuggestionsWithUpvotesQuery] });
        }
    });

    return (
        <Container>
            <div onClick={ suggestion.upvotedByUser ? () => removeUpvoteClickHandler() : () => addUpvoteClickHandler()}>
                <Upvote count={ suggestion.upvotes } selected={ suggestion.upvotedByUser } />
            </div>
            <Content>
                <Typography variant='h3'>{ suggestion.title }</Typography>
                <Typography variant='subtitle2'>{ suggestion.detail }</Typography>
                <CategoryPill>
                    <Typography variant='body2' color='inherit'>{ toSentenceCase(suggestion.category) }</Typography>
                </CategoryPill>
            </Content>
        </Container>
    );
};

export default Suggestion;