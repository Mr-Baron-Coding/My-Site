import React from 'react';

import '../Styles/ContactStyle.css';
// import '../../Resume/Michael Baron.pdf';

import { TbMail, TbBrandLinkedin, TbBrandGithub, TbArrowDown } from "react-icons/tb";

export default function Test() {
  return (
    <div className='contactContainerStyle'>
      <div className='cardContainer'>
        <div className='innerContainer'><TbMail size={ 28 }/>
        <a href="mailto:mikebaroncoding@gmail.com"><div>mikebaroncoding@gmail.com</div></a>
        </div>
      </div>
      <div className='cardContainer'>
        <div className='innerContainer'><TbBrandLinkedin size={ 28 }/>
          <a href="https://www.linkedin.com/in/mike-g-baron/" target="_blank"><div>Mike Baron</div></a>
        </div>
      </div>
      <div className='cardContainer'>
        <div className='innerContainer'><TbBrandGithub size={ 28 }/>
          <a href='https://github.com/Mr-Baron-Coding' target="_blank"><div>Mike-Baron-Coding</div></a>
        </div>
      </div>   
      <div className='cardContainer'>

          <div className='innerContainer'>Download Resume
          {/* <a href='src/Resume/MichaelBaron.pdf' download> */}

              {/* <a href='https://docs.google.com/document/d/10lozy83eYi3yfwGfHaBT3U1__xDi966j3Qf00JQH3rw' download='MichaelBaron'> */}
              <a href='https://1drv.ms/b/s!Ap2m7IPr3_YqgrAEDkbaJLq7f0tJKg?e=E8Nyjk' download='MichaelBaron'>
                {/* <div>Hello</div> */}
                <div><TbArrowDown size={ 28 } /></div>
                </a>
          </div>
        </div>
    </div>
  )
}
