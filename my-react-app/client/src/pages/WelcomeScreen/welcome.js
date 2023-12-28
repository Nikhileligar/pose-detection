import React, {useEffect, useState} from 'react';
import follow from '../../images/follow.svg';
import ss from '../../images/free.jpg'
import { useNavigate } from 'react-router-dom';
import bars22 from '../../images/bars22.avif';
import bars33 from '../../images/bars33.avif';
import yoga from '../../images/yoga.jpg';
import ViewListIcon from '@mui/icons-material/ViewList';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Box from '@mui/joy/Box';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


// import { TextField } from '@mui/material';

import './welcome.css';
// import '../../components/component.css'
export default function WelcomePage () {
    const navigate = useNavigate();
    const handleClick= (e) =>  {
        console.log(e)
        e.preventDefault();
        return navigate('/login', { replace: true });
    }

    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
      setView(nextView);
    };
  
    return (
        <div className='main-welcome-component'>
       {/* <div className="row justify-content-md-center container-welcome">
                        <div className="col-3">
                            <div>
                        <img src={logo} className='left-icon1'/>
                            </div>
                        </div>
                        <div className="col">
                        <div className="right-icon">
                        <img style={{width: 20, height: 20}} src={follow} />
                            </div>
                        </div> */}
        
        <div class="container-welcome">
                <div class="row">
                    <div class="col-2">
                        <div className='left-icon-logo'>
                        <img src={ss} className='left-icon1' />
                        </div>
                    </div>
                    <div class="col">
                    <div className="right-icon">
                    
                    </div>
                    </div>
                </div>
        </div>
                        

        {/* center body component  */}
             {/* <div className='row-justify-content-start center-content'>
                    <div className='col-3'>
                        <div className='main-title'>
                            <div>  Pose  </div>
                        <div className='ai'>
                            recognition.ai</div>
                    </div><br />
                        <div className='about-title'>
                        Strike a Pose, Embrace Progress: Your Journey to Better Posture Begins Here!
                        </div>
                    </div>
                    <div className='row-justify-content-center'>
                    <div className='col join-div'>
                <button className='join' onClick={handleJoinUsClick}>
                    join us
                </button>
            </div>
            {showSidebar && (
                <Sidebar onClose={handleCloseSidebar}>
                <SignUp />
         </Sidebar>
      )}
        </div> 
     </div>      */}
     {/* </div> */}

     <div className='row center-content'>
        <div className='col-2'>
            <div className='main-title'>
                Pose
            </div>
            <div className='ai'>
             Recognition.ai
            </div><br />
        </div>
        <div className='col-12'> 
        <div className='about-title'>
                Strike a Pose, Embrace Progress <br /> Your Journey to Better Posture Begins Here!
        </div>
        </div>
        <div className='col'>
        <button className='join' onClick={handleClick}>
            join us</button>
        </div>
    </div>

     {/* <div className='row about-main'>
        <div className='col-2 about'>
            <div className='about-us'>
                About us
            </div>      
            </div>       
            <div className='col-12 about-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud
            </div>
            <div className='col'>
                <img className='img-2' src={img23} />
            </div>
                <div className='col'>
                    <img src={pose22} className='pose-section'/>
                </div>
         </div> */}

<div className='row about-main'>
    <div className='col about-column'>
    <div class="card-group about-main">
  <div class="card h-100">
    <img src={bars22} className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card h-100">
    <img src={bars33} className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card h-100 ">
    <img src={yoga} className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </div>
</div>




  
<Card className='card-main'>
      <Card.Body>
        <Card.Title>Subscribe to our Newsletter</Card.Title>
        <Card.Text>
          To get latest updates on new features
        </Card.Text>
        <input type="email" placeholder='enter your email' className='email-sub'/>
        <Button variant="primary">Subscribe</Button>
      </Card.Body>
    </Card>
         
    
</div>
    )
}