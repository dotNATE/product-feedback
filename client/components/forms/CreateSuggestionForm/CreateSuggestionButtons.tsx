import { useAppDispatch } from '../../../store/hooks';
import { closeCreateSuggestion } from '../../../store/suggestion';

import ButtonContainer from "../../buttons/ButtonContainer";
import Button from "../../buttons/Button";

const CreateSuggestionButtons: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(closeCreateSuggestion());
    };

    return (
        <ButtonContainer>
            <Button label='Cancel' onClick={handleCloseModal} />
            <Button label='Add Suggestion' style='submit' type='submit' />
        </ButtonContainer>
    );
};

export default CreateSuggestionButtons;