import { useState } from "react";

interface state {
    [key: string]: any;
}

export const useForm = (initialForm: {}) => {

    const [formState, setFormState] = useState<state>(initialForm);

    const onInputChange = (event: any) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value.toLowerCase(),
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
