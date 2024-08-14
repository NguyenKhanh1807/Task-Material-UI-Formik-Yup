import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import * as Yup from 'yup';

// Khai báo schema xác thực cho các trường
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

const ContactForm = () => {
    const [formData, setFormData] = useState({
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
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddClick = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log('Form submitted successfully!');
            setErrors({}); // Clear errors on successful submission
        } catch (err) {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors); // Set errors if there are validation failures
            console.log('Errors:', newErrors);
        }
    };

    const handleCancelClick = () => {
        setFormData({
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
        });
        setErrors({});
    };

    return (
        <Box>
            {Object.keys(formData).map((field) => (
                <TextField
                    key={field}
                    name={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    value={formData[field]}
                    onChange={handleChange}
                    error={!!errors[field]}
                    helperText={errors[field] || ' '}
                    margin="normal"
                    fullWidth
                />
            ))}
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
