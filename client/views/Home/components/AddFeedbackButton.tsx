import React from 'react';

import { useAppDispatch } from '../../../store/hooks';
import { openCreateFeedback } from '../../../store/feedback';

import BaseButton from '../../../components/buttons/Button';
import PlusIcon from './PlusIcon';

const AddFeedbackButton: React.FC = ({}) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(openCreateFeedback());
    };
    
    return (
        <BaseButton label='Add Feedback' style='submit' icon={<PlusIcon />} onClick={handleClick} />
    );
};

export default AddFeedbackButton;