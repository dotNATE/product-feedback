import { useAppDispatch } from '../../../../../store/hooks';
import { openCreateSuggestion } from '../../../../../store/suggestion';

import { Button } from '@mui/material';
import PlusIcon from '../../../../../components/icons/PlusIcon';

const AddSuggestionButton: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(openCreateSuggestion());
    };
    
    return (
        <Button color='primary' variant="contained" startIcon={<PlusIcon />} onClick={handleClick}>Add Suggestion</Button>
    );
};

export default AddSuggestionButton;