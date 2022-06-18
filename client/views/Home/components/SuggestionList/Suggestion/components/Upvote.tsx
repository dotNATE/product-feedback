import styled from '@emotion/styled';
import ChevronUpIcon from '../../../../../../components/icons/ChevronUpIcon';

type Props = {
    count: number;
    selected: boolean;
};

const Suggestion: React.FC<Props> = ({ count, selected }) => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        gap: .5rem;
        background-color: ${ selected ? 'rgb(70, 97, 230)' : 'rgb(242, 244, 255)' };
        padding: 1rem 1.25rem 0.75rem 1.25rem;
        border-radius: 10px;
        text-align: center;
        &:hover {
            cursor: pointer;
            background-color: ${ selected ? 'rgb(70, 97, 230)' : 'rgb(207, 215, 255)' };
        }
        & p {
            color: ${ selected ? 'white' : null };
        }
    `;

    return (
        <Container>
            <ChevronUpIcon color={ selected ? 'white' : 'rgb(70, 97, 230)' } />
            <p className='two'>{ count }</p>
        </Container>
    );
};

export default Suggestion;