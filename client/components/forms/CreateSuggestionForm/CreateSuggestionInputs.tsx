import InputContainer from "@components/inputs/InputContainer";
import InputField from "@components/inputs/InputField";
import SelectField from "@components/inputs/SelectField";

const CreateSuggestionInputs: React.FC = () => {
    return (
        <InputContainer>
            <InputField label='Suggestion Title' name='title' type='text' description='Add a short, descriptive headline.' />
            <SelectField label='Suggestion Title' name='category' description='Add a short, descriptive headline.'>
                <option value="">Please choose an option...</option>
                <option value="feature">Feature</option>
                <option value="enhancement">Enhancement</option>
                <option value="bug">Bug</option>
            </SelectField>
            <InputField label='Suggestion Detail' name='detail' textarea={true} description='Include any specific comments on what should be improved, added, etc.' />
        </InputContainer>
    );
};

export default CreateSuggestionInputs;