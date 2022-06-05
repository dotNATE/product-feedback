import { useAppDispatch } from '../../../../../store/hooks';
import { openCreateSuggestion } from '../../../../../store/suggestion';

import Button from '../../../../../components/buttons/Button';
import PlusIcon from '../../../../../components/icons/PlusIcon';

const AddSuggestionButton: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(openCreateSuggestion());
    };
    
    return (
        <Button label='Add Suggestion' style='submit' icon={<PlusIcon />} onClick={handleClick} />
    );
};

export default AddSuggestionButton;