import bgm from '../images/quickly-blob.png';
import bgm2 from '../images/girl.png'
import '../components/component.css'
import React, {useState, useEffect} from 'react'
const HomeScroll = () => {
    const redirect1 = () => {
    window.location.href = '/home';
    }
    return (
        <div className='main-container'> 
            <div className='row content1'>
                        <h1 className='para'>Pose Recognition App</h1>
                        <div className='row-2 topic'>
                        Strike a Pose, Embrace Progress: Your Journey to Better Posture Begins Here!
                        <div className='row-3'>
                            <br />
                            <button className='col-md-2 button-icon' onClick={redirect1}>
                                Next
                            </button>
                            <div>
                                <img src={bgm2} />
                            </div>
                        </div>
                </div>
                    </div>
                    </div>
                
    )
}

export default HomeScroll;