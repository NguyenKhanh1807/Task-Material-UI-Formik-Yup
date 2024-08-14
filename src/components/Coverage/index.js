import * as React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export default function GuarantorSection() {
    const [expanded, setExpanded] = React.useState(true); // Mặc định là mở

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <Box sx={{ width: '100%' }}>
                <Accordion expanded={expanded} onChange={handleChange}>
                    <AccordionSummary>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                onClick={handleChange}
                                sx={{
                                    transition: 'transform 0.3s',
                                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Coverage</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            You have not added any Coverage.
                        </Typography>
                        <Button
                            variant="text"
                            startIcon={<AddIcon />}
                            sx={{
                                color: 'blue',
                                textTransform: 'none',
                            }}
                        >
                            Add Coverage for this Patient
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
