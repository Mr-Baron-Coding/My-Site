import React from 'react';

import '../Styles/ContentStyling.css';

export default function About() {
  return (
    <>
      <div className='introDivStyle'>
        <div>
          Completed frontend course through SVCollege where I discovered 
          my passion for coding. 
        </div>
        <div>
          After internship perioed with BeSt continued working on my own projects and developing my skills and knowledge, creating websites and mobile apps. 
        </div>
        <div>
          Here are a the technologies I've been working with:
          <ul className='skillGrid'>
            <li>CSS</li>
            <li>Sass</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Node JS</li>
          </ul>
        </div>
      </div>
    </>
      
  )
};