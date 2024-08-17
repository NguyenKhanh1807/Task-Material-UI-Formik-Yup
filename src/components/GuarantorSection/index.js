import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Button, Paper } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';

export default function GuarantorSection({ expanded, handleToggle }) {
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
                            Guarantor
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Let's add a guarantor who is responsible for paying the bill.
                    </Typography>
                    <Button
                        variant="text"
                        startIcon={<AddIcon />}
                        sx={{
                            color: 'blue',
                            textTransform: 'none',
                        }}
                    >
                        Add Guarantor
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Paper>
    );
}
