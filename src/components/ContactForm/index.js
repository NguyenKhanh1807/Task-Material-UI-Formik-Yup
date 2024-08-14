import * as React from 'react';
import * as Yup from 'yup';
import { Button, Box } from '@mui/material';

function validateForm(values) {
  const validationSchema = Yup.object({
    phoneType: Yup.string().required('This field is required'),
    phoneNumber: Yup.string().required('This field is required'),
    email: Yup.string().required('This field is required'),
    addressType: Yup.string().required('This field is required'),
    addressLine1: Yup.string().required('This field is required'),
    city: Yup.string().required('This field is required'),
    state: Yup.string().required('This field is required'),
    country: Yup.string().required('This field is required'),
    patientType: Yup.string().required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    birthSex: Yup.string().required('This field is required'),
    dateOfBirth: Yup.string().required('This field is required'),
  });

  return validationSchema.validate(values, { abortEarly: false })
    .then(() => {
      return {}; // Trả về object trống khi không có lỗi
    })
    .catch((err) => {
      const errors = {};
      err.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      return errors; // Trả về các lỗi
    });
}

function ContactForm() {
  const initialValues = {
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

  const [errors, setErrors] = React.useState({});

  const handleAddClick = async () => {
    const formErrors = await validateForm(initialValues);
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully!');
    } else {
      setErrors(formErrors);
      console.log('Errors:', formErrors);
    }
  };

  const handleCancelClick = () => {
    setErrors({});
    console.log('Form cancelled.');
  };

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" sx={{ mt: 2, mr: 3, mb: 4 }}>
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
      {/* Hiển thị lỗi dưới mỗi trường tương ứng */}
      <Box sx={{ color: 'red' }}>
        {Object.keys(errors).map((field) => (
          <div key={field}>
            {field}: {errors[field]}
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default ContactForm;
