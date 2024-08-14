import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import * as Yup from 'yup';

// Schema xác thực không cần khai báo trong component vì không phụ thuộc vào props hoặc state
const validationSchema = Yup.object({
    phoneType: Yup.string().required('This field is required'),
    phoneNumber: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email format').required('This field is required'),
    addressType: Yup.string().required('This field is required'),
    addressLine1: Yup.string().required('This field is required'),
    city: Yup.string().required('This field is required'),
    state: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    patientType: Yup.string().required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    birthSex: Yup.string().required('This field is required'),
    dateOfBirth: Yup.date().required('This field is required'),
});

const initialFormData = {
    phoneType: '',
    phoneNumber: '',
    email: '',
    addressType: '',
    addressLine1: '',
    city: '',
    state: '',
    country: '',
    patientType: '',
    firstName: '',
    lastName: '',
    birthSex: '',
    dateOfBirth: '',
};

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors ] = useState({});

    const handleAddClick = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log('Form submitted successfully!');
            setErrors({});
        } catch (err) {
            const newErrors = err.inner.reduce((acc, error) => ({
                ...acc,
                [error.path]: error.message,
            }), {});
            setErrors(newErrors);
            console.log('Errors:', newErrors);
        }
    };

    const handleCancelClick = () => {
        setFormData(initialFormData);
        setErrors({});
    };

    return (
        <Box>
            <Box display="flex" justifyContent="flex-end" sx={{ mt: 2, mr: 3, mb: 4 }}>
                <Button variant="outlined" onClick={handleCancelClick} sx={{ marginRight: 1 }}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleAddClick}>
                    Add
                </Button>
            </Box>
        </Box>
    );
};

export default ContactForm;
