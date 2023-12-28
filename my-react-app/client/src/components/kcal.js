import { Typography, Stack, Box, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import StackBars from '../components/barChart';

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Format the date as "DD MMMM"
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[currentDate.getDay()];

  return (
    <Stack  sx = {{ml: { sm: '50px' }}} position= "relative" allignItems='center' justifyContent="center" mt="32px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Today, {formattedDate},<br/> 
         {dayName}
        </Typography>
        <Button
    href="#track"
    className="search-btn"
    sx={{
        bgcolor: '#FF2625',
        borderRadius: "35px",
        color: '#fff', textTransform: 'none', 
        fontSize: { lg: '16px', xs: '10px' },
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center', 
        marginBottom: '30px',
        width: { lg: '250px', xs: '170px' },
        ml: { sm: '50px' },
        left: {lg: "560px", sx: "100px"},
    }}
  >
    Track Your Activity
  </Button>
    {/* <StackBars sx={{
        ml: {sm: '50px'},
        left: {lg: "560" , sx: "100px"}
    }} */}
    {/* /> */}
    </Stack>
  );
}

export default Header;
