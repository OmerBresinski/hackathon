import { useState } from "react";

const useForm = () => {
    const [form, setForm] = useState({});

    const handleChange = ({ fieldName, value }) => {
        setForm((form) => {
            return {
                ...form,
                [fieldName]: value,
            };
        });
    };

    return { form, handleChange };
};

export default useForm;
