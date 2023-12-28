import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Stack } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function StackBars() {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
            <BarChart
            series={[
                { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Distance' },
                { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Steps' },
                { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Points' },
            ]}
            width={400}
            height={350}
            sx={{}}
        />
        </LocalizationProvider>
    </Box>
  );
}
