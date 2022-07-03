import Dropdown from '@components/Dropdown';
import { mostUpvotes, leastUpvotes } from '@store/actions'

interface Props {
    show: boolean,
};

const actions = [
    mostUpvotes,
    leastUpvotes,
];

const SortByDropdown: React.FC<Props> = ({ show }) => <Dropdown show={show} actions={actions} />;

export default SortByDropdown;