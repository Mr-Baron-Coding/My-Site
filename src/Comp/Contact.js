import React from 'react';
import './BodyStyle.css';

export default function Test() {
  return (
    <div className='contactDivStyle'>
      <div className='contentContainer'>
        <div style={{ flex: '1' }}>Mail:</div>
        <div style={{ flex: '4', justifyContent: 'left' }}>mikegbaron@gmail.com</div>
      </div>
      <div className='contentContainer'>
        <div style={{ flex: '1' }}>Linkedin:</div>
        <div style={{ flex: '4', justifyContent: 'left' }}>-----</div>
      </div>
      <div className='contentContainer'>
        <div style={{ flex: '1' }}>Github:</div>
        <div style={{ flex: '4', justifyContent: 'left' }}>-----</div>
      </div>
      <div className='contentContainer'>
        <div style={{ flex: '1' }}>Phone:</div>
        <div style={{ flex: '4', justifyContent: 'left' }}>+972-54-444-3598</div>
      </div>   
    </div>
  )
}
