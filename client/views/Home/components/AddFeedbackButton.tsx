import React from 'react';
import BaseButton from '../../../components/buttons/Button';
import PlusIcon from './PlusIcon';

const AddFeedbackButton: React.FC = ({}) => {
    return (
        <BaseButton label='Add Feedback' style='submit' icon={<PlusIcon />} />
    );
};

export default AddFeedbackButton;