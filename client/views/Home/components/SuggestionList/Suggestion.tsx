import styled from '@emotion/styled';

export type SuggestionType = {
    id: string;
    title: string;
    category: string;
    detail: string;
};

type Props = {
    suggestion: SuggestionType;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 1.75rem;
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
    return (
        <Container>
            <h3>{ suggestion.title }</h3>
            <Detail>{ suggestion.detail }</Detail>
            <CategoryPill className='two'>{ toSentenceCase(suggestion.category) }</CategoryPill>
        </Container>
    );
};

export default Suggestion;