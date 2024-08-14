import React, { useState } from 'react';
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, FormControl, Select, MenuItem, Grid, TextField, Paper, InputAdornment } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';


export default function EmploymentDetails() {
    const [expanded, setExpanded] = React.useState(false); // Sử dụng state để theo dõi trạng thái mở rộng của Accordion. Ban đầu, Accordion sẽ không mở rộng.
    const [selectedCountry, setSelectedCountry] = React.useState('+1'); // State để lưu trữ mã quốc gia đã chọn, với giá trị mặc định là +1.

    const [formData, setFormData] = useState({
        employer: '',
        employmentStatus: '',
        occupation: '',
        employeeId: '',
        phoneNumber: '',
        email: '',
        addressType: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        country: ''
    });

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleAddClick = () => {
        console.log("Form data submitted:", formData);
        // You might want to handle form submission logic here
    };

    const handleCancel = () => {
        setFormData({
            employer: '',
            employmentStatus: '',
            occupation: '',
            employeeId: '',
            phoneNumber: '',
            email: '',
            addressType: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            country: ''
        });
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
                                    value={formData.employer}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Employment Status
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        name="employmentStatus"
                                        value={formData.employmentStatus}
                                        onChange={handleChange}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>Select</MenuItem>
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="full-time">Full-time</MenuItem>
                                        <MenuItem value="part-time">Part-time</MenuItem>
                                    </Select>
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
                                    value={formData.occupation}
                                    onChange={handleChange}
                                />
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
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Phone Number</Typography>
                                <TextField
                                    fullWidth
                                    name="phoneNumber"
                                    placeholder="+1"
                                    variant="outlined"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
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
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Email</Typography>
                                <TextField
                                    fullWidth
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Address Type</Typography>
                                <FormControl fullWidth>
                                    <Select
                                        name="addressType"
                                        value={formData.addressType}
                                        onChange={handleChange}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>Select</MenuItem>
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="home">Home</MenuItem>
                                        <MenuItem value="work">Work</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">Address Line 1</Typography>
                                <TextField
                                    fullWidth
                                    name="addressLine1"
                                    placeholder="Address Line 1"
                                    variant="outlined"
                                    value={formData.addressLine1}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Address Line 2</Typography>
                                <TextField
                                    fullWidth
                                    name="addressLine2"
                                    placeholder="Address Line 2"
                                    variant="outlined"
                                    value={formData.addressLine2}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">City</Typography>
                                <TextField
                                    fullWidth
                                    name="city"
                                    placeholder="City"
                                    variant="outlined"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">State</Typography>
                                <TextField
                                    fullWidth
                                    name="state"
                                    placeholder="State"
                                    variant="outlined"
                                    value={formData.state}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Zip code</Typography>
                                <TextField
                                    fullWidth
                                    name="zipCode"
                                    placeholder="Zip code"
                                    variant="outlined"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">Country</Typography>
                                <TextField
                                    fullWidth
                                    name="country"
                                    placeholder="United States"
                                    variant="outlined"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </Grid>


                            {/* Add and Cancel buttons */}
                            <Box display="flex" justifyContent="flex-end" mt={2} sx = {{ ml : 2 }}>
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
