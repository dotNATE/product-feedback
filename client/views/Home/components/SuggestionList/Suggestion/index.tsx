import styled from '@emotion/styled';
import Upvote from "./components/Upvote";

import { client } from '../../../../../pages/_app';
import { useMutation } from '@apollo/client';
import addUpvote from '../../../../../graphql/mutations/upvotes/addUpvote';
import removeUpvote from '../../../../../graphql/mutations/upvotes/removeUpvote';

import { useAppSelector } from '../../../../../store/hooks';
import { selectId } from '../../../../../store/auth';
import { getAllSuggestionsWithUpvotesQuery } from '../../../../../graphql/queries';

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

const Detail = styled.p`
    color: rgb(100, 113, 150);
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
                <h3>{ suggestion.title }</h3>
                <Detail>{ suggestion.detail }</Detail>
                <CategoryPill className='two'>{ toSentenceCase(suggestion.category) }</CategoryPill>
            </Content>
        </Container>
    );
};

export default Suggestion;