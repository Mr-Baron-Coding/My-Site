import React from 'react';
import './SphereStyle.css';

export default function Sphere(props) {
  const sayHello = (e) => {
    console.log('Hello');
    console.log(e);
    props.add(e)
  };

  return (
    <div className='sphereDivStyle'>
        <div className='sliceContainerStyle'>
            <div className='slice_1Style' onMouseEnter={ () => sayHello('1') }>Slice</div>
            <div className='slice_2Style' onMouseEnter={ () => sayHello('2') }>Slice</div>
            <div className='slice_3Style' onMouseEnter={ () => sayHello('3') }>Slice</div>
            <div className='slice_4Style' onMouseEnter={ () => sayHello('4') }>Slice</div>
            <div className='slice_5Style' onMouseEnter={ () => sayHello('5') }>Slice</div>
        </div>
    </div>
  )
}
