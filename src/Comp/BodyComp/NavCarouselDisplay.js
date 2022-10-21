import React, { useState, useEffect, useRef } from 'react';
import '../Styles/NavCarouselStyle.css';

export default function NavDisplay() {
  const ref = useRef(null);
  const [carList, setCarList] = useState([
    { displayed: 1, name: '1', item: 'item_1' },
    { displayed: 2, name: '2', item: 'item_2' },
    { displayed: 3, name: '3', item: 'item_3' },
    { displayed: 4, name: '4', item: 'item_4' }
  ]);

  // useEffect(() => {
  //   let myTest = ref.current.firstChild;
  //   console.log(myTest);
  
  // }, [carList]);
  
  const toggleActive = (index) => {
    let arr = carList.filter((e,i) => i !== index);
    let x = 0;
    let line = carList[index];
    while ( x < index ) {
      let shifter = arr.shift();
      arr.push(shifter);
      x++;
    };
    arr.unshift(line);
    arr.forEach((e,i) => { e.item = `item_${i+1} carousel_item` });
    setCarList((arr) => [...arr]);
    
  };

  return (
    <div className='carouselContainer'>
        <div className='carousel carList' ref={ref}>
          {carList.map((e, i) => {
              return (
                <div key={ i } className={`${ e.item } carousel_item`} onClick={ () => toggleActive(i) }>
                  { e.name }
                </div>
              ) 
        })}
        </div>
    </div>
  )
}
