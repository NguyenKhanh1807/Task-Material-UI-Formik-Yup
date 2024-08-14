import * as React from 'react';
import { Box, Button, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export default function GuarantorSection() {
    const [open, setOpen] = React.useState(true); // Mặc định là mở

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Accordion expanded={open} onChange={handleToggle}>
                    <AccordionSummary>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                onClick={handleToggle}
                                sx={{
                                    transition: 'transform 0.3s',
                                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
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
                            Let's add guarantor who is responsible for paying the bill.
                        </Typography>
                        <Button
                            variant="text"
                            startIcon={<AddIcon />}
                            sx={{
                                color: 'blue',  // Đặt màu của văn bản và biểu tượng thành màu xanh
                                textTransform: 'none',  // Giữ nguyên kiểu chữ (không in hoa)
                            }}
                        >
                            <Typography variant="body1" sx={{ color: 'blue', textTransform: 'none'}}>
                                Add Guarantor
                            </Typography>
                        </Button>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Paper>
    );
}
