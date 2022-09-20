import React from 'react';

import './BodyStyle.css';
import profPic from '../images/ProfilePic.jpg';

export default function WelcomeField() {
  return (
    <div className='bodyDivStyle'>
      <div className='welcomeTextStyle'>
        <p>Hi, I'm Mike. </p>
        <p>Frontend programmer from Rishon LeTzion, Israel</p>
        <p>Let's create your dreams together</p>
      </div>
      <div className='picDivStyle'>
        <img src={ profPic } alt='profilePic' className='prPicStyle' />
      </div>
    </div>
  )
}
