export { default as useForm } from "./useForm";

const useForm = () => {
    const [form, setForm] = useState({});

    const handleChange = (field) => {
        setForm((form) => {
            return {
                ...form,
                [field.name]: field.value,
            };
        });
    };

    return { form, handleChange };
};

export default useForm;
