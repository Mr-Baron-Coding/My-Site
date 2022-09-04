import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../ImgStyling.css';
import Carousel from 'react-bootstrap/Carousel';

import SuGamepic from '../images/SudokoDisplay.jpg';
import XOGamePic from '../images/XODisplay.jpg';
import CalcPic from '../images/CalcDisplay.jpg';

export default function MyWork() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // activeIndex={index} onSelect={handleSelect}
  // };

  const [projects, setProjects] = useState([
    { name: 'Sudoko', id: 1, pic: SuGamepic, alt: "Sudoko Pic", path: 'Sudoko', className: 'sudoPicStyle' },
    { name: 'XO', id: 2, pic: XOGamePic, alt: "XO Pic", path: 'XO', className: 'XOPicStyle' },
    { name: 'Calculator', id: 3, pic: CalcPic, alt: "Calculator Pic", path: 'Calculator', className: 'CalcPicStyle' }
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

  return (
    <div>
      <Carousel variant="dark">
          { carouselDisplay() }
      </Carousel>
      <Outlet />

    </div>
       
  )
};