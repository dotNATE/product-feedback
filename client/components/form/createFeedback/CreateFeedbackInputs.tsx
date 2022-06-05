import InputContainer from "../../inputs/InputContainer";
import InputField from "../../inputs/InputField";

const CreateFeedbackInputs: React.FC = () => {
    return (
        <InputContainer>
            <InputField label='Feedback Title' name='title' type='text' description='Add a short, descriptive headline.' />
        </InputContainer>
    );
};

export default CreateFeedbackInputs;