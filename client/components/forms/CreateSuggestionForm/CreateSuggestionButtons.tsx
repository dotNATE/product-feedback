import { useAppDispatch } from '@store/hooks';
import { closeCreateSuggestion } from '@store/suggestion';

import { Button } from '@mui/material';
import ButtonContainer from "@components/buttons/ButtonContainer";

const CreateSuggestionButtons: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(closeCreateSuggestion());
    };

    return (
        <ButtonContainer>
            <Button variant="contained" color="secondary" onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">Add Suggestion</Button>
        </ButtonContainer>
    );
};

export default CreateSuggestionButtons;