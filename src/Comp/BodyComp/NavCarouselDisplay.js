import React, { useEffect } from 'react';
import '../Styles/NavCarouselStyle.css';

export default function NavDisplay() {
  const carList = [
    { active: false, displayed: 1 },
    { active: true, displayed: 2 },
    { active: false, displayed: 3 },
    { active: false, displayed: 4 }
  ];

  // useEffect(() => {
  //   displayList();
  
  // }, [carList])
  
  const changeActive = (ap) => {
    carList.map((e,i) => {
      ap === i ? e.active = true : e.active = false;
    })
    console.log(carList);
  };

  return (
    <div className='carouselContainer'>
        <div className='list'>
            {carList.map((e, i) => {
              return (
          // <li key={ i } className={ e.active ? `carousel item_${ e.displayed } ${ e.active }` : `carousel item_${ e.displayed }`}  onClick={ () => changeActive(i) }>
          <div key={ i } className={ `carousel item_${ e.displayed }`}  id={ `${e.active}`} onClick={ () => changeActive(i) }>
          { e.displayed }
          </div>
          )
          
        })  }
        </div>
    </div>
  )
}
