import React, { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Demographics from '../Demographics';
import ContactInfo from '../ContactInfo';
import Employment from '../Employment';
import Guarantor from '../Guarantor';
import RelatedPerson from '../RelatedPerson';
import Coverage from '../Coverage';


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
    const [expanded, setExpanded] = useState({
        demographics: false,
        contactInfo: false,
        employment: false,
        guarantor: false,
        relatedPerson: false,
        coverage: false
    });

    const handleToggle = (section) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const formik = useFormik({
        initialValues: initialFormData,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form data:', values);
            alert('Form submitted successfully!');
        },
    });

    const handleAddClick = () => {
        formik.handleSubmit();

        if (!formik.isValid) {
            console.log('Form validation errors:', formik.errors);
        }
    };

    const handleCancelClick = () => {
        formik.resetForm();
    };

    return (
        <Box>
            <Demographics expanded={expanded.demographics} handleToggle={handleToggle} formik={formik} />
            <ContactInfo expanded={expanded.contactInfo} handleToggle={handleToggle} formik={formik} />
            <Employment expanded={expanded.employment} handleToggle={handleToggle} formik={formik} />
            <Guarantor expanded={expanded.guarantor} handleToggle={handleToggle} />
            <RelatedPerson expanded={expanded.relatedPerson} handleToggle={handleToggle} />
            <Coverage expanded={expanded.coverage} handleToggle={handleToggle} />

            {/* Nút Add và Cancel */}
            <Box sx={{ flexGrow: 1 }} />
            <Grid container>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{ marginRight: 1, color: 'primary.main', borderColor: 'primary.main' }}
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddClick}
                        >
                            Add
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
