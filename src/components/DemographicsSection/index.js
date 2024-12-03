// import * as React from 'react';
// import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Paper, Grid, TextField, FormControl, Select, MenuItem, Checkbox, Collapse, InputAdornment, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { ExpandMore as ExpandMoreIcon, CalendarToday as CalendarTodayIcon, Add as AddIcon } from '@mui/icons-material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export default function CombinedForm() {
//     const [expanded, setExpanded] = React.useState({
//         demographics: false,
//         contactInfo: false,
//         employment: false,
//         guarantor: false,
//         relatedPerson: false,
//         coverage: false,
//     });

//     const [openCalendar, setOpenCalendar] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState('permanent');
//     const [countryCode, setCountryCode] = React.useState('+63');
//     const [isCheckboxDisabled, setIsCheckboxDisabled] = React.useState(true);
//     const [selectedCountry, setSelectedCountry] = React.useState('+1');

//     const formik = useFormik({
//         initialValues: {
//             patientType: '',
//             firstName: '',
//             lastName: '',
//             birthSex: '',
//             dateOfBirth: '',
//             philHealthId: '',
//             phoneNumber: '',
//             phoneType: '',
//             email: '',
//             addressType: '',
//             addressLine1: '',
//             city: '',
//             state: '',
//             country: '',
//             employer: '',
//             employmentStatus: '',
//             occupation: '',
//             employeeId: '',
//             useDefaultAddress: true,
//         },
//         validationSchema: Yup.object({
//             patientType: Yup.string().required('This field is required'),
//             firstName: Yup.string().required('This field is required').max(15, 'Must be 15 characters or less'),
//             lastName: Yup.string().required('This field is required').max(20, 'Must be 20 characters or less'),
//             birthSex: Yup.string().required('This field is required'),
//             dateOfBirth: Yup.string().required('This field is required'),
//             phoneNumber: Yup.string().required('This field is required'),
//             phoneType: Yup.string().required('This field is required'),
//             email: Yup.string().required('This field is required').email('Invalid email format'),
//             addressType: Yup.string().required('This field is required'),
//             addressLine1: Yup.string().required('This field is required'),
//             city: Yup.string().required('This field is required'),
//             state: Yup.string().required('This field is required'),
//             country: Yup.string().required('This field is required'),
//             employer: Yup.string(),
//             employmentStatus: Yup.string(),
//         }),
//         onSubmit: (values) => {
//             console.log('Form data:', values);
//             alert('Form submitted successfully!');
//         },
//     });

//     const handleToggle = (section) => {
//         setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
//     };

//     const handleAddClick = () => {
//         formik.setTouched({
//             patientType: true,
//             firstName: true,
//             lastName: true,
//             birthSex: true,
//             dateOfBirth: true,
//             phoneNumber: true,
//             phoneType: true,
//             email: true,
//             addressType: true,
//             addressLine1: true,
//             city: true,
//             state: true,
//             country: true,
//             employer: true,
//             employmentStatus: true,
//             occupation: true,
//             employeeId: true,
//             useDefaultAddress: true
//         });
//         formik.validateForm();
//     };

//     const handleCancelClick = () => {
//         formik.resetForm();
//     };

//     const handleCalendarToggle = () => {
//         setOpenCalendar(!openCalendar);
//     };

//     const handleDateChange = (date) => {
//         formik.setFieldValue('dateOfBirth', date.format('MM/DD/YYYY'));
//         setOpenCalendar(false);
//     };

//     const handleChangeCategory = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     const handleCountryCodeChange = (event) => {
//         setCountryCode(event.target.value);
//     };

//     const handleAddAddressClick = () => {
//         setIsCheckboxDisabled(false);
//     };

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//             {/* Demographics Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.demographics} onChange={() => handleToggle('demographics')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('demographics')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.demographics ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 Demographics
//                             </Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={3} md={3}>
//                                 <Typography component="span">
//                                     Patient Type <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         id="patientType"
//                                         name="patientType"
//                                         value={formik.values.patientType}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.patientType && Boolean(formik.errors.patientType)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value="">None</MenuItem>
//                                         <MenuItem value={'type1'}>Type 1</MenuItem>
//                                         <MenuItem value={'type2'}>Type 2</MenuItem>
//                                     </Select>
//                                     {formik.touched.patientType && formik.errors.patientType ? (
//                                         <div style={{ color: 'red' }}>{formik.errors.patientType}</div>
//                                     ) : null}
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={4.5} md={4.5}>
//                                 <Typography component="span">
//                                     First Name <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="firstName"
//                                     name="firstName"
//                                     placeholder="First Name"
//                                     variant="outlined"
//                                     value={formik.values.firstName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                                 />
//                                 {formik.touched.firstName && formik.errors.firstName ? (
//                                     <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
//                                 ) : null}
//                             </Grid>
//                             <Grid item xs={12} sm={4.5} md={4.5}>
//                                 <Typography component="span">
//                                     Last Name <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="lastName"
//                                     name="lastName"
//                                     placeholder="Last Name"
//                                     variant="outlined"
//                                     value={formik.values.lastName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                                 />
//                                 {formik.touched.lastName && formik.errors.lastName ? (
//                                     <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
//                                 ) : null}
//                             </Grid>
//                         </Grid>
//                         <Grid container spacing={2} sx={{ mt: 2 }}>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">
//                                     Birth Sex <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         id="birthSex"
//                                         name="birthSex"
//                                         value={formik.values.birthSex}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.birthSex && Boolean(formik.errors.birthSex)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value={'male'}>Male</MenuItem>
//                                         <MenuItem value={'female'}>Female</MenuItem>
//                                     </Select>
//                                     {formik.touched.birthSex && formik.errors.birthSex ? (
//                                         <div style={{ color: 'red' }}>{formik.errors.birthSex}</div>
//                                     ) : null}
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={4}>
//                                 <Typography component="span">
//                                     Date of Birth <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="dateOfBirth"
//                                     name="dateOfBirth"
//                                     placeholder="MM/DD/YYYY"
//                                     type="text"
//                                     value={formik.values.dateOfBirth}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
//                                     disabled={formik.values.unknown}
//                                     sx={{
//                                         backgroundColor: formik.values.unknown ? '#e0e0e0' : 'transparent',
//                                         '& .MuiInputBase-input.Mui-disabled': {
//                                             WebkitTextFillColor: formik.values.unknown ? '#9e9e9e' : 'inherit',
//                                         }
//                                     }}
//                                     InputLabelProps={{ shrink: false }}
//                                     InputProps={{
//                                         endAdornment: (
//                                             <IconButton onClick={handleCalendarToggle} disabled={formik.values.unknown}>
//                                                 <CalendarTodayIcon />
//                                             </IconButton>
//                                         ),
//                                     }}
//                                 />
//                                 {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
//                                     <div style={{ color: 'red' }}>{formik.errors.dateOfBirth}</div>
//                                 ) : null}
//                                 <Collapse in={openCalendar && !formik.values.unknown}>
//                                     <Box sx={{ p: 2 }}>
//                                         <LocalizationProvider dateAdapter={AdapterDayjs}>
//                                             <DateCalendar onChange={handleDateChange} />
//                                         </LocalizationProvider>
//                                     </Box>
//                                 </Collapse>
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
//                                 <Checkbox
//                                     id="unknown"
//                                     name="unknown"
//                                     checked={formik.values.unknown}
//                                     onChange={e => {
//                                         formik.handleChange(e);
//                                         if (e.target.checked) {
//                                             formik.setFieldValue('dateOfBirth', '');
//                                             setOpenCalendar(false);
//                                         }
//                                     }}
//                                     inputProps={{ 'aria-label': 'controlled' }}
//                                 />
//                                 <Typography variant="body2">Unknown</Typography>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs={12} sm={12} md={12} sx={{ mt: 2 }}>
//                             <Typography component="span">
//                                 PhilHealth ID
//                             </Typography>
//                             <TextField
//                                 fullWidth
//                                 id="philHealthId"
//                                 name="philHealthId"
//                                 variant="outlined"
//                                 placeholder="############"
//                                 value={formik.values.philHealthId}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                             />
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Contact Info Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.contactInfo} onChange={() => handleToggle('contactInfo')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('contactInfo')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.contactInfo ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 Contact Info
//                             </Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={3} md={3}>
//                                 <Typography component="span">
//                                     Phone Type <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         value={formik.values.phoneType}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         name="phoneType"
//                                         placeholder='Select'
//                                         error={formik.touched.phoneType && Boolean(formik.errors.phoneType)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value={'type1'}>Type 1</MenuItem>
//                                         <MenuItem value={'type2'}>Type 2</MenuItem>
//                                     </Select>
//                                     {formik.touched.phoneType && formik.errors.phoneType && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.phoneType}
//                                         </Typography>
//                                     )}
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={4.5} md={4.5}>
//                                 <Typography component="span">
//                                     Phone Number <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     placeholder="+63"
//                                     variant="outlined"
//                                     value={formik.values.phoneNumber}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">
//                                                 <FormControl>
//                                                     <Select
//                                                         value={countryCode}
//                                                         onChange={handleCountryCodeChange}
//                                                         displayEmpty
//                                                         variant="standard"
//                                                         disableUnderline
//                                                         sx={{ minWidth: 80 }}
//                                                     >
//                                                         <MenuItem value="+63">
//                                                             <img
//                                                                 src="https://st3.depositphotos.com/17394196/19541/v/450/depositphotos_195419786-stock-illustration-republic-philippines.jpg"
//                                                                 alt="Philippines flag"
//                                                                 style={{ width: 55, height: 30, marginRight: 5 }}
//                                                             />
//                                                         </MenuItem>
//                                                     </Select>
//                                                 </FormControl>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                                 {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                                     <Typography color="error" variant="body2">
//                                         {formik.errors.phoneNumber}
//                                     </Typography>
//                                 )}
//                             </Grid>
//                             <Grid item xs={12} sm={4.5} md={4.5}>
//                                 <Typography component="span">
//                                     Email <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     variant="outlined"
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.email && Boolean(formik.errors.email)}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                                 {formik.touched.email && formik.errors.email && (
//                                     <Typography color="error" variant="body2">
//                                         {formik.errors.email}
//                                     </Typography>
//                                 )}
//                             </Grid>
//                         </Grid>

//                         <Box sx={{ marginBottom: 2 }}>
//                             <Typography variant="body1" component="div" sx={{ marginBottom: 1, marginTop: 2 }}>
//                                 Address Category
//                             </Typography>
//                             <RadioGroup
//                                 row
//                                 aria-label="address-category"
//                                 name="address-category"
//                                 value={selectedValue}
//                                 onChange={handleChangeCategory}
//                             >
//                                 <FormControlLabel value="permanent" control={<Radio />} label="Permanent" />
//                                 <FormControlLabel value="temporary" control={<Radio />} label="Temporary" />
//                                 <FormControlLabel value="confidential" control={<Radio />} label="Confidential" />
//                             </RadioGroup>
//                         </Box>

//                         <Grid container spacing={2} sx={{ mt: 2 }}>
//                             <Grid item xs={12} sm={6} md={4}>
//                                 <Typography component="span">
//                                     Address Type <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         value={formik.values.addressType}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         name="addressType"
//                                         error={formik.touched.addressType && Boolean(formik.errors.addressType)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value={'type1'}>Type 1</MenuItem>
//                                         <MenuItem value={'type2'}>Type 2</MenuItem>
//                                     </Select>
//                                     {formik.touched.addressType && formik.errors.addressType && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.addressType}
//                                         </Typography>
//                                     )}
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12} sm={4.5} md={3}>
//                                 <Typography component="span">
//                                     Address Line 1 <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="addressLine1"
//                                     name="addressLine1"
//                                     placeholder="Address Line 1"
//                                     variant="outlined"
//                                     value={formik.values.addressLine1}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                                 {formik.touched.addressLine1 && formik.errors.addressLine1 && (
//                                     <Typography color="error" variant="body2">
//                                         {formik.errors.addressLine1}
//                                     </Typography>
//                                 )}
//                             </Grid>

//                             <Grid item xs={12} sm={4.5} md={5}>
//                                 <Typography component="span">
//                                     Address Line 2
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     id="addressLine2"
//                                     name="addressLine2"
//                                     placeholder="Address Line 2"
//                                     variant="outlined"
//                                     value={formik.values.addressLine2}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={4.5} md={6}>
//                                 <Typography component="span">
//                                     City <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     required
//                                     id="city"
//                                     name="city"
//                                     placeholder="City"
//                                     variant="outlined"
//                                     value={formik.values.city}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     error={formik.touched.city && Boolean(formik.errors.city)}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                                 {formik.touched.city && formik.errors.city && (
//                                     <Typography color="error" variant="body2">
//                                         {formik.errors.city}
//                                     </Typography>
//                                 )}
//                             </Grid>

//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">
//                                     State <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         value={formik.values.state}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         name="state"
//                                         error={formik.touched.state && Boolean(formik.errors.state)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value={'hcm'}>HCM City</MenuItem>
//                                         <MenuItem value={'danang'}>Da Nang City</MenuItem>
//                                     </Select>
//                                     {formik.touched.state && formik.errors.state && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.state}
//                                         </Typography>
//                                     )}
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12} sm={4.5} md={6}>
//                                 <Typography component="span">
//                                     Zip Code
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     id="zipCode"
//                                     name="zipCode"
//                                     placeholder="Zip Code"
//                                     variant="outlined"
//                                     value={formik.values.zipCode}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     InputLabelProps={{ shrink: false }}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">
//                                     Country <span style={{ color: 'red' }}>*</span>
//                                 </Typography>
//                                 <FormControl fullWidth required>
//                                     <Select
//                                         value={formik.values.country}
//                                         displayEmpty
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         name="country"
//                                         error={formik.touched.country && Boolean(formik.errors.country)}
//                                     >
//                                         <MenuItem value="" disabled>
//                                             Select
//                                         </MenuItem>
//                                         <MenuItem value={'vn'}>Vietnam</MenuItem>
//                                         <MenuItem value={'ph'}>Philippines</MenuItem>
//                                     </Select>
//                                     {formik.touched.country && formik.errors.country && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.country}
//                                         </Typography>
//                                     )}
//                                 </FormControl>
//                             </Grid>
//                         </Grid>

//                         <Grid container spacing={2} sx={{ marginTop: 1 }}>
//                         <Grid item xs={12} sm={12} md={12}>
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={formik.values.useDefaultAddress} // Giá trị mặc định sẽ được kiểm soát bởi formik
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         name="useDefaultAddress"
//                                         inputProps={{ 'aria-label': 'Use this address as default' }}
//                                         disabled={isCheckboxDisabled}
//                                     />
//                                 }
//                                 label={
//                                     <Typography sx={{ color: 'black' }}>
//                                         Use this address as default
//                                     </Typography>
//                                 }
//                             />
//                         </Grid>


//                             <Grid item xs={12} sm={12} md={12}>
//                                 <Button
//                                     type="button"
//                                     variant="text"
//                                     startIcon={<AddIcon />}
//                                     sx={{
//                                         color: 'blue',
//                                         textTransform: 'none',
//                                     }}
//                                     onClick={handleAddAddressClick}
//                                 >
//                                     <Typography variant="body1" sx={{ color: 'blue' }}>
//                                         Add Address
//                                     </Typography>
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Employment Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.employment} onChange={() => handleToggle('employment')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('employment')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.employment ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 Employment
//                             </Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">Employer</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="employer"
//                                     placeholder="Employer"
//                                     variant="outlined"
//                                     value={formik.values.employer}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">Employment Status</Typography>
//                                 <FormControl fullWidth>
//                                     <Select
//                                         name="employmentStatus"
//                                         value={formik.values.employmentStatus}
//                                         onChange={formik.handleChange}
//                                         displayEmpty
//                                     >
//                                         <MenuItem value="" disabled>Select</MenuItem>
//                                         <MenuItem value="none">None</MenuItem>
//                                         <MenuItem value="full-time">Full-time</MenuItem>
//                                         <MenuItem value="part-time">Part-time</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </Grid>

//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">
//                                     Occupation
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="occupation"
//                                     placeholder="Occupation"
//                                     variant="outlined"
//                                     value={formik.values.occupation}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">
//                                     Employee ID
//                                 </Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="employeeId"
//                                     placeholder="Employee ID"
//                                     variant="outlined"
//                                     value={formik.values.employeeId}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>

//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">Phone Number</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="phoneNumber"
//                                     placeholder="+1"
//                                     variant="outlined"
//                                     value={formik.values.phoneNumber}
//                                     onChange={formik.handleChange}
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">
//                                                 <FormControl>
//                                                     <Select
//                                                         value={selectedCountry}
//                                                         onChange={handleCountryCodeChange}
//                                                         displayEmpty
//                                                         variant="standard"
//                                                         disableUnderline
//                                                     >
//                                                         <MenuItem value="+1">
//                                                             <img
//                                                                 src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//                                                                 alt="United States flag"
//                                                                 style={{ width: 55, height: 20, marginRight: 5 }}
//                                                             />
//                                                         </MenuItem>
//                                                         {/* Add more countries here */}
//                                                     </Select>
//                                                 </FormControl>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">Email</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="email"
//                                     placeholder="Email"
//                                     variant="outlined"
//                                     value={formik.values.email}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">Address Type</Typography>
//                                 <FormControl fullWidth>
//                                     <Select
//                                         name="addressType"
//                                         value={formik.values.addressType}
//                                         onChange={formik.handleChange}
//                                         displayEmpty
//                                     >
//                                         <MenuItem value="" disabled>Select</MenuItem>
//                                         <MenuItem value="none">None</MenuItem>
//                                         <MenuItem value="home">Home</MenuItem>
//                                         <MenuItem value="work">Work</MenuItem>
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={3}>
//                                 <Typography component="span">Address Line 1</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="addressLine1"
//                                     placeholder="Address Line 1"
//                                     variant="outlined"
//                                     value={formik.values.addressLine1}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">Address Line 2</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="addressLine2"
//                                     placeholder="Address Line 2"
//                                     variant="outlined"
//                                     value={formik.values.addressLine2}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">City</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="city"
//                                     placeholder="City"
//                                     variant="outlined"
//                                     value={formik.values.city}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">State</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="state"
//                                     placeholder="State"
//                                     variant="outlined"
//                                     value={formik.values.state}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">Zip code</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="zipCode"
//                                     placeholder="Zip code"
//                                     variant="outlined"
//                                     value={formik.values.zipCode}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={6}>
//                                 <Typography component="span">Country</Typography>
//                                 <TextField
//                                     fullWidth
//                                     name="country"
//                                     placeholder="United States"
//                                     variant="outlined"
//                                     value={formik.values.country}
//                                     onChange={formik.handleChange}
//                                 />
//                             </Grid>
//                         </Grid>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Guarantor Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.guarantor} onChange={() => handleToggle('guarantor')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('guarantor')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.guarantor ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 Guarantor
//                             </Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography variant="body1" sx={{ mb: 2 }}>
//                             Let's add a guarantor who is responsible for paying the bill.
//                         </Typography>
//                         <Button
//                             variant="text"
//                             startIcon={<AddIcon />}
//                             sx={{
//                                 color: 'blue',
//                                 textTransform: 'none',
//                             }}
//                         >
//                             Add Guarantor
//                         </Button>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Related Person Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.relatedPerson} onChange={() => handleToggle('relatedPerson')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('relatedPerson')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.relatedPerson ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                                 Related Person
//                             </Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography variant="body1" sx={{ mb: 2 }}>
//                             Let's add any related person who can be reached if we are unable to contact the patient.
//                         </Typography>
//                         <Button
//                             variant="text"
//                             startIcon={<AddIcon />}
//                             sx={{
//                                 color: 'blue',
//                                 textTransform: 'none',
//                             }}
//                         >
//                             Add Related Person
//                         </Button>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Coverage Section */}
//             <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//                 <Accordion expanded={expanded.coverage} onChange={() => handleToggle('coverage')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('coverage')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded.coverage ? 'rotate(180deg)' : 'rotate(0deg)',
//                                 }}
//                             >
//                                 <ExpandMoreIcon />
//                             </IconButton>
//                             <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Coverage</Typography>
//                         </Box>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                         <Typography variant="body1" sx={{ marginBottom: 2 }}>
//                             You have not added any Coverage.
//                         </Typography>
//                         <Button
//                             variant="text"
//                             startIcon={<AddIcon />}
//                             sx={{
//                                 color: 'blue',
//                                 textTransform: 'none',
//                             }}
//                         >
//                             Add Coverage for this Patient
//                         </Button>
//                     </AccordionDetails>
//                 </Accordion>
//             </Paper>

//             {/* Chỗ đặt nút Add và Cancel */}
//             <Box sx={{ flexGrow: 1 }} />
//             <Grid container>
//                 <Grid item xs={12}>
//                     <Box display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
//                         <Button
//                             variant="outlined"
//                             sx={{ marginRight: 1, color: 'primary.main', borderColor: 'primary.main' }}
//                             onClick={handleCancelClick}
//                         >
//                             Cancel
//                         </Button>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleAddClick}
//                         >
//                             Add
//                         </Button>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }




import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid, TextField, FormControl, Select, MenuItem, Collapse, Paper, Checkbox } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, CalendarToday as CalendarTodayIcon } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DemographicsSection({ expanded, handleToggle, formik }) {
    const [openCalendar, setOpenCalendar] = React.useState(false);

    const handleCalendarToggle = () => {
        setOpenCalendar(!openCalendar);
    };

    const handleDateChange = (date) => {
        if (formik && formik.setFieldValue) {
            formik.setFieldValue('dateOfBirth', date.format('MM/DD/YYYY'));
        }
        setOpenCalendar(false);
    };

    // Kiểm tra xem formik có được truyền vào không, nếu không thì trả về null và log lỗi
    if (!formik) {
        console.error("formik is undefined in DemographicsSection");
        return null;  // Return early if formik is not provided
    };

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
                            Demographics
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography component="span">
                                Patient Type <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl fullWidth required>
                                <Select
                                    id="patientType"
                                    name="patientType"
                                    value={formik.values.patientType || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.patientType && Boolean(formik.errors.patientType)}
                                >
                                    <MenuItem value="" disabled>Select</MenuItem>
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="type1">Type 1</MenuItem>
                                    <MenuItem value="type2">Type 2</MenuItem>
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
                                value={formik.values.firstName || ''}
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
                                value={formik.values.lastName || ''}
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
                                    value={formik.values.birthSex || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.birthSex && Boolean(formik.errors.birthSex)}
                                >
                                    <MenuItem value="" disabled>Select</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
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
                                value={formik.values.dateOfBirth || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                                disabled={formik.values.unknown}
                                sx={{
                                    backgroundColor: formik.values.unknown ? '#e0e0e0' : 'transparent',
                                    '& .MuiInputBase-input.Mui-disabled': {
                                        WebkitTextFillColor: formik.values.unknown ? '#9e9e9e' : 'inherit',
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

                            <Collapse in={openCalendar && !formik.values.unknown}>
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
                                checked={formik.values.unknown || false}
                                onChange={e => {
                                    formik.handleChange(e);
                                    if (e.target.checked) {
                                        formik.setFieldValue('dateOfBirth', '');
                                        setOpenCalendar(false);
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
                            value={formik.values.philHealthId || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
}
