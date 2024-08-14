import * as React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, FormControl, Select, MenuItem, Grid, TextField, Paper, InputAdornment } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';


export default function EmploymentDetails() {
    const [expanded, setExpanded] = React.useState(false); // Sử dụng state để theo dõi trạng thái mở rộng của Accordion. Ban đầu, Accordion sẽ không mở rộng.
    const [selectedCountry, setSelectedCountry] = React.useState('+1'); // State để lưu trữ mã quốc gia đã chọn, với giá trị mặc định là +1.

    const handleToggle = () => {
        setExpanded(!expanded);
    }; // Hàm này chuyển đổi trạng thái mở rộng của Accordion khi người dùng nhấp vào biểu tượng.

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    }; // Hàm này cập nhật mã quốc gia được chọn khi người dùng thay đổi lựa chọn trong danh sách chọn quốc gia.

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
                                    placeholder="Employer"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} placeholder="Select">
                                <Typography component="span">
                                    Employment Status
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled >
                                            Select
                                        </MenuItem>
                                        <MenuItem value={'full-time'}>Full-time</MenuItem>
                                        <MenuItem value={'part-time'}>Part-time</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Occupation
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Occupation"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Employee ID
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Employee ID"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Phone Number
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="+1"
                                    variant="outlined"
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
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Email
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Email"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Address Type
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            Select
                                        </MenuItem>
                                        <MenuItem value={'home'}>Home</MenuItem>
                                        <MenuItem value={'work'}>Work</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Typography component="span">
                                    Address Line 1
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Address Line 1"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Address Line 2
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Address Line 2"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    City
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="City"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    State
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="State"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Zip code
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Zip code"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography component="span">
                                    Country
                                </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="United States"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: false }}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
