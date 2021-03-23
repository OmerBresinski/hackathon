import React from "react";
import { useForm } from "hooks";
import { useHistory } from "react-router";
import Button from "components/Button";
import TextInput from "components/TextInput";
import { URL } from "constant";

const CreateProject = () => {
    const history = useHistory();
    const { form, handleChange } = useForm();

    const submit = () => {
        history.push(`${URL.project}/${form.projectName}`);
    };

    return (
        <>
            <TextInput
                fieldName='projectName'
                value={form.projectName}
                onChange={handleChange}
            />
            <Button label={"Submit"} onClick={submit} />
        </>
    );
};

export default CreateProject;
