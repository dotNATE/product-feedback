import { useAppDispatch } from '../../../../../store/hooks';
import { openCreateFeedback } from '../../../../../store/feedback';

import Button from '../../../../../components/buttons/Button';
import PlusIcon from '../../../../../components/icons/PlusIcon';

const AddFeedbackButton: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(openCreateFeedback());
    };
    
    return (
        <Button label='Add Feedback' style='submit' icon={<PlusIcon />} onClick={handleClick} />
    );
};

export default AddFeedbackButton;