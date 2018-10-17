import React from 'react';
import '../assets/css/slider.css';
//模块化到入图片
import img1 from '../assets/images/img1.jpg';
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

import ReactSwipe from 'react-swipe';

export default class Slider extends React.Component {

  render() {
    return <ReactSwipe className="carousel" swipeOptions={{ continuous: true, auto: 2000 }}>
        <div>
          <img src={img1} alt=''/>
          
        </div>
        <div>
        <img src={img2} alt=''/>
        
        </div>
        <div>
        <img src={img3} alt=''/>
        
        </div>
        <div>
        <img src={img4} alt=''/>
       
        </div>
      </ReactSwipe>;
  }
}
