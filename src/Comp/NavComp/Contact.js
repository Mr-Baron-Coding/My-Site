import React from 'react';

import '../Styles/ContactStyle.css';

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
        <div><TbBrandLinkedin size={ 28 }/>
          <a href="https://www.linkedin.com/in/mike-g-baron/" target="_blank">Mike Baron</a>
        </div>
        <div></div>
      </div>
      <div className='cardContainer'>
        <div><TbBrandGithub size={ 28 }/></div>
        <div>Mike-Baron-Coding</div>
      </div>   
      <div className='cardContainer'>
          <div className='innerContainer'>Download Resume
            <div><TbArrowDown size={ 28 } /></div> 
          </div>
        </div>
    </div>
  )
}
