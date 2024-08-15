import React from 'react';
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, FormControl, Select, MenuItem, Grid, TextField, Paper, InputAdornment } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export default function EmploymentDetails({ expanded, handleToggle, formik }) {
    const [selectedCountry, setSelectedCountry] = React.useState('+1'); // State để lưu trữ mã quốc gia đã chọn, với giá trị mặc định là +1.

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleAddClick = () => {
        formik.setTouched({
            employer: true,
            employmentStatus: true,
            occupation: true,
            employeeId: true,
            phoneNumber: true,
            email: true,
            addressType: true,
            addressLine1: true,
            addressLine2: true,
            city: true,
            state: true,
            zipCode: true,
            country: true,
        });
        formik.validateForm();
    };

    const handleCancel = () => {
        formik.resetForm();
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Accordion expanded={expanded} onChange={() => handleToggle('employment')}>
                    <AccordionSummary>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                onClick={() => handleToggle('employment')}
                                sx={{
                                    transition: 'transform 0.3s',
                                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Employment
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Employer
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="employer"
                                    placeholder="Employer"
                                    variant="outlined"
                                    value={formik.values.employer}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employer && Boolean(formik.errors.employer)}
                                />
                                {formik.touched.employer && formik.errors.employer && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.employer}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Employment Status
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        name="employmentStatus"
                                        value={formik.values.employmentStatus}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.employmentStatus && Boolean(formik.errors.employmentStatus)}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>Select</MenuItem>
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="full-time">Full-time</MenuItem>
                                        <MenuItem value="part-time">Part-time</MenuItem>
                                    </Select>
                                    {formik.touched.employmentStatus && formik.errors.employmentStatus && (
                                        <Typography color="error" variant="body2">
                                            {formik.errors.employmentStatus}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Occupation
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="occupation"
                                    placeholder="Occupation"
                                    variant="outlined"
                                    value={formik.values.occupation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.occupation && Boolean(formik.errors.occupation)}
                                />
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.occupation}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Employee ID
                                </Typography>
                                <TextField
                                    fullWidth
                                    name="employeeId"
                                    placeholder="Employee ID"
                                    variant="outlined"
                                    value={formik.values.employeeId}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.employeeId && Boolean(formik.errors.employeeId)}
                                />
                                {formik.touched.employeeId && formik.errors.employeeId && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.employeeId}
                                    </Typography>
                                )}
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Phone Number</Typography>
                                <TextField
                                    fullWidth
                                    name="phoneNumber"
                                    placeholder="+1"
                                    variant="outlined"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <FormControl>
                                                    <Select
                                                        value={selectedCountry}
                                                        onChange={handleCountryChange}
                                                        displayEmpty
                                                        variant="standard"
                                                        disableUnderline
                                                    >
                                                        <MenuItem value="+1">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                                                                alt="United States flag"
                                                                style={{ width: 55, height: 20, marginRight: 5 }}
                                                            />
                                                        </MenuItem>
                                                        {/* Add more countries here */}
                                                    </Select>
                                                </FormControl>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.phoneNumber}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Email</Typography>
                                <TextField
                                    fullWidth
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.email}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Address Type</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        name="addressType"
                                        value={formik.values.addressType}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.addressType && Boolean(formik.errors.addressType)}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>Select</MenuItem>
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="home">Home</MenuItem>
                                        <MenuItem value="work">Work</MenuItem>
                                    </Select>
                                    {formik.touched.addressType && formik.errors.addressType && (
                                        <Typography color="error" variant="body2">
                                            {formik.errors.addressType}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Address Line 1</Typography>
                                <TextField
                                    fullWidth
                                    name="addressLine1"
                                    placeholder="Address Line 1"
                                    variant="outlined"
                                    value={formik.values.addressLine1}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
                                />
                                {formik.touched.addressLine1 && formik.errors.addressLine1 && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.addressLine1}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Address Line 2</Typography>
                                <TextField
                                    fullWidth
                                    name="addressLine2"
                                    placeholder="Address Line 2"
                                    variant="outlined"
                                    value={formik.values.addressLine2}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">City</Typography>
                                <TextField
                                    fullWidth
                                    name="city"
                                    placeholder="City"
                                    variant="outlined"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                />
                                {formik.touched.city && formik.errors.city && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.city}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">State</Typography>
                                <TextField
                                    fullWidth
                                    name="state"
                                    placeholder="State"
                                    variant="outlined"
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                />
                                {formik.touched.state && formik.errors.state && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.state}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Zip code</Typography>
                                <TextField
                                    fullWidth
                                    name="zipCode"
                                    placeholder="Zip code"
                                    variant="outlined"
                                    value={formik.values.zipCode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Country</Typography>
                                <TextField
                                    fullWidth
                                    name="country"
                                    placeholder="United States"
                                    variant="outlined"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                />
                                {formik.touched.country && formik.errors.country && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.country}
                                    </Typography>
                                )}
                            </Grid>

                            {/* Add and Cancel buttons */}
                            <Box display="flex" justifyContent="flex-end" mt={2} sx={{ ml: 2 }}>
                                <Button onClick={handleAddClick} variant="contained" sx={{ marginRight: 1 }}>Add</Button>
                                <Button onClick={handleCancel} variant="outlined">Cancel</Button>
                            </Box>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
