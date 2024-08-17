import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid, TextField, FormControl, Select, MenuItem, Paper, InputAdornment } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export default function EmploymentSection({ expanded, handleToggle, formik, selectedCountry, handleCountryCodeChange }) {
    // Kiểm tra xem formik có được truyền vào không, nếu không thì trả về null và log lỗi
    if (!formik) {
        console.error("formik is undefined in EmploymentSection");
        return null;
    }

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
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
                            <Typography component="span">Employer</Typography>
                            <TextField
                                fullWidth
                                name="employer"
                                placeholder="Employer"
                                variant="outlined"
                                value={formik.values.employer || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">Employment Status</Typography>
                            <FormControl fullWidth>
                                <Select
                                    name="employmentStatus"
                                    value={formik.values.employmentStatus || ''}
                                    onChange={formik.handleChange}
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
                            <Typography component="span">Occupation</Typography>
                            <TextField
                                fullWidth
                                name="occupation"
                                placeholder="Occupation"
                                variant="outlined"
                                value={formik.values.occupation || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography component="span">Employee ID</Typography>
                            <TextField
                                fullWidth
                                name="employeeId"
                                placeholder="Employee ID"
                                variant="outlined"
                                value={formik.values.employeeId || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Typography component="span">Phone Number</Typography>
                            <TextField
                                fullWidth
                                name="phoneNumber"
                                placeholder="+1"
                                variant="outlined"
                                value={formik.values.phoneNumber || ''}
                                onChange={formik.handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FormControl>
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryCodeChange}
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
                                value={formik.values.email || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography component="span">Address Type</Typography>
                            <FormControl fullWidth>
                                <Select
                                    name="addressType"
                                    value={formik.values.addressType || ''}
                                    onChange={formik.handleChange}
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
                                value={formik.values.addressLine1 || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">Address Line 2</Typography>
                            <TextField
                                fullWidth
                                name="addressLine2"
                                placeholder="Address Line 2"
                                variant="outlined"
                                value={formik.values.addressLine2 || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">City</Typography>
                            <TextField
                                fullWidth
                                name="city"
                                placeholder="City"
                                variant="outlined"
                                value={formik.values.city || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">State</Typography>
                            <TextField
                                fullWidth
                                name="state"
                                placeholder="State"
                                variant="outlined"
                                value={formik.values.state || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">Zip code</Typography>
                            <TextField
                                fullWidth
                                name="zipCode"
                                placeholder="Zip code"
                                variant="outlined"
                                value={formik.values.zipCode || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">Country</Typography>
                            <TextField
                                fullWidth
                                name="country"
                                placeholder="United States"
                                variant="outlined"
                                value={formik.values.country || ''}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
}
