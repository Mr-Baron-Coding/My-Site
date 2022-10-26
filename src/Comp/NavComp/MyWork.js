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
    arr.forEach((e,i) => { e.item = `item_${i+1}` });
    setProjects((arr) => [...arr]);
    // let as = document.querySelector('.carousel');
    // console.log(as);
    // let rs = getComputedStyle(as);
    // let bs = rs.getPropertyValue('--carousel-border');
    // console.log(rs);
    // console.log(bs);
    // as.style.setProperty('--carousel-border', '4px solid green');
    
    
  };

  return (
    <div className='carouselContainer'>
        <div className='carousel carList'>
          {projects.map((e, i) => {
              return (
                <div 
                  key={ i } 
                  className={`${ e.item } carousel_item`} 
                  onClick={ () => toggleActive(i) }
                >
                  { e.item === 'item_1' 
                    ? <nav>
                        <Link to={`/projects/${ e.path }`} style={{ color: 'black' }}>
                            <img
                              className={ `${ e.className } picStyle` }
                              src={ e.pic }
                              alt={ e.alt }
                            />             
                        </Link>
                      </nav>
                    : <div>{ e.name } </div>
                  }
                  
                </div>
              ) 
        })}
        </div>
    </div>
       
  )
};