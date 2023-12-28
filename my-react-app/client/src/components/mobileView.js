import React, { useState, useEffect } from 'react';
import Shape from '../images/Icon.svg';
import profile from '../images/profile.svg';
import Calender from '../images/Calendar.png';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import card from '../images/card.svg';
import oval from '../images/Oval.svg';
import { Typography, Box, Button } from '@mui/material';
import Base from '../images/Base.svg'
import CombinedShape from '../images/CombinedShape.svg'
import Path from '../images/Path.svg';
import icon123 from '../images/icons123.svg'
import MenuIcon from '../images/icon1.svg';
import calories from '../images/calories.png';
import energy from '../images/energy.svg';
import steps from '../images/footstep.png';
import spec from '../images/spec.svg'
import heart from '../images/heart.png'
import axios from 'axios'
import dot from '../images/Dot.svg';
import loc from '../images/item2.svg'
import play from '../images/Play.svg'
import item4 from '../images/item4.svg'
import item5 from '../images/item5.png';
import invite from '../images/invite.svg';
import award from '../images/award.svg';
import Alert from 'react-bootstrap/Alert';
import logout from '../images/log-out.png'
const MobileLayout = () => {
    const Excercises = ['pullups','pushups','arnold-press','shoulder-frontrise','triceps','overhead-press','bench-press'];
    const Kcal = ['260.89','620.68','500.01','300','332.68','420.93']
  const footSteps = [200,1200,2300,1240,5033,7000]
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [name, setName] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);
  const yourDataArray = [
    <div className="col" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>meditation</label>
    </div>,

<div className="col" >
<div className='image-cont'>
  <img src={award} className='oval'/>
</div>
<br />
<label>meditation</label>
</div>,

<div className="col" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>meditation</label>
    </div>,

<div className="col" >
<div className='image-cont'>
  <img src={award} className='oval'/>
</div>
<br />
<label>meditation</label>
</div>
    
];

const itemsToShow = showAll ? yourDataArray : yourDataArray.slice(0, 5); 

  useEffect(() => {
    if (localStorage.getItem('userName')) {
     const username = localStorage.getItem('userName');
     setName(username)
    }
    
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  },[]);

  const signout = async () => {
    try {
        const response = await axios.get("/api/signout");
        console.log(response);
        alert(`${name} you have been successfully logged out from the session`)
        window.location.href = "/login";
        return response;
    } catch (err) {
        console.log(err);
    }
}

  const handleDateIconClick = () => {
    setDatePickerOpen(true);
  }

  const handleDatePickerChange = (newValue) => {
    setValue(newValue);
    setDatePickerOpen(false);
  }

  const options = { day: 'numeric', month: 'long' };
  const options2 = { month: 'long', year: 'numeric'};

  const formattedDate2 = currentDate.toLocaleDateString('en-US', options2);
  const formattedDate = currentDate.toLocaleDateString('en-IN', options);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[currentDate.getDay()];

  const viewProfilePage = () => {
    return window.location.href = "/profile";
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="mobile-container" sx={{ ml: { lg: '45px', xs: '10px' } }} position="relative" alignItems='center' justifyContent="center" mt="50px" >
              <div className="header">
              <div className="left">
              <img src={profile} alt="Profile"  onClick={viewProfilePage}/>
              <div className='profileName'>
              <div  className='profileNm'>Hello {name}!</div>
              <div  className='profileDay'>Thursday, 08 July</div>
              </div>
              </div>
              <div className='right1'>
                <img src={logout} onClick={signout} className='logout-icon' />
              </div>
              <div className='right1'>
              <img src={Calender} className='right' onClick={handleDateIconClick} />
      </div>

{/* </div> */}


        </div>
        <div className="info">
          <h1 className='header1' >20 Kcal</h1>
          <label>Total Kilo calories</label>
        </div>

        <div className="data" sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' } }}>
            <div className="data-item" sx={{ flex: 1, textAlign: 'center', marginBottom: { lg: '0', xs: '10px' } }}>
              Distance Value
            </div>
            <div className="data-item" sx={{ flex: 1, textAlign: 'center', marginBottom: { lg: '0', xs: '10px' } }}>
              Steps Value
            </div>
            <div className="data-item" sx={{ flex: 1, textAlign: 'center', marginBottom: { lg: '0', xs: '10px' } }}>
              Points Value
            </div>
          </div>

<div className="graph" sx={{ textAlign: 'center', marginTop: '20px' }}>
  <img src={card} sx={{ width: '100%' }} />
</div>

      <div className="buttons">
      <button className="rounded-button" sx={{ width: { lg: '300px', xs: '100%' } }}>
            <img src={Shape} className='Icon'/>
                <p className='Kcal'>
                    300 Kcal
                </p>
                <p className='excersice'>
                Dumbbell
                </p>
        </button>
        <button className="rounded-button" sx={{ width: { lg: '300px', xs: '100%' } }}>
            <img src={Shape} className='Icon'/>
                <p className='Kcal'>
                    300 Kcal
                </p>
                <p className='excersice'>
                Threadmill
                </p>
        </button>
        <button className="rounded-button" sx={{ width: { lg: '300px', xs: '100%' } }}>
            <img src={Shape} className='Icon'/>
                <p className='Kcal'>
                    300 Kcal
                </p>
                <p className='excersice'>
                bars
                </p>
        </button>
      </div>
      <div className="plan-section">
          <div>
            <b>
            <h1 className="my-plan">My Plan</h1>
            <p className="date">{formattedDate}</p>
            </b>
          </div>
          <div sx={{ marginLeft: 'auto', marginRight: { lg: '0', xs: '10px' } }}>
            {/* <img src={MenuIcon} className='menu-icon' alt="Hamburger Icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" fill="#040415" fill-opacity="0.4"/>
</svg>
          </div>
        </div>
        {isDatePickerOpen && (
            <DatePicker
            value={value}
            onChange={handleDatePickerChange}
            sx={{ width: { lg: '300px', xs: '100%' } }}
          />
        )}
        
        <Box className="card-main-compo">
  <div className='card-compo'>
    <div className='image-container'>
      <img src={energy} className='oval'/>
      {/* <img src={fwd1} className='next-icon-overlap'/> */}
    </div>
    <div className='content'>
      <Typography className='text-typo' fontSize="15px" fontFamily="Alegreya" lineHeight="35px" fontWeight={900}>
         WEEK 1 </Typography>
      <Typography className='text-typo1'  sx={{ fontWeight: 1000 }} fontSize="28px" lineHeight="35px"
        style={{ textShadow: '0px 5px 2px rgba(0, 0, 0, 0.2)' }}
      > Body Weight </Typography>
      <Typography className='text-typo2' fontSize="20px" fontFamily="Alegreya" 
        lineHeight="35px" fontWeight={1000}
      > 
      Workout 1 of 5</Typography>
    </div>
    <div className='next-c'>
          <Box className='flex-text'>
              <img src={CombinedShape} className='next-icon' />
              <div className='main-text'>
              <Typography className='text-content1'>
                  Next Excercise </Typography>
                  <Typography className='text-content2'>{Excercises[0]}</Typography>
              </div>
          </Box>
        </div>
  </div>


      </Box>
      <Box className="recent-plan-main">
        <Box className='recent-plan'>
          <Box className='typo-heading'>
            Recent plan
          </Box>
          <Box className='see-head' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See less' : 'See all'}
          </Box>
        </Box>
        <p className='recent-date'> {formattedDate2} </p>
      </Box>


<div className='row'>
<div className="col-sm-2" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
  <br />
  <label>special</label>
    </div>
    
    <div className="col-sm-2" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
  <br />
  <label>challenge</label>
    </div>

    <div className="col-sm-2" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>excersice</label>
    </div>

    <div className="col-sm-2" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>daily challenge</label>
    </div>

    <div className="col-sm-2" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>full body</label>
    </div>
    
    <div className="col" >
      <div className='image-cont'>
        <img src={award} className='oval'/>
    </div>
    <br />
  <label>classes</label>
    </div>
</div>


{/* <div>
<div className='baseIcons'>
  <img src={icon123}/>
</div>
<div className='baseIcons'>
<img src={icon123}/>

</div>
<div className='baseIcons'>
<img src={icon123}/>

</div>
<div className='baseIcons'>
<img src={icon123}/>

</div>


</div> */}
          {/* <Box className='icons-scroll'>
              <Box className='Base-lap'>
                <img src={Base} className='overlaping'/>
                <img src={star} className='overlap'/>
                <label>special</label>
              </Box>
              <Box className='Base-lap'>
                <img src={Base} className='overlaping1' />
                <img src={success} className='overlap1'/>
                <label>full body</label>
              </Box>
              <Box className='Base-lap'>
                <img src={Base} className='overlaping2'/>
                <img src={steps} className='overlap2'/>
                <label>beach-ready</label>
              </Box>
              <Box className='Base-lap'>
                <img src={Base} className='overlaping3'/>
                <img src={medal} className='overlap3'/>
                <label>challenge</label>
              </Box>
          </Box> */}
          
          <Box>
            <Box className='today-main'>
              <Box className='today-head'>
                Today's Information 
              </Box>
              <Box>
              <img src={MenuIcon} className='menu-icon' alt="Hamburger Icon" />
              </Box>
            </Box>
            <p className='recent-date1'> {formattedDate2} </p>
          </Box>



<div className='row'>
  <div className='col-sm-6'>
    <div className='row'>
      <div className='col-sm-12'>
      <Box className='inner-cal-div'>
            <Box className='cal-div'>
                    calories <br /> <br />
              <Box className='kcal-font'>
                {Kcal[1]} 
              </Box>
              <p className='kcal-text'>kcal</p>
                </Box>
                <Box className='cal-icon'>
                  <img src= {calories} />               
                  
              </Box>
            </Box>
      </div>
    </div>
    <div className='row'>
<div className='col-sm-12'>
<Box className='inner-cal-div'>
            <Box className='cal-div'>
                    steps <br /> <br />
              <Box className='kcal-font'>
                {footSteps[3]} 
              </Box>
              <p className='kcal-text'>steps</p>
                </Box>
                <Box className='cal-icon'>
                  <img src= {steps} />               
                  
              </Box>
            </Box>
</div>
    </div>

  </div>
  <div className='col-sm-6'>
  <Box className='graph-div'>
                <Box className='outer-flex'>
                <Box className='font-heart'>Heart</Box>
                <Box className='heart-logo'>
                  <img src={heart} /> 
                </Box>
                </Box>
                    <img src={Path} />
              </Box>
        </div>
</div>
         

                <div className='card-compo1'>
                          <div className='image-cont'>
                            <img src={award} className='oval'/>
                          </div>
                         <div className='col-sm-1'><p style={{color:'white'}}>gap of 5</p></div>
                          <div className='content'>
                            <Typography className='text-typo' fontSize="15px" fontFamily="Alegreya" lineHeight="35px" fontWeight={900}>
                              Invite friends </Typography>
                            <Typography className='text-typo1'  sx={{ fontWeight: 'bold' }} fontSize="20px" lineHeight="35px"
                              style={{ textShadow: '0px 5px 2px rgba(0, 0, 0, 0.1)' }}
                            > Invite your friends to get a chance to free workout excersices </Typography>
                          </div>
                  </div>
            <br />
            <div className='row'>
        <div className='col'>
              <div className='Typography'>Home</div>
                    <img src={dot} />
                </div>
                <div className='col'>
                      <img src={loc} />
                </div>
                <div className='col'>
                  <img src={play} />
                </div>
                <div className='col'>
                <img src={item4} />
                </div>
                <div className='col'>
                <img src={item5} />
                </div>
              </div>
      </div>
          </LocalizationProvider>
  );
};

export default MobileLayout;




{/* <Box>
            <div >
              <div className='row'>
              <div className="col-md-1" style={{
                    width: '100%', height: '100%', 
                    background: 'linear-gradient(180deg, #FF6079 0%, rgba(255, 96, 121, 0.49) )', 
                    borderRadius: 24
                    }}>
                  <img src={invite}/>
                  </div>
                  <div className='col-md-4'></div>
                  <div className='col-md-2'>
                  <Box className='invite-container'>
                <h2 className='message'>Invite your friends</h2>
                <div className='message-content'>
                  Invite your friends to get a free excersice right away
                </div>
              </Box>

                  </div>
              </div>
             
              </div>
              </Box> */}