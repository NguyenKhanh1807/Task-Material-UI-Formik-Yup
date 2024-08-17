import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Button, Paper } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';

export default function CoverageSection({ expanded, handleToggle }) {
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
                            Coverage
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" sx={{ mb: 2 }}>
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
        </Paper>
    );
}
