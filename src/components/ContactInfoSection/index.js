// import * as React from 'react';
// import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, TextField, Select, MenuItem, Grid, InputAdornment, FormControl, Checkbox, FormControlLabel, Radio, RadioGroup, Paper } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import AddIcon from '@mui/icons-material/Add';

// export default function ContactInfo({ expanded, handleToggle, formik }) {
//     const [selectedValue, setSelectedValue] = React.useState('permanent'); 
//     const [countryCode, setCountryCode] = React.useState('+63'); 
//     const [isCheckboxDisabled, setIsCheckboxDisabled] = React.useState(true); // Biến trạng thái để điều khiển checkbox

//     const handleChangeCategory = (event) => {
//         setSelectedValue(event.target.value);
//     };

//     const handleCountryCodeChange = (event) => {
//         setCountryCode(event.target.value);
//     };

//     const handleAddAddressClick = () => {
//         setIsCheckboxDisabled(false); // Cho phép checkbox trở thành bình thường
//     };

//     const handleAddClick1 = () => {
//         formik.setTouched({
//             phoneNumber: true,
//             email: true,
//             addressType: true,
//             addressLine1: true,
//             city: true,
//             state: true,
//             country: true,
//             phoneType: true
//         });
//         formik.validateForm();
//     };

//     const handleCancel1 = () => {
//         formik.resetForm();
//     };

//     return (
//         <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
//             <Box sx={{ flexGrow: 1 }}>
//                 <Accordion expanded={expanded} onChange={() => handleToggle('contactInfo')}>
//                     <AccordionSummary>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <IconButton
//                                 onClick={() => handleToggle('contactInfo')}
//                                 sx={{
//                                     transition: 'transform 0.3s',
//                                     transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
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
//                         <form onSubmit={formik.handleSubmit}>
//                             <Grid container spacing={2}>
//                                 {/* Phone Type Field */}
//                                 <Grid item xs={12} sm={3} md={3}>
//                                     <Typography component="span">
//                                         Phone Type <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <FormControl fullWidth required>
//                                         <Select
//                                             value={formik.values.phoneType}
//                                             displayEmpty
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             name="phoneType"
//                                             placeholder='Select'
//                                             error={formik.touched.phoneType && Boolean(formik.errors.phoneType)}
//                                         >
//                                             <MenuItem value="" disabled>
//                                                 Select
//                                             </MenuItem>
//                                             <MenuItem value={'type1'}>Type 1</MenuItem>
//                                             <MenuItem value={'type2'}>Type 2</MenuItem>
//                                         </Select>
//                                         {formik.touched.phoneType && formik.errors.phoneType && (
//                                             <Typography color="error" variant="body2">
//                                                 {formik.errors.phoneType}
//                                             </Typography>
//                                         )}
//                                     </FormControl>
//                                 </Grid>

//                                 {/* Phone Number Field */}
//                                 <Grid item xs={12} sm={4.5} md={4.5}>
//                                     <Typography component="span">
//                                         Phone Number <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         required
//                                         id="phoneNumber"
//                                         name="phoneNumber"
//                                         placeholder="+63"
//                                         variant="outlined"
//                                         value={formik.values.phoneNumber}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
//                                         InputProps={{
//                                             startAdornment: (
//                                                 <InputAdornment position="start">
//                                                     <FormControl>
//                                                         <Select
//                                                             value={countryCode}
//                                                             onChange={handleCountryCodeChange}
//                                                             displayEmpty
//                                                             variant="standard"
//                                                             disableUnderline
//                                                             sx={{ minWidth: 80 }}
//                                                         >
//                                                             <MenuItem value="+63">
//                                                                 <img
//                                                                     src="https://st3.depositphotos.com/17394196/19541/v/450/depositphotos_195419786-stock-illustration-republic-philippines.jpg"
//                                                                     alt="Philippines flag"
//                                                                     style={{ width: 55, height: 30, marginRight: 5 }}
//                                                                 />
//                                                             </MenuItem>
//                                                         </Select>
//                                                     </FormControl>
//                                                 </InputAdornment>
//                                             ),
//                                         }}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                     {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.phoneNumber}
//                                         </Typography>
//                                     )}
//                                 </Grid>

//                                 {/* Email Field */}
//                                 <Grid item xs={12} sm={4.5} md={4.5}>
//                                     <Typography component="span">
//                                         Email <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         required
//                                         id="email"
//                                         name="email"
//                                         placeholder="Email"
//                                         variant="outlined"
//                                         value={formik.values.email}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.email && Boolean(formik.errors.email)}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                     {formik.touched.email && formik.errors.email && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.email}
//                                         </Typography>
//                                     )}
//                                 </Grid>
//                             </Grid>

//                             {/* Address Category */}
//                             <Box sx={{ marginBottom: 2 }}>
//                                 <Typography variant="body1" component="div" sx={{ marginBottom: 1, marginTop: 2 }}>
//                                     Address Category
//                                 </Typography>
//                                 <RadioGroup
//                                     row
//                                     aria-label="address-category"
//                                     name="address-category"
//                                     value={selectedValue}
//                                     onChange={handleChangeCategory}
//                                 >
//                                     <FormControlLabel value="permanent" control={<Radio />} label="Permanent" />
//                                     <FormControlLabel value="temporary" control={<Radio />} label="Temporary" />
//                                     <FormControlLabel value="confidential" control={<Radio />} label="Confidential" />
//                                 </RadioGroup>
//                             </Box>    

//                             {/* Address Fields */}
//                             <Grid container spacing={2} sx={{ mt: 2 }}>
//                                 <Grid item xs={12} sm={6} md={4}>
//                                     <Typography component="span">
//                                         Address Type <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <FormControl fullWidth required>
//                                         <Select
//                                             value={formik.values.addressType}
//                                             displayEmpty
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             name="addressType"
//                                             error={formik.touched.addressType && Boolean(formik.errors.addressType)}
//                                         >
//                                             <MenuItem value="" disabled>
//                                                 Select
//                                             </MenuItem>
//                                             <MenuItem value={'type1'}>Type 1</MenuItem>
//                                             <MenuItem value={'type2'}>Type 2</MenuItem>
//                                         </Select>
//                                         {formik.touched.addressType && formik.errors.addressType && (
//                                             <Typography color="error" variant="body2">
//                                                 {formik.errors.addressType}
//                                             </Typography>
//                                         )}
//                                     </FormControl>
//                                 </Grid>

//                                 <Grid item xs={12} sm={4.5} md={3}>
//                                     <Typography component="span">
//                                         Address Line 1 <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         required
//                                         id="addressLine1"
//                                         name="addressLine1"
//                                         placeholder="Address Line 1"
//                                         variant="outlined"
//                                         value={formik.values.addressLine1}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                     {formik.touched.addressLine1 && formik.errors.addressLine1 && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.addressLine1}
//                                         </Typography>
//                                     )}
//                                 </Grid>

//                                 <Grid item xs={12} sm={4.5} md={5}>
//                                     <Typography component="span">
//                                         Address Line 2
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="addressLine2"
//                                         name="addressLine2"
//                                         placeholder="Address Line 2"
//                                         variant="outlined"
//                                         value={formik.values.addressLine2}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={4.5} md={6}>
//                                     <Typography component="span">
//                                         City <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         required
//                                         id="city"
//                                         name="city"
//                                         placeholder="City"
//                                         variant="outlined"
//                                         value={formik.values.city}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         error={formik.touched.city && Boolean(formik.errors.city)}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                     {formik.touched.city && formik.errors.city && (
//                                         <Typography color="error" variant="body2">
//                                             {formik.errors.city}
//                                         </Typography>
//                                     )}
//                                 </Grid>

//                                 <Grid item xs={12} sm={6} md={6}>
//                                     <Typography component="span">
//                                         State <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <FormControl fullWidth required>
//                                         <Select
//                                             value={formik.values.state}
//                                             displayEmpty
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             name="state"
//                                             error={formik.touched.state && Boolean(formik.errors.state)}
//                                         >
//                                             <MenuItem value="" disabled>
//                                                 Select
//                                             </MenuItem>
//                                             <MenuItem value={'hcm'}>HCM City</MenuItem>
//                                             <MenuItem value={'danang'}>Da Nang City</MenuItem>
//                                         </Select>
//                                         {formik.touched.state && formik.errors.state && (
//                                             <Typography color="error" variant="body2">
//                                                 {formik.errors.state}
//                                             </Typography>
//                                         )}
//                                     </FormControl>
//                                 </Grid>

//                                 <Grid item xs={12} sm={4.5} md={6}>
//                                     <Typography component="span">
//                                         Zip Code
//                                     </Typography>
//                                     <TextField
//                                         fullWidth
//                                         id="zipCode"
//                                         name="zipCode"
//                                         placeholder="Zip Code"
//                                         variant="outlined"
//                                         value={formik.values.zipCode}
//                                         onChange={formik.handleChange}
//                                         onBlur={formik.handleBlur}
//                                         InputLabelProps={{ shrink: false }}
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12} sm={6} md={6}>
//                                     <Typography component="span">
//                                         Country <span style={{ color: 'red' }}>*</span>
//                                     </Typography>
//                                     <FormControl fullWidth required>
//                                         <Select
//                                             value={formik.values.country}
//                                             displayEmpty
//                                             onChange={formik.handleChange}
//                                             onBlur={formik.handleBlur}
//                                             name="country"
//                                             error={formik.touched.country && Boolean(formik.errors.country)}
//                                         >
//                                             <MenuItem value="" disabled>
//                                                 Select
//                                             </MenuItem>
//                                             <MenuItem value={'vn'}>Vietnam</MenuItem>
//                                             <MenuItem value={'ph'}>Philippines</MenuItem>
//                                         </Select>
//                                         {formik.touched.country && formik.errors.country && (
//                                             <Typography color="error" variant="body2">
//                                                 {formik.errors.country}
//                                             </Typography>
//                                         )}
//                                     </FormControl>
//                                 </Grid>
//                             </Grid>

//                             <Grid container spacing={2} sx={{ marginTop: 1 }}>
//                                 {/* Checkbox Default */}
//                                 <Grid item xs={12} sm={12} md={12}>
//                                     <FormControlLabel
//                                         control={
//                                             <Checkbox
//                                                 checked={formik.values.useDefaultAddress}
//                                                 onChange={formik.handleChange}
//                                                 onBlur={formik.handleBlur}
//                                                 name="useDefaultAddress"
//                                                 inputProps={{ 'aria-label': 'Use this address as default' }}
//                                                 disabled={isCheckboxDisabled} // Điều khiển trạng thái disabled của checkbox
//                                             />
//                                         }
//                                         label={
//                                             <Typography sx={{ color: 'black' }}>
//                                                 Use this address as default
//                                             </Typography>
//                                         }
//                                     />
//                                 </Grid>


//                                 {/* Button Add Address */}
//                                 <Grid item xs={12} sm={12} md={12}>
//                                     <Button
//                                         type="button"
//                                         variant="text"
//                                         startIcon={<AddIcon />}
//                                         sx={{
//                                             color: 'blue',
//                                             textTransform: 'none',
//                                         }}
//                                         onClick={handleAddAddressClick} // Xử lý sự kiện click
//                                     >
//                                         <Typography variant="body1" sx={{ color: 'blue' }}>
//                                             Add Address
//                                         </Typography>
//                                     </Button>
//                                 </Grid>

//                                 <Grid item xs={2}>
//                                     <Box display="flex" justifyContent="flex-end">
//                                         <Grid item xs={12}>
//                                             <Button color="primary" variant="contained" onClick={handleAddClick1}>
//                                                 Add
//                                             </Button>

//                                             <Button
//                                                 variant="outlined"
//                                                 onClick={handleCancel1}
//                                                 sx={{ marginLeft: 1, color: 'primary.main', borderColor: 'primary.main' }}
//                                             >
//                                                 Cancel
//                                             </Button>
//                                         </Grid>  
//                                     </Box>
//                                 </Grid>
//                             </Grid>
//                         </form>
//                     </AccordionDetails>
//                 </Accordion>
//             </Box>
//         </Paper>
//     );
// }


import React from 'react';
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid, TextField, FormControl, Select, MenuItem, Paper, Checkbox, InputAdornment, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';

export default function ContactInfoSection({
    expanded,
    handleToggle,
    formik,
    selectedValue,
    handleChangeCategory,
    countryCode,
    handleCountryCodeChange,
    isCheckboxDisabled,
    handleAddAddressClick
}) {
    // Kiểm tra xem formik có được truyền vào không, nếu không thì trả về null và log lỗi
    if (!formik) {
        console.error("formik is undefined in ContactInfoSection");
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
                            Contact Info
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Typography component="span">
                                Phone Type <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl fullWidth required>
                                <Select
                                    value={formik.values.phoneType || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="phoneType"
                                    placeholder='Select'
                                    error={formik.touched.phoneType && Boolean(formik.errors.phoneType)}
                                >
                                    <MenuItem value="" disabled>
                                        Select
                                    </MenuItem>
                                    <MenuItem value="type1">Type 1</MenuItem>
                                    <MenuItem value="type2">Type 2</MenuItem>
                                </Select>
                                {formik.touched.phoneType && formik.errors.phoneType && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.phoneType}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4.5} md={4.5}>
                            <Typography component="span">
                                Phone Number <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="+63"
                                variant="outlined"
                                value={formik.values.phoneNumber || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FormControl>
                                                <Select
                                                    value={countryCode}
                                                    onChange={handleCountryCodeChange}
                                                    displayEmpty
                                                    variant="standard"
                                                    disableUnderline
                                                    sx={{ minWidth: 80 }}
                                                >
                                                    <MenuItem value="+63">
                                                        <img
                                                            src="https://st3.depositphotos.com/17394196/19541/v/450/depositphotos_195419786-stock-illustration-republic-philippines.jpg"
                                                            alt="Philippines flag"
                                                            style={{ width: 55, height: 30, marginRight: 5 }}
                                                        />
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </InputAdornment>
                                    ),
                                }}
                                InputLabelProps={{ shrink: false }}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                <Typography color="error" variant="body2">
                                    {formik.errors.phoneNumber}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={4.5} md={4.5}>
                            <Typography component="span">
                                Email <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="email"
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                value={formik.values.email || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                InputLabelProps={{ shrink: false }}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <Typography color="error" variant="body2">
                                    {formik.errors.email}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>

                    <Box sx={{ marginBottom: 2 }}>
                        <Typography variant="body1" component="div" sx={{ marginBottom: 1, marginTop: 2 }}>
                            Address Category
                        </Typography>
                        <RadioGroup
                            row
                            aria-label="address-category"
                            name="address-category"
                            value={selectedValue}
                            onChange={handleChangeCategory}
                        >
                            <FormControlLabel value="permanent" control={<Radio />} label="Permanent" />
                            <FormControlLabel value="temporary" control={<Radio />} label="Temporary" />
                            <FormControlLabel value="confidential" control={<Radio />} label="Confidential" />
                        </RadioGroup>
                    </Box>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography component="span">
                                Address Type <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl fullWidth required>
                                <Select
                                    value={formik.values.addressType || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="addressType"
                                    error={formik.touched.addressType && Boolean(formik.errors.addressType)}
                                >
                                    <MenuItem value="" disabled>
                                        Select
                                    </MenuItem>
                                    <MenuItem value="type1">Type 1</MenuItem>
                                    <MenuItem value="type2">Type 2</MenuItem>
                                </Select>
                                {formik.touched.addressType && formik.errors.addressType && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.addressType}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4.5} md={3}>
                            <Typography component="span">
                                Address Line 1 <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="addressLine1"
                                name="addressLine1"
                                placeholder="Address Line 1"
                                variant="outlined"
                                value={formik.values.addressLine1 || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)}
                                InputLabelProps={{ shrink: false }}
                            />
                            {formik.touched.addressLine1 && formik.errors.addressLine1 && (
                                <Typography color="error" variant="body2">
                                    {formik.errors.addressLine1}
                                </Typography>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={4.5} md={5}>
                            <Typography component="span">
                                Address Line 2
                            </Typography>
                            <TextField
                                fullWidth
                                id="addressLine2"
                                name="addressLine2"
                                placeholder="Address Line 2"
                                variant="outlined"
                                value={formik.values.addressLine2 || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                InputLabelProps={{ shrink: false }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4.5} md={6}>
                            <Typography component="span">
                                City <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <TextField
                                fullWidth
                                required
                                id="city"
                                name="city"
                                placeholder="City"
                                variant="outlined"
                                value={formik.values.city || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                InputLabelProps={{ shrink: false }}
                            />
                            {formik.touched.city && formik.errors.city && (
                                <Typography color="error" variant="body2">
                                    {formik.errors.city}
                                </Typography>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">
                                State <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl fullWidth required>
                                <Select
                                    value={formik.values.state || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="state"
                                    error={formik.touched.state && Boolean(formik.errors.state)}
                                >
                                    <MenuItem value="" disabled>
                                        Select
                                    </MenuItem>
                                    <MenuItem value="hcm">HCM City</MenuItem>
                                    <MenuItem value="danang">Da Nang City</MenuItem>
                                </Select>
                                {formik.touched.state && formik.errors.state && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.state}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4.5} md={6}>
                            <Typography component="span">
                                Zip Code
                            </Typography>
                            <TextField
                                fullWidth
                                id="zipCode"
                                name="zipCode"
                                placeholder="Zip Code"
                                variant="outlined"
                                value={formik.values.zipCode || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                InputLabelProps={{ shrink: false }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <Typography component="span">
                                Country <span style={{ color: 'red' }}>*</span>
                            </Typography>
                            <FormControl fullWidth required>
                                <Select
                                    value={formik.values.country || ''}
                                    displayEmpty
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="country"
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                >
                                    <MenuItem value="" disabled>
                                        Select
                                    </MenuItem>
                                    <MenuItem value="vn">Vietnam</MenuItem>
                                    <MenuItem value="ph">Philippines</MenuItem>
                                </Select>
                                {formik.touched.country && formik.errors.country && (
                                    <Typography color="error" variant="body2">
                                        {formik.errors.country}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ marginTop: 1 }}>
                        <Grid item xs={12} sm={12} md={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.useDefaultAddress || false}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        name="useDefaultAddress"
                                        inputProps={{ 'aria-label': 'Use this address as default' }}
                                        disabled={isCheckboxDisabled}
                                    />
                                }
                                label={
                                    <Typography sx={{ color: 'black' }}>
                                        Use this address as default
                                    </Typography>
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Button
                                type="button"
                                variant="text"
                                startIcon={<AddIcon />}
                                sx={{
                                    color: 'blue',
                                    textTransform: 'none',
                                }}
                                onClick={handleAddAddressClick}
                            >
                                <Typography variant="body1" sx={{ color: 'blue' }}>
                                    Add Address
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
}
