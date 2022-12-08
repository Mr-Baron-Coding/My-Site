import React from 'react';

import '../Styles/ContactStyle.css';
// import '../../Resume/Michael Baron.pdf';

import { TbMail, TbBrandLinkedin, TbBrandGithub, TbArrowDown } from "react-icons/tb";

export default function Test() {
  return (
    <div className='contactContainerStyle'>
      <div className='cardContainer mail'>
        <a href="mailto:mikebaroncoding@gmail.com" className='linkHover'>
          <div className='innerContainer'><TbMail/>
            <div>mikebaroncoding</div>
          </div>
        </a>
      </div>
      <div className='cardContainer linkedin'>
        <a href="https://www.linkedin.com/in/mike-g-baron/" className='linkHover' target="_blank">
          <div className='innerContainer'><TbBrandLinkedin/>
            <div>Mike Baron</div>
          </div>
        </a>
      </div>
      <div className='cardContainer github'>
        <a href='https://github.com/Mr-Baron-Coding' className='linkHover' target="_blank">
          <div className='innerContainer'><TbBrandGithub/>
            <div>Mike-Baron-Coding</div>
          </div>
        </a>
      </div>   
      <div className='cardContainer resume'>
        <a href='.\src\Resume\MichaelBaron.pdf' className='linkHover' download='MichaelBaron.pdf'>
          <div className='innerContainer'>Download Resume   
            <div><TbArrowDown/></div>
          </div>
        </a>
        </div>
    </div>
  )
}
