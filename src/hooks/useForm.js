import { useState } from 'react'

export const useForm = (initialValue) => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleChanges = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSuccessMessage(true);
    };

    return [value, handleSubmit, handleChanges, showSuccessMessage];
};