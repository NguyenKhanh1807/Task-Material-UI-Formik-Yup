import * as React from 'react';
import { TextField, FormControl, Select, MenuItem, Box, Grid, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails, Collapse, Paper } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, CalendarToday as CalendarTodayIcon } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validate = values => {
   const errors = {};
   if (!values.firstName) {
     errors.firstName = 'This field is required';
   } else if (values.firstName.length > 15) {
     errors.firstName = 'Must be 15 characters or less';
   }
 
   if (!values.lastName) {
     errors.lastName = 'This field is required';
   } else if (values.lastName.length > 20) {
     errors.lastName = 'Must be 20 characters or less';
   }
 
   return errors;
 };

export default function Demographics() {
    const [expanded, setExpanded] = React.useState(false);
    const [openCalendar, setOpenCalendar] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            patientType: '',
            firstName: '',
            lastName: '',
            birthSex: '',
            dateOfBirth: '',
            philHealthId: '',
            unknown: false,
        },

        validationSchema: Yup.object({
            patientType: Yup.string().required('This field is required'),
            firstName: Yup.string().required('This field is required'),
            lastName: Yup.string().required('This field is required'),
            birthSex: Yup.string().required('This field is required'),
            dateOfBirth: Yup.string().required('This field is required'),
        }),

        validate,
    });

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleCalendarToggle = () => {
        setOpenCalendar(!openCalendar);
    };

    const handleDateChange = (date) => {
        formik.setFieldValue('dateOfBirth', date.format('MM/DD/YYYY'));
        setOpenCalendar(false);
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Accordion expanded={expanded} onChange={handleToggle}>
                    <AccordionSummary>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                onClick={handleToggle}
                                sx={{
                                    transition: 'transform 0.3s',
                                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Demographics
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3} md={3}>
                                    <Typography component="span">
                                        Patient Type <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <FormControl fullWidth required>
                                        <Select
                                            id="patientType"
                                            name="patientType"
                                            value={formik.values.patientType}
                                            displayEmpty
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.patientType && Boolean(formik.errors.patientType)}
                                        >
                                            <MenuItem value="" disabled>
                                                Select
                                            </MenuItem>
                                            <MenuItem value={'type1'}>Type 1</MenuItem>
                                            <MenuItem value={'type2'}>Type 2</MenuItem>
                                        </Select>
                                        {formik.touched.patientType && formik.errors.patientType ? (
                                            <div style={{ color: 'red' }}>{formik.errors.patientType}</div>
                                        ) : null}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={4.5} md={4.5}>
                                    <Typography component="span">
                                        First Name <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        variant="outlined"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
                                    ) : null}
                                </Grid>

                                <Grid item xs={12} sm={4.5} md={4.5}>
                                    <Typography component="span">
                                        Last Name <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        variant="outlined"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
                                    ) : null}
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography component="span">
                                        Birth Sex <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <FormControl fullWidth required>
                                        <Select
                                            id="birthSex"
                                            name="birthSex"
                                            value={formik.values.birthSex}
                                            displayEmpty
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.birthSex && Boolean(formik.errors.birthSex)}
                                        >
                                            <MenuItem value="" disabled>
                                                Select
                                            </MenuItem>
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'female'}>Female</MenuItem>
                                        </Select>
                                        {formik.touched.birthSex && formik.errors.birthSex ? (
                                            <div style={{ color: 'red' }}>{formik.errors.birthSex}</div>
                                        ) : null}
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <Typography component="span">
                                        Date of Birth <span style={{ color: 'red' }}>*</span>
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        required
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        placeholder="MM/DD/YYYY"
                                        type="text"
                                        value={formik.values.dateOfBirth}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                                        disabled={formik.values.unknown}  /* Vô hiệu hóa khi checkbox Unknown được chọn */
                                        sx={{
                                            backgroundColor: formik.values.unknown ? '#e0e0e0' : 'transparent',  // Màu xám khi disabled
                                            '& .MuiInputBase-input.Mui-disabled': {
                                                WebkitTextFillColor: formik.values.unknown ? '#9e9e9e' : 'inherit',  // Màu chữ khi disabled
                                            }
                                        }}
                                        InputLabelProps={{ shrink: false }}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={handleCalendarToggle} disabled={formik.values.unknown}>
                                                    <CalendarTodayIcon />
                                                </IconButton>
                                            ),
                                        }}
                                    />
                                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                                        <div style={{ color: 'red' }}>{formik.errors.dateOfBirth}</div>
                                    ) : null}

                                    <Collapse in={openCalendar && !formik.values.unknown}>  {/* Chỉ mở lịch khi checkbox không được chọn */}
                                        <Box sx={{ p: 2 }}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DateCalendar onChange={handleDateChange} />
                                            </LocalizationProvider>
                                        </Box>
                                    </Collapse>
                                </Grid>

                                <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                        id="unknown"
                                        name="unknown"
                                        checked={formik.values.unknown}
                                        onChange={e => {
                                            formik.handleChange(e);
                                            if (e.target.checked) {
                                                formik.setFieldValue('dateOfBirth', '');  /* Xóa giá trị ngày sinh nếu chọn Unknown */
                                                setOpenCalendar(false);  /* Đóng lịch nếu đang mở */
                                            }
                                        }}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <Typography variant="body2">Unknown</Typography>
                                </Grid>


                            </Grid>

                            <Grid item xs={12} sm={12} md={12} sx={{ mt: 2 }}>
                                <Typography component="span">
                                    PhilHealth ID
                                </Typography>
                                <TextField
                                    fullWidth
                                    id="philHealthId"
                                    name="philHealthId"
                                    variant="outlined"
                                    placeholder="############"
                                    value={formik.values.philHealthId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
