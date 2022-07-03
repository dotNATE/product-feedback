import { setSuggestionSort } from '../../../../../../store/suggestion';

import { SuggestionType } from '../../../SuggestionList/Suggestion';
import Dropdown from '../../../../../../components/Dropdown';

interface Props {
    show: boolean,
};

const leastUpvotes = setSuggestionSort({
    sort: (a: SuggestionType, b: SuggestionType) => a.upvotes - b.upvotes,
    label: "Least Upvotes",
});

const mostUpvotes = setSuggestionSort({
    sort: (a: SuggestionType, b: SuggestionType) => b.upvotes - a.upvotes,
    label: "Most Upvotes",
});

const actions = [
    mostUpvotes,
    leastUpvotes,
];

const SortByDropdown: React.FC<Props> = ({ show }) => <Dropdown show={show} actions={actions} />;

export default SortByDropdown;