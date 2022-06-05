import Suggestion from './Suggestion';
import type { SuggestionType } from './Suggestion';

type Props = {
    suggestion: SuggestionType[];
};

const SuggestionList: React.FC<Props> = ({ suggestion }) => {
    return (
        <>
            {
                suggestion && suggestion.map((el) => {
                    return <Suggestion key={ el.id } suggestion={el} />
                })
            }
        </>
    );
};

export default SuggestionList;