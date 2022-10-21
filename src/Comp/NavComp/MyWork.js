import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../ImgStyling.css';
import '../Styles/WorkStyle.css';
import Carousel from 'react-bootstrap/Carousel';

import SuGamepic from '../../images/SudokoDisplay.jpg';
import XOGamePic from '../../images/XODisplay.jpg';
import CalcPic from '../../images/CalcDisplay.jpg';

export default function MyWork() {

  const [projects, setProjects] = useState([
    { name: 'Sudoko', id: 1, pic: SuGamepic, alt: "Sudoko Pic", path: 'Sudoko', className: 'sudoPicStyle', item: 'item_1' },
    { name: 'XO', id: 2, pic: XOGamePic, alt: "XO Pic", path: 'XO', className: 'XOPicStyle', item: 'item_2' },
    { name: 'Calculator', id: 3, pic: CalcPic, alt: "Calculator Pic", path: 'Calculator', className: 'CalcPicStyle', item: 'item_3' }
  ]);

  const carouselDisplay = () => {
    return (
      projects.map((pro, i) => {
        return (
            <Carousel.Item key={i+1}>
              <nav>
                <Link to={`/projects/${ pro.path }`}>
                  <img
                    className={ `${ pro.className } + picStyle` }
                    src={ pro.pic }
                    alt={ pro.alt }
                  />
                    <Carousel.Caption>
                      <h3 style={{ color: 'black' }}>{ pro.name }</h3>
                    </Carousel.Caption>
                </Link>
              </nav>
            </Carousel.Item>
        )
      })
    )

  };
  const toggleActive = (index) => {
    let arr = projects.filter((e,i) => i !== index);
    let x = 0;
    let line = projects[index];
    while ( x < index ) {
      let shifter = arr.shift();
      arr.push(shifter);
      x++;
    };
    arr.unshift(line);
    arr.forEach((e,i) => { e.item = `item_${i+1} carousel_item` });
    setProjects((arr) => [...arr]);
    
  };

  return (
    <div className='carouselContainer'>
        <div className='carousel carList'>
          {projects.map((e, i) => {
              return (
                <div 
                  key={ i } 
                  className={`${ e.item } carousel_item`} 
                  // e.item == 'item_1' ? onClick={ () => toggleActive(i) } : onMouseEnter={ () => toggleActive(i) }  
                  onMouseEnter={ () => toggleActive(i) }
                >
                  <nav>
                    <Link to={`/projects/${ e.path }`} style={{ color: 'black' }}>
                      { e.name }
                        <img
                          className={ `${ e.className } picStyle` }
                          src={ e.pic }
                          alt={ e.alt }
                        />             
                    </Link>
                  </nav>
                </div>
              ) 
        })}
        </div>
    </div>
       
  )
};