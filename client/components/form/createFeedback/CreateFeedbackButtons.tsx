import { useAppDispatch } from '../../../store/hooks';
import { closeCreateFeedback } from '../../../store/feedback';

import ButtonContainer from "../../buttons/ButtonContainer";
import Button from "../../buttons/Button";

const CreateFeedbackButtons: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(closeCreateFeedback());
    };

    return (
        <ButtonContainer>
            <Button label='Cancel' onClick={handleCloseModal} />
            <Button label='Add Feedback' style='submit' />
        </ButtonContainer>
    );
};

export default CreateFeedbackButtons;