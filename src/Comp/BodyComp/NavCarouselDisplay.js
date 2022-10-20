import React, { useState } from 'react';
import '../Styles/NavCarouselStyle.css';

export default function NavDisplay() {
  const [carList, setCarList] = useState([
    { active: false, displayed: 1, name: 'liat', item: 'item_1' },
    { active: true, displayed: 2, name: 'eithan', item: 'item_2' },
    { active: false, displayed: 3, name: 'emma', item: 'item_3' },
    { active: false, displayed: 4, name: 'mike', item: 'item_4' }
  ]);
  
  const changeActive = (index) => {
    let arr = carList.filter((e,i) => i !== index);
    let line = carList[index];
    arr.unshift(line);
    arr.forEach((e,i) => { e.displayed = i+1; e.item = `item_${i+1}` });
    setCarList((arr) => [...arr]);
    
  };

  return (
    <div className='carouselContainer'>
        <div className='carousel carList' >
          {carList.map((e, i) => {
              return (
                // <div key={ i } className={ e.active ? `carousel item_${ e.displayed } ${ e.active }` : `carousel item_${ e.displayed }`}  onClick={ () => changeActive(i) }>
                <div key={ i } className={ e.item } id='carousel_item' onClick={ () => changeActive(i) }>
                  { e.name }
                </div>
              ) 
        })};
        </div>
    </div>
  )
}
