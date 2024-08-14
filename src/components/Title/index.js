import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Typography, Box } from '@mui/material';

function BasicSwitches() {
  return (
    <Switch defaultChecked color="primary" />
  );
}

function Content() {
  return (
    <>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h6" component="div" color="primary" sx={{ fontWeight: 'bold', marginRight: 1, marginLeft: 3, marginTop: 3}}>
          Patients
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginRight: 1, marginTop: 3 }}>
          /
        </Typography>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginTop: 3 }}>
          Add Patient
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ marginRight: 2, marginLeft: 3 }}>
          Add Patient using Quick Mode
        </Typography>
        <BasicSwitches />
      </Box>
    </>
  );
}

export default Content;
