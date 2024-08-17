import * as React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DemographicsSection from '../DemographicsSection';
import ContactInfoSection from '../ContactInfoSection';
import EmploymentSection from '../EmploymentSection';
import GuarantorSection from '../GuarantorSection';
import RelatedPersonSection from '../RelatedPersonSection';
import CoverageSection from '../CoverageSection';


export default function CombinedForm() {
    const [expandedSections, setExpandedSections] = React.useState({
        demographics: false,
        contactInfo: false,
        employment: false,
        guarantor: false,
        relatedPerson: false,
        coverage: false,
    });

    const formik = useFormik({
        initialValues: {
            patientType: '',
            firstName: '',
            lastName: '',
            birthSex: '',
            dateOfBirth: '',
            philHealthId: '',
            phoneNumber: '',
            phoneType: '',
            email: '',
            addressType: '',
            addressLine1: '',
            city: '',
            state: '',
            country: '',
            employer: '',
            employmentStatus: '',
            occupation: '',
            employeeId: '',
            useDefaultAddress: true,
        },
        validationSchema: Yup.object({
            patientType: Yup.string().required('This field is required'),
            firstName: Yup.string().required('This field is required').max(15, 'Must be 15 characters or less'),
            lastName: Yup.string().required('This field is required').max(20, 'Must be 20 characters or less'),
            birthSex: Yup.string().required('This field is required'),
            dateOfBirth: Yup.string().required('This field is required'),
            phoneNumber: Yup.string().required('This field is required'),
            phoneType: Yup.string().required('This field is required'),
            email: Yup.string().required('This field is required').email('Invalid email format'),
            addressType: Yup.string().required('This field is required'),
            addressLine1: Yup.string().required('This field is required'),
            city: Yup.string().required('This field is required'),
            state: Yup.string().required('This field is required'),
            country: Yup.string().required('This field is required'),
            employer: Yup.string(),
            employmentStatus: Yup.string(),
        }),
        onSubmit: (values) => {
            console.log('Form data:', values);
            alert('Form submitted successfully!');
        },
    });

    const handleToggleSection = (section) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <DemographicsSection 
                expanded={expandedSections.demographics} 
                handleToggle={() => handleToggleSection('demographics')} 
                formik={formik} 
            />
            <ContactInfoSection 
                expanded={expandedSections.contactInfo} 
                handleToggle={() => handleToggleSection('contactInfo')} 
                formik={formik} 
            />
            <EmploymentSection 
                expanded={expandedSections.employment} 
                handleToggle={() => handleToggleSection('employment')} 
                formik={formik} 
            />
            <GuarantorSection 
                expanded={expandedSections.guarantor} 
                handleToggle={() => handleToggleSection('guarantor')} 
            />
            <RelatedPersonSection 
                expanded={expandedSections.relatedPerson} 
                handleToggle={() => handleToggleSection('relatedPerson')} 
            />
            <CoverageSection 
                expanded={expandedSections.coverage} 
                handleToggle={() => handleToggleSection('coverage')} 
            />

            <Box sx={{ flexGrow: 1 }} />
            <Grid container>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
                        <Button
                            variant="outlined"
                            sx={{ marginRight: 1, color: 'primary.main', borderColor: 'primary.main' }}
                            onClick={formik.resetForm}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={formik.handleSubmit}
                        >
                            Add
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
