import React,{useState,useEffect} from 'react';
import './component.css';
import {Box}  from '@mui/material'
import i from '../images/i-remove.svg';
import profileImage from '../images/ellipse.svg'
import energy from '../images/energy.svg';
import profile from '../images/profile.svg';
import follow from '../images/follow.svg';
import settingIcon from '../images/Setting.png'
import CustomizedSteppers from './stepper';
import WizardDialog from './stepper';
import WizardTimeline from './stepper';
import award from '../images/award.svg'
import MenuIcon from '../images/icon1.svg';
export default function ProfilePage() {
    const no = [1/10, 2/10, 3/10, 4/10];
    return (
   <div class="container">
                        <div class="row justify-content-md-center">
                        <div class="col-3">
                            <div className="left-icon">
                        <img style={{width: 20, height: 20}} src={i} />
                            </div>
                        </div>
                        <div class="col-6">
                        <div className="topic-style">
                            Your Profile
                        </div>
                        </div>
                        <div class="col">
                        <div className="right-icon">
                        <img style={{width: 20, height: 20}} src={settingIcon}  />
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-start'>
                    <div class="col image-icon">
                            <img src={profileImage} className='center-icon'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='name-title'>
                                name
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 energy-icon'>
                            <img src={energy} className='energy' /><br /><br/>
                            <label className='ttl-n'>243</label> <br />
                            <label className='ttl'>total calories</label>
                        </div>
                        <div className='col-6 energy-icon'>
                            <img src={follow} className='energy' /><br /><br/>
                            <label className='ttl-n'>243</label> <br />
                            <label className='ttl'>Followers</label>
                        </div>
                    </div>

                    {/* <div className='row main-timeline'>
                        <div className='col-4 left-timeline'>
                            <div className='first-topic'>
                                timeline
                            </div>
                        </div>
                        <div className='col-4 center-timeline'>
                            <div className='second-topic'>
                                stats
                            </div>
                        </div>
                        <div className='col-4 right-timeline'>
                            <div className='third topic'>
                                    duels
                            </div>
                        </div>
                    </div> */}
                    <WizardTimeline />
                    <div className='row' style={{marginTop: '20px', padding: '0px'}}>
                        <div className="col rewards-topic">
                            Rewards
                        </div>
                        <div className='col-4 right-burger'>
                            <img src={MenuIcon} className='menu-icon' alt="Hamburger Icon" />
                        </div>
                        <div className='row'>
                            <div className='col sub-topic'>
                                You've earned {no[3]} of all Rewards
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: '20px'}}>
                        <div className='col'>
                            <div className='image-cont'>
                                <img src={award} className='oval'/>
                            </div>
                            <label className='col icon-title'>
                                7-workout week</label>                     
                        </div>
                        <div className='col'>
                            <div className='image-cont'>
                                <img src={award} className='oval'/>
                            </div>
                            <label className='col icon-title'>
                                move-goal 200% </label>                             
                        </div>
                        <div className='col'>
                            <div className='image-cont'>
                                <img src={award} className='oval'/>
                            </div>
                            <label className='col icon-title'>
                                new move challenge</label> 
                        </div>
                        <div className='col'>
                            <div className='image-cont'>
                                <img src={award} className='oval'/>
                            </div>
                            <label className='col icon-title'>
                                longest move</label> 
                        </div>
                        <div className='col'>
                            <div className='image-cont'>
                                <img src={award} className='oval'/>
                            </div>
                            <label className='col icon-title'>
                                7-workout week</label> 
                        </div>
                    </div>

 </div>
    )            
}