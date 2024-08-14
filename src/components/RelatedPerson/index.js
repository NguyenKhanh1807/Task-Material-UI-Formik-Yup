import * as React from 'react';
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Paper } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon } from '@mui/icons-material';

export default function Demographics() {
    const [expanded, setExpanded] = React.useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
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
                                Related Person
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Let's add any related person who can be reached if we are unable to contact the patient.
                        </Typography>
                        <Button
                            variant="text"
                            startIcon={<AddIcon />}
                            sx={{
                                color: 'blue',  // Đặt màu của văn bản và biểu tượng thành màu xanh
                                textTransform: 'none',  // Giữ nguyên kiểu chữ (không in hoa)
                            }}
                        >
                            Add Related Person
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
