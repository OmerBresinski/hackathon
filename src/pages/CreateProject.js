import React from "react";
import { useForm } from "hooks";
import TextInput from "components/TextInput";

const CreateProject = () => {
    const { form, handleChange } = useForm();

    console.log(form);

    return (
        <TextInput
            fieldName='projectName'
            value={form.projectName}
            onChange={handleChange}
        />
    );
};

export default CreateProject;
